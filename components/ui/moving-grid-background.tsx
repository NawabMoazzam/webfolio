"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const MovingGridBackground = ({
  children,
  className,
  containerClassName,
  backgroundClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  backgroundClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCursorPosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden bg-background",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-50 transition-opacity duration-300",
          backgroundClassName
        )}
        style={{
          background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(var(--primary-rgb), 0.15) 0%, transparent 60%)`,
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
      </div>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

export default MovingGridBackground;