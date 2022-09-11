import React from 'react';
import TicTacToe from './TicTacToe';


function Sidebar (){
    return (
        <div className='sidebar'>
            <ul className='nav flex-column bg-secondary'>
                <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle text-light' data-toggle="dropdown" href="#" role="button" id="navbarDarkDropdownMenuLink" aria-haspopup="true" aria-expanded="false">
                        Nonogram</a>
                    <div className='dropdown-menu dropdown-menu-dark' aria-labelledby="navbarDarkDropdownMenuLink">
                        <a className='dropdown-item text-light'>5x5</a>
                        <a className='dropdown-item text-light'>10x10</a>
                        <a className='dropdown-item text-light'>15x15</a>
                    </div>
                </li>
                <li className='nav-item'>
                    <a className='nav-link text-light'>Sudoku</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link text-light'>Minesweeper</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link text-light' onClick={openTicTacToe}>Tic-Tac-Toe</a>
                </li>
            </ul>
        </div>
    )
}

function openTicTacToe(){
    return (
        <TicTacToe />
    )
}

export default Sidebar;
