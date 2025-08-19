import { useEffect, useState } from "react";

interface CircleProgressProps {
  percentage: number;
  color?: string;
  size?: number | { mobile: number; desktop: number }; // aceita número ou objeto
  duration?: number;
  content?: string;
}

export default function CircleProgress({
  percentage,
  color = "#00ff43",
  size = 150,
  duration = 3000,
  content = "default",
}: CircleProgressProps) {
  const [progress, setProgress] = useState(0);
  const [currentSize, setCurrentSize] = useState(
    typeof size === "number" ? size : size.mobile
  );

  // Responsivo: define tamanho conforme largura da tela
  useEffect(() => {
    const handleResize = () => {
      if (typeof size !== "number") {
        setCurrentSize(window.innerWidth >= 768 ? size.desktop : size.mobile);
      }
    };
    handleResize(); // inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  // Animação
  useEffect(() => {
    let start = 0;
    const stepTime = duration / percentage;

    const timer = setInterval(() => {
      start++;
      setProgress(start);
      if (start >= percentage) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [percentage, duration]);

  const strokeWidth = 10;
  const radius = (currentSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{ width: currentSize, height: currentSize }}
    >
      <svg className="rotate-[-90deg]" width={currentSize} height={currentSize}>
        <circle
          cx={currentSize / 2}
          cy={currentSize / 2}
          r={radius}
          stroke="#191919"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={currentSize / 2}
          cy={currentSize / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>

      <div className="absolute text-center">
        <h2 className="text-sm md:text-lg font-semibold text-gray-300">
          {content}
        </h2>
      </div>
    </div>
  );
}
