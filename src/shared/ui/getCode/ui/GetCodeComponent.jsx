import { useState } from 'react';
import axios from 'axios';
import './getcode.css';

export const GetCodeComponent = () => {
    const [email, setEmail] = useState('new@example.ru');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showCode, setShowCode] = useState(false); // Состояние для управления видимостью кода

    const handleGetCode = () => {
        setLoading(true);
        setError(null);

        axios.get(`http://193.19.100.32:7000/api/get-code?email=${email}`)
            .then(response => {
                setLoading(false);
                setCode(response.data);
                setShowCode(false); // Скрываем код после получения нового
                console.log('Полученный код:', response.data);
            })
            .catch(error => {
                setLoading(false);
                console.error('Ошибка при получении кода:', error);
                setError('Ошибка при получении кода. Пожалуйста, попробуйте еще раз.');
            });
    };

    const handleToggleCodeVisibility = () => {
        setShowCode(!showCode); // Переключаем состояние видимости кода
    };

    return (
        <div className="get-code-wrapper">
            <div className='get-code'>
                <h2>Получение кода (getCode)</h2>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button onClick={handleGetCode} disabled={loading}>
                    {loading ? 'Загрузка...' : 'Получить код'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {code && (
                    <div className='code-container'>
                        <h3>Код:</h3>
                        <p>{showCode ? code : '********'}</p> {/* Скрываем код, если showCode равно false */}
                        <button onClick={handleToggleCodeVisibility}>
                            {showCode ? 'Скрыть код' : 'Показать код'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};


