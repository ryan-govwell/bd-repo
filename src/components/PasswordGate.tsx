import { useState } from 'react';

const PASSWORD = 'permitplease';

interface PasswordGateProps {
  onUnlock: () => void;
}

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      localStorage.setItem('gwcb_auth', '1');
      onUnlock();
    } else {
      setError(true);
      setValue('');
    }
  };

  return (
    <div
      style={{ backgroundColor: '#FDF2F1', minHeight: '100vh' }}
      className="flex items-center justify-center px-4"
    >
      <div
        style={{ border: '1px solid #E8E0E0', maxWidth: '360px', width: '100%' }}
        className="bg-white rounded-xl p-8 flex flex-col items-center gap-6"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            style={{ backgroundColor: '#C0392B' }}
            className="text-white font-bold text-sm px-3 py-1 rounded-full"
          >
            GovWell
          </span>
          <img src="/bd-repo/mascot.png" alt="GovWell mascot" className="w-5 h-5 object-contain" />
          <span className="text-gray-700 font-medium text-sm">Cold Call Builder</span>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">Enter the password to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            style={{
              border: error ? '1px solid #C0392B' : '1px solid #D1D5DB',
              outline: 'none',
            }}
            className="w-full px-4 py-2.5 rounded-lg text-sm text-gray-800 focus:border-red-400"
          />
          {error && (
            <p style={{ color: '#C0392B' }} className="text-xs text-center">
              Incorrect password. Try again.
            </p>
          )}
          <button
            type="submit"
            style={{ backgroundColor: '#C0392B' }}
            className="w-full text-white font-semibold text-sm py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
