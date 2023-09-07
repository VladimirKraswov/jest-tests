// Минимальные JEST тесты
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from '../App';

describe('App component', () => {
  // Выполнить перед началом всех тестов
  beforeAll(() => {
  })

  // Выполнить перед началом тестирования любого it/test блока
  beforeEach(() => {
  })

  // Выполнить после тестирования любого it/test блока
  afterEach(() => {
  })

  // Выполнить после окончания всех тестов
  afterAll(() => {
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

  it('Линки "Забыли пароль" и "Войти" отображаются', () => {
    render(<App />);
    const forgotPasswordLink = screen.getByText('Забыли пароль');
    const loginLink = screen.getByText('Войти');
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  it('Успешный запрос', async () => {
    // Мокируем fetch для имитации ответа от сервера
    global.fetch = () => (new Promise((resolve) => {
      resolve({ status: 200 } as Response)
    }))

    render(<App />); // рендерим компонент
    const button = screen.getByText('Зарегистрироваться') // Находим кнопку по тексту

    expect(button).toBeInTheDocument(); // Проверяем, что компонент отображает кнопку

    userEvent.click(button); // имитируем нажатие кнопки для отправки запроса

    // Дожидаемся, пока отработает fetch запрос и данные компонента изменятся
    await waitFor(async () => {
      screen.getByText('Регистрация успешна'); // Убеждаемся что мы находим такой текст
    });
  });

  it('Не успешный запрос', async () => {
    // Мокируем fetch для имитации ошибки ответа от сервера
    global.fetch = () => { throw new Error("Something went wrong") }

    render(<App />); // рендерим компонент
    const button = screen.getByText('Зарегистрироваться') // Находим кнопку по тексту

    expect(button).toBeInTheDocument(); // Проверяем, что компонент отображает кнопку

    userEvent.click(button); // имитируем нажатие кнопки для отправки запроса

    // Дожидаемся, пока отработает fetch запрос и данные компонента изменятся
    await waitFor(async () => {
      screen.getByText('Ошибка при регистрации'); // Убеждаемся что мы находим такой текст
    });
  });
})