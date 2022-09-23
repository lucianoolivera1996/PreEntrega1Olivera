import React from 'react';

const Dropdown = ({links}) => {
    return (
        <>
            <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' data-bs-toggle='dropdown' href='#' role='button'>More</a>
                <div className='dropdown-menu'>
                    <a className='dropdown-item' href='#'>{links[0]}</a>
                    <a className='dropdown-item' href='#'>{links[1]}</a>
                    <a className='dropdown-item' href='#'>{links[2]}</a>
                </div>
            </li>
        </>
    );
}

export default Dropdown;
