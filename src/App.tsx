import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from './components';
import { ErrorView } from './components/ErrorView';
import { ENDPOINT } from './constants';

import './App.css';
import { styles } from './styles';

import {selectors, actions, IState} from './store';

function App() {
  const despatch = useDispatch();
  const error = useSelector<IState, string>(selectors.getError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

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
      despatch(actions.setError('Ошибка при регистрации'))
    }
  };

  if (isRegistered) {
    return  <div style={styles.container}><p style={styles.success}>Регистрация успешна</p></div>
  }

  if (error) {
    return  <div style={styles.container}><ErrorView style={styles.error}/></div>
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