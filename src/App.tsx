import React, { useState } from 'react';
import './App.css';
import { BASE_URL, REGISTRATION_URL } from './utils/fake';
import { styles } from './styles';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    try {
      const data = { email, password };
      const response: any = await fetch(`${BASE_URL}${REGISTRATION_URL}`, {
        method: "POST",
        body: JSON.stringify(data),
       })

       const responseObject = await JSON.parse(response);
       
       if (responseObject.status === 200) {
        setIsRegistered(true);
       }
       
       return response
    } catch (error: any) {
      const errorObject = await JSON.parse(error);
      console.log('Error', errorObject.error);
      setError(errorObject.error)
    }
  };

  if (isRegistered) {
    return  <div style={styles.container}><p style={styles.success}>Регистрация успешна</p></div>
  }

  if (error) {
    return  <div style={styles.container}><p style={styles.error}>{error}</p></div>
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
        <div style={styles.row}>
          <a href="#">Забыли пароль</a>
        </div>
        <div style={styles.row}>
          <a href="#">Войти</a>
        </div>
    </div>
  );
}

export default App;