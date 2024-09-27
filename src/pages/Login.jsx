import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import useUsernameStore from '../store';

function Login() {
    const adminUserInfo = {
        id: 'xdragonball6@gmail.com',
        pw: '1234'
    }
    const { username, updateUsername } = useUsernameStore();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (email === adminUserInfo.id && password === adminUserInfo.pw) {
            updateUsername('xdragonball6');
            alert('로그인 되었습니다!');
            console.log(username);
            navigate('/profile');
        } else {
            alert('Wrong ID or PW');
        }
    };
    return (
        <div className="login-page">
            <div className="logo-container">  
                <img 
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
                    alt="Netflix Logo" 
                    className="netflix-logo"
                />
            </div>
            <div className="login-container">
                <h1>로그인</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            id="email-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label 
                            className={`floating-label ${email ? 'filled' : ''}`} 
                            htmlFor="email-input"
                        >
                            이메일 주소 또는 휴대폰 번호
                        </label>
                    </div>
                    <div className="input-group">
                        <input
                            id="password-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label 
                            className={`floating-label ${password ? 'filled' : ''}`} 
                            htmlFor="password-input"
                        >
                            비밀번호
                        </label>
                    </div>
                    <button type="submit" className="login-btn">로그인</button>
                </form>
                <div className="signup-link">
                    Netflix 회원이 아닌가요? <a href="http://localhost:3000/">지금 가입하세요.</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
