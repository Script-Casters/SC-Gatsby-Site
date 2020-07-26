import React from "react";
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/entry.webpack';
import { useState, useEffect } from 'react';
import { window } from 'browser-monads';


export const pageNum = 1;

const memberData = require('../../data/members');


class Members extends React.Component {
    // scale = useWindowDimensions();

    constructor() {
        super();

        this.state = {
            posts: {
                name: '',
                bio: '',
                gitHubLink: '',
                img: '',
                siteLink: '',
            }
        }
    }

    componentWillMount() {
        this.setState({
            posts: memberData
        });
    }


    render() {
        return (<div>
            <h2 className="major">Members</h2>
            <div className="project-card-container">
                {Object
                    .keys(this.state.posts)
                    .map(key => <div className="box">
                        <h1>{this.state.posts[key].name}</h1>
                        <img className="image fit" src={require('../../images/members/' + this.state.posts[key].img)}
                            alt="img" />
                        <p>{this.state.posts[key].desc}</p>
                        <div className="button-container">
                        {
                                this.state.posts[key].gitHubLink ?
                                    <a className="button" href={this.state.posts[key].gitHubLink} target="_blank" rel="noopener noreferrer" >Git Hub
                                Profile</a> : null
                            }
                            {
                                this.state.posts[key].siteLink ?
                                    <a className="button" href={this.state.posts[key].siteLink} target="_blank" rel="noopener noreferrer" >Website
                                        Link</a> : null
                            }
                        </div>
                    </div>)}
            </div>
        </div>)
    }

};


// const getWindowDimensions = () => {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//         width,
//         height
//     };
// };

// const useWindowDimensions = () => {
//     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
//     let scale;

//     useEffect(() => {
//         function handleResize() {
//             setWindowDimensions(getWindowDimensions());
//         }

//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     if (windowDimensions.width < 500) {
//         scale = 0.5;
//     } else {
//         scale = 0.9
//     }

//     return scale;
// };

export default Members;
