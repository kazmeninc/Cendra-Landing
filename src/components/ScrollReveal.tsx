import React, { useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  distance?: number;
  duration?: number;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 36,
  duration = 750,
  threshold = 0.12,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already in viewport on mount (e.g. above fold)
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.88) {
      // Small timeout so initial mount animation actually visibly plays
      const timer = setTimeout(() => setIsVisible(true), Math.max(50, delay));
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0) scale(0.97)`;
      case "down":
        return `translate3d(0, -${distance}px, 0) scale(0.97)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "scale":
        return "translate3d(0, 0, 0) scale(0.93)";
      case "none":
        return "translate3d(0, 0, 0)";
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transform: getTransform(),
      }}
      className={`transition-all will-change-transform will-change-opacity ${
        isVisible
          ? "opacity-100 filter-none"
          : "opacity-0 blur-[1px]"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
