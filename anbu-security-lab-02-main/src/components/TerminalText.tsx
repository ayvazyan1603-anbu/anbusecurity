import { useState, useEffect } from "react";

interface TerminalTextProps {
  text: string;
  className?: string;
  speed?: number;
  showCursor?: boolean;
  onComplete?: () => void;
}

export const TerminalText = ({
  text,
  className = "",
  speed = 50,
  showCursor = true,
  onComplete,
}: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className={`inline-block w-3 h-6 bg-primary ml-1 ${isComplete ? "animate-blink" : ""}`} />
      )}
    </span>
  );
};
