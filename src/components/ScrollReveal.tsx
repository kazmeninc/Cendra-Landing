import React, { useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setIsVisible(true);
      return;
    }

    // Immediately reveal if element is already within viewport
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.95) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(el);

    // Safety fallback: if not revealed within 800ms, reveal smoothly so content is NEVER blank
    const safetyTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "600ms",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all ${
        isVisible
          ? "opacity-100 translate-y-0"
          : `opacity-0 ${direction === "up" ? "translate-y-4" : ""}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
