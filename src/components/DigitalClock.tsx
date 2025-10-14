import { useEffect, useState } from 'react';

const pad = (n: number) => n.toString().padStart(2, '0');

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  return (
    <div data-testid="digital-clock">
      {hours}:{minutes}:{seconds}
    </div>
  );
}
