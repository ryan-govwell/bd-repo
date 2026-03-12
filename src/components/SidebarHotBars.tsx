import { objectionData, valuePropData } from '../data';

interface SidebarHotBarsProps {
  activeObjection: string | null;
  activeValueProp: string | null;
  onObjectionToggle: (label: string) => void;
  onValuePropToggle: (label: string) => void;
}

const SIDEBAR_BASE: React.CSSProperties = {
  position: 'fixed',
  top: 56,
  bottom: 0,
  width: 260,
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 40,
  overflowY: 'auto',
};

export default function SidebarHotBars({
  activeObjection,
  activeValueProp,
  onObjectionToggle,
  onValuePropToggle,
}: SidebarHotBarsProps) {
  const activeVPData = valuePropData.find((v) => v.buttonLabel === activeValueProp) ?? null;
  const activeObjData = objectionData.find((o) => o.label === activeObjection) ?? null;

  return (
    <>
      {/* ── Left sidebar: Value Props ── */}
      <div style={{ ...SIDEBAR_BASE, left: 0, borderRight: '2px solid #C0392B' }}>
        {/* Label */}
        <div style={{ padding: '12px 14px 10px', borderBottom: '1px solid #E5E7EB', flexShrink: 0 }}>
          <p style={{ color: '#9CA3AF', letterSpacing: '0.08em', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', margin: 0 }}>
            💡 Value Props
          </p>
        </div>

        {/* Inline popup */}
        {activeVPData && (
          <div style={{ padding: '12px 14px', backgroundColor: '#F0FDF4', borderBottom: '1px solid #BBF7D0', flexShrink: 0 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
              {activeVPData.popupTitle}
            </p>
            <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.55, margin: 0 }}>
              {activeVPData.description}
            </p>
          </div>
        )}

        {/* Pills */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {valuePropData.map((vp) => {
            const active = vp.buttonLabel === activeValueProp;
            return (
              <button
                key={vp.buttonLabel}
                onClick={() => onValuePropToggle(vp.buttonLabel)}
                style={{
                  textAlign: 'left',
                  fontSize: 13,
                  fontWeight: 500,
                  padding: '7px 12px',
                  borderRadius: 6,
                  border: '1px solid',
                  backgroundColor: active ? '#1E6E43' : '#fff',
                  color: active ? '#fff' : '#374151',
                  borderColor: active ? '#1E6E43' : '#D1D5DB',
                  cursor: 'pointer',
                  transition: 'opacity 0.15s',
                  width: '100%',
                }}
              >
                {vp.buttonLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Right sidebar: Objections ── */}
      <div style={{ ...SIDEBAR_BASE, right: 0, borderLeft: '2px solid #C0392B' }}>
        {/* Label */}
        <div style={{ padding: '12px 14px 10px', borderBottom: '1px solid #E5E7EB', flexShrink: 0 }}>
          <p style={{ color: '#9CA3AF', letterSpacing: '0.08em', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', margin: 0 }}>
            🔥 Objections
          </p>
        </div>

        {/* Inline popup */}
        {activeObjData && (
          <div style={{ padding: '12px 14px', backgroundColor: '#FDF2F1', borderBottom: '1px solid #F5C6C1', flexShrink: 0 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#C0392B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
              {activeObjData.label}
            </p>
            {activeObjData.lines.map((line, i) => (
              <p key={i} style={{ fontSize: 13, color: '#374151', lineHeight: 1.55, margin: i > 0 ? '6px 0 0' : 0 }}>
                {line}
              </p>
            ))}
          </div>
        )}

        {/* Pills */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {objectionData.map((obj) => {
            const active = obj.label === activeObjection;
            return (
              <button
                key={obj.label}
                onClick={() => onObjectionToggle(obj.label)}
                style={{
                  textAlign: 'left',
                  fontSize: 13,
                  fontWeight: 500,
                  padding: '7px 12px',
                  borderRadius: 6,
                  border: '1px solid',
                  backgroundColor: active ? '#7B1F1F' : '#fff',
                  color: active ? '#fff' : '#374151',
                  borderColor: active ? '#7B1F1F' : '#D1D5DB',
                  cursor: 'pointer',
                  transition: 'opacity 0.15s',
                  width: '100%',
                }}
              >
                {obj.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
