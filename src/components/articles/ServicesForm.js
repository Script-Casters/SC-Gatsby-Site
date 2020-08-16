import React from "react";
import { validate } from "../services/InputVal";
import * as rax from 'retry-axios';
import axios from 'axios';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

class ServicesForm extends React.Component {
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
            attachments: {
                value: '',
                placeholder: 'Send us some files'
            },
            selectedService: ""
        }
    };

    constructor(props) {
        super(props);
        this.state = ServicesForm.initState;
        this.state['selectedService'] = props.service;

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
        console.log(formData);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "booking", ...formData })
        })
            .then(() => alert("Request Submitted!"))
            .catch(error => alert(error));
        this.resetStateValues();
    };

    resetStateValues() {
        this.setState(ServicesForm.initState);
    }

    render() {
        return (<div>
            <h2 className="major">Booking Form</h2>
            <h3>Selected Service: {this.props.service}</h3>
            <form name="booking" method="post" data-netlify="true" onSubmit={this.formSubmitHandler}>
                <input type="hidden" name="form-name" value="booking" />
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
                    <label htmlFor="message">Tell us more about your request</label>
                    <textarea name="message" id="message" rows="4"
                        value={this.state.formControls.message.value}
                        valid={this.state.formControls.email.valid}
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

export default ServicesForm;
