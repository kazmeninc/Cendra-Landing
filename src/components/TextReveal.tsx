import React, { useRef, useEffect, useState } from "react";

interface TextRevealProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  text,
  className = "",
  delay = 0,
  as: Component = "div",
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Trigger when element scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const content = text || children;

  return (
    <Component
      ref={ref as any}
      className={`overflow-hidden inline-block ${className}`}
    >
      <span
        style={{
          transitionDuration: "850ms",
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={`inline-block transition-all will-change-transform ${
          isRevealed
            ? "translate-y-0 opacity-100 filter-none"
            : "translate-y-[115%] opacity-0 blur-[2px]"
        }`}
      >
        {content}
      </span>
    </Component>
  );
};

export default TextReveal;
