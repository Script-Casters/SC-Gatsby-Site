import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Frankie Rodriguez</h1>
                <p>Full stack developer </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a onClick={() => {props.onOpenArticle('resume')}}>Resume</a></li>
                <li><a onClick={() => {props.onOpenArticle('book')}}>Book Me</a></li>
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
