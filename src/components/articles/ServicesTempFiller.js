import React, { useState } from "react";
import { validate } from "../services/InputVal";
import * as rax from 'retry-axios';
import axios from 'axios';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};


class ServicesTempFiller extends React.Component {


    static initState = {
        formControls: {
            name: {
                value: '',
                placeholder: 'Name',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 3,
                    isRequired: true
                }
            },
            email: {
                value: '',
                placeholder: 'Email',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 3,
                    isEmail: true,
                    isRequired: true
                }
            },
            message: {
                value: '',
                placeholder: 'Write a message to us',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 7,
                    isRequired: true
                }
            },
            clientmemberchoice: {
                value: 'client',
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            }
        }
    };

    constructor(props) {
        super(props);
        this.state = ServicesTempFiller.initState;
    }

    changeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;


        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });

    };

    formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {};


        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "prinquery", ...formData })
        })
            .then(() => alert("Request Submitted!"))
            .catch(error => alert(error));
        this.resetStateValues();
    };

    resetStateValues() {
        this.setState(ServicesTempFiller.initState);
    }

    componentDidMount() {
        // this.setState({ selectedService: props.service });
    }

    render() {
        return (<div>
            <h1 className="center">New Project Bookings Unavailable</h1>
            <p>We are currently not taking new clients, as we are in the middle of an intensive development period. 
                We are constructing our first product, Project Raven. 
                This is a tool aimed to make working on a tech project on both the member side and client side more efficient. 
                We apologize for this inconvience and encourage you to stay in touch for more updates!</p>
            
            <br />
            <br />
            <br />
            <br />

            <h3 className="major center">What is Script Casters up to?</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DkpkNw6-okY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <h3>Want to stay connected and up to date?</h3>
            <form name="prinquery" method="post" data-netlify="true" onSubmit={this.formSubmitHandler}>
                <input type="hidden" name="form-name" value="prinquery" />
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                        value={this.state.formControls.name.value}
                        valid={this.state.formControls.name.valid}
                        onChange={this.changeHandler.bind(this)}
                        maxLength="120" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"
                        value={this.state.formControls.email.value}
                        valid={this.state.formControls.email.valid}
                        onChange={this.changeHandler.bind(this)}
                        maxLength="120" />
                </div>
                <div className="field">

                    <input type="radio" name="clientmemberchoice" id="member"
                        value="member"
                        onChange={this.changeHandler.bind(this)} />
                    <label htmlFor="member">Prospective Member</label>

                    <input type="radio" name="clientmemberchoice" id="client"
                        value="client"
                        onChange={this.changeHandler.bind(this)} />
                    <label htmlFor="client">Client</label>
                </div>
                <div className="field">
                    <label htmlFor="message">Anything to note?</label>
                    <textarea name="message" id="message" rows="4"
                        value={this.state.formControls.message.value}
                        valid={this.state.formControls.message.valid}
                        onChange={this.changeHandler.bind(this)}
                        maxLength="3000" />
                </div>
                <ul className="actions">
                    <li>
                        <input type="submit" value="Send Message" className="special"
                            disabled={!(this.state.formControls.email.valid && this.state.formControls.name.valid && this.state.formControls.message.valid)} />
                    </li>
                    <li>
                        <input type="reset" value="Reset" />
                    </li>
                </ul>
            </form>
        </div>);
    }


}

export default ServicesTempFiller;
