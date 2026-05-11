import { useState, type FC } from 'react';

interface ViewToggleProps {
  onViewChange: (view: 'globe' | 'grid') => void;
  initialView?: 'globe' | 'grid';
}

const ViewToggle: FC<ViewToggleProps> = ({ onViewChange, initialView = 'globe' }) => {
  const [activeView, setActiveView] = useState<'globe' | 'grid'>(initialView);

  const handleSwitch = (view: 'globe' | 'grid') => {
    setActiveView(view);
    onViewChange(view);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.pill}>
        {/* Globe / Interactive View */}
        <button
          onClick={() => handleSwitch('globe')}
          style={{
            ...styles.button,
            ...(activeView === 'globe' ? styles.active : {}),
          }}
          aria-label="Globe view"
          title="Interactive 3D View"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <span style={styles.label}>Explore</span>
        </button>

        {/* Grid / Card View */}
        <button
          onClick={() => handleSwitch('grid')}
          style={{
            ...styles.button,
            ...(activeView === 'grid' ? styles.active : {}),
          }}
          aria-label="Grid view"
          title="Card Grid View"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>
          <span style={styles.label}>Cards</span>
        </button>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 50,
    animation: 'toggleFadeIn 0.6s ease-out 0.5s both',
  },
  pill: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px',
    background: 'rgba(10, 10, 10, 0.6)',
    backdropFilter: 'blur(24px) saturate(1.4)',
    WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '100px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.45)',
    background: 'transparent',
    border: 'none',
    borderRadius: '100px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap' as const,
  },
  active: {
    color: '#fff',
    background: 'rgba(139, 92, 246, 0.25)',
    boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
  },
  label: {
    // Keep labels visible on all sizes
  },
};

export default ViewToggle;
