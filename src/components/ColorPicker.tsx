import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'color-picker-value';

export default function ColorPicker() {
  const [color, setColor] = useState<string>(() => {
    return localStorage.getItem(LOCAL_STORAGE_KEY) || '#ffffff';
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, color);
  }, [color]);

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
        data-testid="color-input"
      />
      <div
        data-testid="color-box"
        style={{ width: 100, height: 100, background: color, border: '1px solid #ccc', marginTop: 8 }}
      />
    </div>
  );
}
