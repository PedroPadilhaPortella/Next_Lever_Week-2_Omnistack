import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../serveless/api';

export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('connection', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/hora
    <strong>{teacher.cost}</strong>
                </p>
                <a href={`https://wa.me/${teacher.whatsapp}`} target="_blank"
                    onClick={createNewConnection} >
                    <img src={whatsappIcon} alt="Wattsapp" />
                Entrar em Contato
            </a>
            </footer>
        </article>
    )
}

export default TeacherItem;