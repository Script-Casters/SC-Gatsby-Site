import React from "react";
import ServicesForm from './ServicesForm';
import IdeasForm from './IdeasForm';


const servicesData = require('../../data/services');

class ServicesPage extends React.Component {
    constructor() {
        super();

        this.state = {
            services: {
                name: '',
                desc: '',
                img: '',
                estPrice: ''
            }
        }
    }

    componentWillMount() {
        this.setState({
            posts: servicesData,
            selectedService: ''
        });
    }


    render() {
        return (<div>
            {
                this.state.selectedService.length > 0 ? 
                <div>
                <ServicesForm service={this.state.selectedService}/>
                <a className="button" onClick= {() => {this.setState({selectedService : false})}}>Cancel</a>
                </div>
                 :
                    <div>
                        <IdeasForm />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h2 className="major">Services Offered</h2>
                        <div className="project-card-container">
                            {Object
                                .keys(this.state.posts)
                                .map(key => <div className="box">
                                    <h1>{this.state.posts[key].name}</h1>
                                    <img className="image fit right" src={require('../../images/servicesoffered/' + this.state.posts[key].img)}
                                        alt="img" />
                                    <p style={{ textAlign: 'justify'}}>{this.state.posts[key].desc}</p>
                                    <h3>Est Cost: ${this.state.posts[key].estPrice}</h3>
                                    <div className="button-container">
                                    <a className="button" onClick= {() => {this.setState({selectedService : this.state.posts[key].name})}}>Select Service</a>
                                    </div>
                                </div>)}
                        </div>
                    </div>
            }
        </div>);
    }
}

export default ServicesPage;
