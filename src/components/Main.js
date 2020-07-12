import PropTypes from 'prop-types'
import React from 'react'
import Intro from "./articles/Intro";
import Projects from "./articles/Projects";
import Resume from "./articles/Resume";
import Contact from "./articles/Contact";

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
                    id="resume"
                    className={`${this.props.article === 'resume' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
                    <Resume/>
                    {close}
                </article>

                <article
                    id="book"
                    className={`${this.props.article === 'book' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
                    <h2 className="major">Coming Soon...</h2>
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
