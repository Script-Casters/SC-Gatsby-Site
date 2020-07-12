import React from "react";

const projectData = require('../../data/projects');

class Projects extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: {
                name: '',
                desc: '',
                gitHubLink: '',
                img: '',
                siteLink: '',
            }
        }
    }

    componentWillMount() {
        this.setState({
            posts: projectData
        });
    }


    render() {
        return (<div>
            <h2 className="major">Projects</h2>
            <div className="project-card-container">
                {Object
                    .keys(this.state.posts)
                    .map(key => <div className="box">
                        <h1>{this.state.posts[key].name}</h1>
                        <img className="image fit" src={require('../../images/' + this.state.posts[key].img)}
                             alt="img"/>
                        <p>{this.state.posts[key].desc}</p>
                        <div className="button-container">
                            <a className="button" href={this.state.posts[key].gitHubLink} target="_blank" rel="noopener noreferrer" >Git Hub
                                Project</a>
                            {
                                this.state.posts[key].siteLink ?
                                    <a className="button" href={this.state.posts[key].siteLink} target="_blank" rel="noopener noreferrer" >Website
                                        Link</a> : null
                            }
                        </div>
                    </div>)}
            </div>
        </div>);
    }
}

export default Projects;
