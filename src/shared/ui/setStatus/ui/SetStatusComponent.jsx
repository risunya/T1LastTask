import { useState } from 'react';
import axios from 'axios';
import './setstatus.css'

export const SetStatusComponent = () => {
    const [formData, setFormData] = useState({
        token: 'dGVzdDlAbG9jYWxob3N0OmQ0MzdjZGVlMTIxODI3OGRkZjdjOGQzZmI2YWUxMGFk',
        status: 'increased'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
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

        axios.post('http://193.19.100.32:7000/api/set-status', formData)
            .then(response => {
                setLoading(false);
                setResponseFromServer(response.data); // Сохраняем ответ от сервера в состояние
                console.log('Ответ от сервера:', response.data);
                // Дополнительная логика по обработке успешного ответа
            })
            .catch(error => {
                setLoading(false);
                console.error('Ошибка при установке статуса:', error);
                setError('Ошибка при установке статуса. Пожалуйста, попробуйте еще раз.');
            });
    };

    return (
        <div className='set-status-wrapper'>
            <div className='set-status'>
                <h2>Установка статуса (setStatus)</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Токен:</label>
                        <input type="text" name="token" value={formData.token} onChange={handleChange} readOnly />
                    </div>
                    <div>
                        <label>Статус:</label>
                        <input type="text" name="status" value={formData.status} onChange={handleChange} />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Отправка...' : 'Установить статус'}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {responseFromServer && (
                        <div className='response-container'>
                            <h3>Ответ от сервера:</h3>
                            <pre>{JSON.stringify(responseFromServer, null, 2)}</pre>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

