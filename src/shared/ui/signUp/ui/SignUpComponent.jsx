import { useState } from 'react';
import axios from 'axios';
import './signup.css'

export const SignUpComponent = () => {
    const [formData, setFormData] = useState({
        last_name: '',
        first_name: '',
        email: '',
        role: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [responseFromServer, setResponseFromServer] = useState(null); // Состояние для хранения ответа от сервера

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResponseFromServer(null); // Сброс предыдущего ответа от сервера

        axios.post('http://193.19.100.32:7000/api/sign-up', formData)
            .then(response => {
                setLoading(false);
                setSuccessMessage('Регистрация успешно завершена!');
                console.log('Ответ от сервера:', response.data);
                setResponseFromServer(response.data); // Сохранение ответа от сервера в состояние
                // Дополнительная логика по обработке успешного ответа
            })
            .catch(error => {
                setLoading(false);
                console.error('Ошибка при регистрации:', error);
                setError('Ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
            });
    };

    return (
        <div className="sign-up-wrapper">
            <div className='sign-up'> 
                <h2>Регистрация (signUp)</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Фамилия:</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Имя:</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Роль:</label>
                        <input type="text" name="role" value={formData.role} onChange={handleChange} required />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Отправка...' : 'Зарегистрироваться'}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                </form>
                {responseFromServer && (
                    <div className='response-container'>
                        <h3>Ответ от сервера:</h3>
                        <pre>{JSON.stringify(responseFromServer, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

