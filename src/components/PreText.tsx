import React, { useEffect, useRef, useState } from "react";
import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";

interface Props {
  children: React.ReactNode;
  font?: string;
  lineHeight?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * PreText Component
 * Uses @chenglou/pretext for high-fidelity typography and balanced text layout.
 */
export default function PreText({
  children,
  font = "400 18px Inter",
  lineHeight = 28,
  className = "",
  as: Component = "span",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Extract text from children
  const text = React.Children.toArray(children).join("");

  useEffect(() => {
    setIsClient(true);
    if (!containerRef.current) return;

    const updateLayout = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      if (width === 0) return;

      try {
        const prepared = prepareWithSegments(text, font);
        const result = layoutWithLines(prepared, width, lineHeight);
        setLines(result.lines);
      } catch (err) {
        console.error("Pretext Layout Error:", err);
        // Fallback to standard rendering if layout fails
        setLines([{ text }]);
      }
    };

    const observer = new ResizeObserver(() => {
      // Use requestAnimationFrame to avoid "ResizeObserver loop limit exceeded"
      requestAnimationFrame(updateLayout);
    });

    observer.observe(containerRef.current);
    updateLayout();

    return () => observer.disconnect();
  }, [text, font, lineHeight]);

  if (!isClient) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component ref={containerRef} className={`pretext-container ${className}`} style={{ display: 'block' }}>
      {lines.map((line, i) => (
        <span key={i} className="pretext-line" style={{ display: 'block', whiteSpace: 'pre' }}>
          {line.text}
        </span>
      ))}
      <style>{`
        .pretext-container {
          width: 100%;
          max-width: 100%;
        }
        .pretext-line {
          min-height: ${lineHeight}px;
        }
      `}</style>
    </Component>
  );
}
