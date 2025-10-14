import React, { useState, useRef } from 'react';

export default function CountdownTimer() {
  const [input, setInput] = useState('');
  const [seconds, setSeconds] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCountdown = () => {
    if (!input || isNaN(Number(input))) return;
    setSeconds(Number(input));
    setRunning(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev && prev > 0) return prev - 1;
        if (intervalRef.current) clearInterval(intervalRef.current);
        setRunning(false);
        return 0;
      });
    }, 1000);
  };

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={e => setInput(e.target.value)}
        disabled={running}
        data-testid="countdown-input"
      />
      <button onClick={startCountdown} disabled={running || !input} data-testid="start-btn">
        Iniciar
      </button>
      <div data-testid="countdown-value">
        {seconds !== null ? seconds : ''}
      </div>
    </div>
  );
}
