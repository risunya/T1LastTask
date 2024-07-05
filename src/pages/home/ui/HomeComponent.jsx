import './home.css';
import data from '../../../features/api/api-data';
import { Link } from 'react-router-dom';

export const HomeComponent = () => {
    return (
        <div className="main">
            <div className="main-wrapper">
                <div className="greetings">Привет, это API Helper 👋</div>
                <div className="greetings-article">Обычный формат FastAPI, хотя и эффективен во многом благодаря своей документации и стандартизированной природе, но мне показался <span>скучным</span>. В нем часто отсутствует индивидуальный стиль и творческий подход. Вместо того чтобы создавать обычный интерфейс, я решил реализовать <span>свежий</span>, простой и функциональный дизайн. А еще я просто немного ленивый, как и любой программист. 😁</div>
                <div className='method-list'>
                    {data.map(({ key, value }) => (
                        <Link to={`/${key}`} className='method-item' key={key}>
                            <div className='method-item__name'>{key}</div> 
                            <div className="method-item__meaning">{value}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );    
};