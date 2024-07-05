import { useState } from 'react';
import './ownmethod.css';

export const OwnMethodComponent = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [encodedResult, setEncodedResult] = useState('');
    const [showCode, setShowCode] = useState(false); // Состояние для управления видимостью кода
    const [showResult, setShowResult] = useState(false); // Состояние для управления видимостью результата
    const [error, setError] = useState(null); // Состояние для ошибки

    // Функция для проверки латиницы
    const isLatin = (text) => /^[a-zA-Z0-9@.]+$/.test(text);

    // Функция для кодирования email и code
    const encodeEmailAndCode = (email, code) => {
        const str = `${email}:${code}`;
        const encodedStr = btoa(str);
        return encodedStr;
    };

    const handleEncode = () => {
        // Проверка латиницы
        if (!isLatin(email) || !isLatin(code)) {
            setError('Пожалуйста, используйте только латиницу и цифры.');
            return;
        }

        const encodedStr = encodeEmailAndCode(email, code);
        setEncodedResult(encodedStr);
        setError(null); // Сброс ошибки
    };

    return (
        <div className='own-method'>
            <h2>Кодирование Email и Code (ownMethod)</h2>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='custom-checkbox'>
                <label>Code:</label>
                <input type={showCode ? 'text' : 'password'} value={code} onChange={(e) => setCode(e.target.value)} />
                <input 
                    type="checkbox"
                    checked={showCode}
                    onChange={() => setShowCode(!showCode)}
                /> Показывать код
            </div>
            <button onClick={handleEncode}>Закодировать</button>
            {error && <p className='error-message'>{error}</p>}
            {encodedResult && (
                <div className='encoded-result'>
                    <h3>Результат:</h3>
                    <p>{showResult ? encodedResult : '********'}</p>
                    <button onClick={() => setShowResult(!showResult)}>
                        {showResult ? 'Скрыть' : 'Показать'}
                    </button>
                </div>
            )}
        </div>
    );
};
