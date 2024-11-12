import React from 'react';
import "./Board.css";
import { MoreHorizontal, Plus} from 'react-feather';

import Backlog from '../Images/Backlog.svg';
import Todo from '../Images/To-do.svg';
import Done from '../Images/Done.svg';
import Card from '../Card/Card';
import InProgress from '../Images/in-progress.svg';
import Cancelled from '../Images/Cancelled.svg';

const Board = ( props ) => {

    const logoReference = {
        "Backlog": <img src={Backlog} className='logo-pic' alt="Backlog" />,
        "Todo": <img src={Todo} className='logo-pic' alt="Todo" />,
        "In progress": <img src={InProgress} className='logo-pic' alt="In progress" />,
        "Done": <img src={Done} className='logo-pic' alt="Done" />,
        "Cancelled": <img src={Cancelled} className='logo-pic' alt="Cancelled" />
    };

  return (
    <div className='board'>
        <div className='board-top'>
            <div className='board-top-left'>
                {props.groupingOption === "status" && logoReference[props.title]}
                <p className='board-title bold'>{props.title}</p>
                <span className='board-count'>{props.count}</span>
            </div>
            <div className='board-top-right'>
                <MoreHorizontal className='icon'/>
                <Plus className='icon'/>
            </div>
        </div>
        <div className='card-container'>
            {props.tickets.map((ticket) => (
                <Card key={ticket.id} ticket={ticket} groupBy={props.groupingOption} users={props.users} />
            ))}
        </div>
    </div>
  );
};

export default Board