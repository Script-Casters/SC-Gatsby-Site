import PropTypes from 'prop-types'
import React from 'react'
import Intro from "./articles/Intro";
import Projects from "./articles/Projects";
import Contact from "./articles/Contact";
import Members from './articles/Members';
import ServicesPage from './articles/ServicesPage';

class Main extends React.Component {
    render() {
        let close = (
            <div
                className="close"
                onClick={() => {
                    this.props.onCloseArticle()
                }}
            />
        );

        return (
            <div
                ref={this.props.setWrapperRef}
                id="main"
                style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}
            >
                <article
                    id="intro"
                    className={`${this.props.article === 'intro' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
                    <Intro/>
                    {close}
                </article>

                <article
                    id="work"
                    className={`${this.props.article === 'work' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
                    <Projects/>
                    {close}
                </article>

                <article
                    id="members"
                    className={`${this.props.article === 'members' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
                    <Members/>
                    {close}
                </article>

                <article
                    id="book"
                    className={`${this.props.article === 'book' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
                    <ServicesPage/>
                    {close}
                </article>

                <article
                    id="contact"
                    className={`${this.props.article === 'contact' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
                    <Contact />
                    {close}
                </article>
            </div>
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main
