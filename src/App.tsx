import React, { useState } from 'react';
import './App.css';
import { styles } from './styles';
import { Link } from './components';
import { ENDPOINT } from './constants';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    try {
      const data = { email, password };
      
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
      });
       
       if (response?.status === 200) {
        setIsRegistered(true);
       }
       
    } catch (error) {
      setError('error')
    }
  };

  if (isRegistered) {
    return  <div style={styles.container}><p style={styles.success}>Регистрация успешна</p></div>
  }

  if (error) {
    return  <div style={styles.container}><p style={styles.error}>Ошибка при регистрации</p></div>
  }

  return (
    <div style={styles.container} >
      <h1>Регистрация</h1>
        <div style={styles.row}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={styles.row}>
          <label style={styles.label} htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Зарегистрироваться</button>
        <div style={styles.footer}>
        <Link page="forgot">Забыли пароль</Link>&nbsp;<Link page="login">Войти</Link>
        </div>
    </div>
  );
}

export default App;