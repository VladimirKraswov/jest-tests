// Минимальные JEST тесты
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  beforeEach(() => {
    // Выполнить перед началом тестирования любого it/test блока
    console.log('Start "it" test');
  })

  afterEach(() => {
    // Выполнить после тестирования любого it/test блока
    console.log('End "it" test');
  })

  it('Поля ввода электронной почты и пароля отображаются', () => {
    render(<App />);
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Пароль:');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('Поле email корректно обрабатывает ввод', () => {
    render(<App />);
    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('Поле password корректно обрабатывает ввод', () => {
    render(<App />);
    const passwordInput = screen.getByLabelText('Пароль:');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput).toHaveValue('password123');
  });

  it('Нажатие кнопки регистрации отрабатывает', async () => {
    render(<App />);
    const registerButton = screen.getByText('Зарегистрироваться');
    fireEvent.click(registerButton);
  });

  it('Линки "Забыли пароль" и "Войти" отображаются', () => {
    render(<App />);
    const forgotPasswordLink = screen.getByText('Забыли пароль');
    const loginLink = screen.getByText('Войти');
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });
})