import React from 'react';
import "./Card.css";

import Backlog from '../Images/Backlog.svg';
import Todo from '../Images/To-do.svg';
import Done from '../Images/Done.svg';
import InProgress from '../Images/in-progress.svg';
import Cancelled from '../Images/Cancelled.svg';

import Urgent from '../Images/SVG - Urgent Priority colour.svg';
import Nope from '../Images/No-priority.svg';
import Low from '../Images/Img - Low Priority.svg';
import Medium from '../Images/Img - Medium Priority.svg';
import High from '../Images/Img - High Priority.svg';

const Card = ( props ) => {
    
    const logoReference = {
        "Backlog": <img src={Backlog} className='logo-pic' alt="Backlog" />,
        "Todo": <img src={Todo} className='logo-pic' alt="Todo" />,
        "In progress": <img src={InProgress} className='logo-pic' alt="In progress" />,
        "Done": <img src={Done} className='logo-pic' alt="Done" />,
        "Cancelled": <img src={Cancelled} className='logo-pic' alt="Cancelled" />
    };

    const priorityIcon = {
        0: <img src={Nope} className='priority-icon' alt="No Priority" />,
        1: <img src={Urgent} className='priority-icon' alt="Urgent" />,
        2: <img src={Low} className='priority-icon' alt="Low" />,
        3: <img src={Medium} className='priority-icon' alt="Medium" />,
        4: <img src={High} className='priority-icon' alt="High" />,
    };

    const { ticket, users } = props;

    const getUserById = (userId) => {
        return users.find((user) => user.id === userId);
    };

    const getInitials = (name) => {
        const nameParts = name.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts[1] : '';
        const initials = `${firstName.charAt(0)}${lastName ? lastName.charAt(0) : ''}`;
        return initials.toUpperCase();
    };

    const getRandomColor = () => {
        const letters='0123456789ABCDEF';
        let color='#';
        for (let i=0;i<6;i++) {
            color+=letters[Math.floor(Math.random()*7)];
        }
        return color;
    };

    const user = getUserById(ticket.userId);
    const initials = user ? getInitials(user.name) : '';

    return (
        <div className='card'>
            <div className='card-top'>
                <p className='card-title'>{ticket.id}</p>
                {props.groupBy !== 'user' && (
                    <div
                        className="user-pic"
                        style={{
                            backgroundColor: getRandomColor()
                        }}
                    >
                        {initials}
                    </div>
                )}
            </div>
            <div className='card-middle'>
                {props.groupBy !== 'status' && logoReference[ticket.status]}
                <p className='card-desc bold'>
                    {ticket.title}
                </p>
            </div>
            <div className='card-bottom'>
                {props.groupBy !== 'priority' && (
                    <div className='priority-box'>
                        {priorityIcon[ticket.priority]}
                    </div>
                )}
                <div className='feature-box'>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/5720/5720434.png"
                        className='feature-icon'
                        alt='Feature Request'
                    />
                    <p>{ticket.tag[0]}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
