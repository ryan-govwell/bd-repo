interface HeaderProps {
  onReset: () => void;
}

export default function Header({ onReset }: HeaderProps) {
  return (
    <header
      style={{ borderBottom: '2px solid #C0392B' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-4 py-3"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <span
          style={{ backgroundColor: '#C0392B' }}
          className="text-white font-bold text-sm px-3 py-1 rounded-full"
        >
          GovWell
        </span>
        <img src="/bd-repo/mascot.png" alt="GovWell mascot" className="w-7 h-7 object-contain" />
        <span className="text-gray-700 font-medium text-sm">Cold Call Builder</span>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-2">
        <a
          href="https://www.notion.so/native/govwell/1b7b8bc3117541bfb83630c3e6d5428f?v=5a2a58100aad49aa9df124de782e7eb0&deepLinkOpenNewTab=true"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderColor: '#C0392B', color: '#C0392B' }}
          className="text-xs font-medium px-3 py-1.5 rounded-md border bg-white hover:bg-red-50 transition-colors"
        >
          💬 Feedback
        </a>
        <button
          onClick={onReset}
          style={{ borderColor: '#C0392B', color: '#C0392B' }}
          className="text-xs font-medium px-3 py-1.5 rounded-md border bg-white hover:bg-red-50 transition-colors"
        >
          Reset
        </button>
      </div>
    </header>
  );
}
