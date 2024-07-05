import './roles.css'
import { useState } from 'react';
import axios from 'axios';

export const RolesComponent = () => {
    const [loading, setLoading] = useState(false);
    const [roles, setRoles] = useState([]);
    const [error, setError] = useState(null);

    const handleGetRoles = () => {
        setLoading(true); // Устанавливаем состояние загрузки в true перед отправкой запроса
        setError(null); // Сбрасываем предыдущие ошибки

        axios.get('http://193.19.100.32:7000/api/get-roles')
            .then(response => {
                const rolesData = response.data.roles; // Обращаемся к свойству 'roles' в полученных данных
                console.log('Полученные роли:', rolesData);
                setRoles(rolesData); // Сохраняем полученные роли в состояние
            })
            .catch(error => {
                console.error('Ошибка при получении ролей:', error);
                setError('Ошибка при загрузке ролей'); // Устанавливаем сообщение об ошибке
            })
            .finally(() => {
                setLoading(false); // В любом случае, когда запрос завершён, устанавливаем состояние загрузки в false
            });
    };

    return (
        <div className='roles-method-wrapper'>
            <div className="roles-method">
                <div className='roles-method-name'>Получить перечень ролей - направлений подготовки лагеря (roles)</div>
                <div className="roles-method-helpers">
                    Напоминаю, что тебе нужно запомнить свое направление 
                </div>
                <button className="roles-button" onClick={handleGetRoles} disabled={loading}>
                    {loading ? 'Загружаем...' : 'Получить роли'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {roles.length > 0 && (
                    <div className='list-wrapper'>
                        <h3 className='list-name'>🤖 Вот что мы получили:</h3>
                        <ul className='list'>
                            {roles.map((role, index) => (
                                <li className='list-element' key={index}>{role}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};