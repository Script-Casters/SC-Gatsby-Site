import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-superpowers"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Scriptcasters</h1>
                <p>Tech Solutions Collective</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a onClick={() => {props.onOpenArticle('intro')}}>Vision</a></li>
                <li><a onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a onClick={() => {props.onOpenArticle('members')}}>Members</a></li>
                <li><a onClick={() => {props.onOpenArticle('book')}}>Services</a></li>
                <li><a onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
};

export default Header
