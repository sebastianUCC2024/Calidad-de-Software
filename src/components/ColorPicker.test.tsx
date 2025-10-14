import { render, screen, fireEvent } from '@testing-library/react';
import ColorPicker from './ColorPicker';

const LOCAL_STORAGE_KEY = 'color-picker-value';

describe('ColorPicker', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('el color inicial es blanco', () => {
    render(<ColorPicker />);
    const colorInput = screen.getByTestId('color-input') as HTMLInputElement;
    expect(colorInput.value).toBe('#ffffff');
    const colorBox = screen.getByTestId('color-box');
    expect(colorBox).toHaveStyle({ background: '#ffffff' });
  });

  it('al seleccionar un nuevo color, el div se actualiza', () => {
    render(<ColorPicker />);
    const colorInput = screen.getByTestId('color-input') as HTMLInputElement;
    fireEvent.change(colorInput, { target: { value: '#ff0000' } });
    expect(colorInput.value).toBe('#ff0000');
    const colorBox = screen.getByTestId('color-box');
    expect(colorBox).toHaveStyle({ background: '#ff0000' });
  });

  it('persiste el color en localStorage', async () => {
    render(<ColorPicker />);
    const colorInput = screen.getByTestId('color-input') as HTMLInputElement;
    fireEvent.change(colorInput, { target: { value: '#00ff00' } });
    // Esperar el ciclo de efectos de React
    await new Promise(r => setTimeout(r, 0));
    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toBe('#00ff00');
  });
});
