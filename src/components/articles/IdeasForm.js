
import React from "react";
import {validate} from "../services/InputVal";
import * as rax from 'retry-axios';
import axios from 'axios';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

class IdeasForm extends React.Component {
    static initState = {
        formControls: {
            idea: {
                value: '',
                placeholder: 'App Idea',
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
                    isRequired: false
                }
            }
        }
    };

    constructor() {
        super();
        this.state = IdeasForm.initState;

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
            body: encode({ "form-name": "Ideas", ...formData })
        })
            .then(() => alert("Idea Submitted!"))
            .catch(error => alert(error));
        this.resetStateValues();
    };

    async sendFormData(formData) {
        const url = "https://elemental-email-api.herokuapp.com/notification/contactform";

        formData.appName = 'Frankie-Portfolio';
        rax.attach();
        return await axios.post(
            url,
            formData,
            {headers: {'Content-Type': 'application/json'}}
        );
    }

    resetStateValues() {
        this.setState(IdeasForm.initState);
    }

    render() {
        return (<div>
            <h2 className="major">Have an app idea?</h2>
            <form name="ideas" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.formSubmitHandler}>
                <input type="hidden" name="form-name" value="ideas"/>
                <div className="field half first">
                    <label htmlFor="name">Idea</label>
                    <input type="text" name="idea" id="idea"
                           value={this.state.formControls.idea.value}
                           valid={this.state.formControls.idea.valid}
                           onChange={this.changeHandler.bind(this)}
                           maxLength="120"/>
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"
                           value={this.state.formControls.email.value}
                           valid={this.state.formControls.email.valid}
                           onChange={this.changeHandler.bind(this)}
                           maxLength="120"/>
                </div>
                <ul className="actions">
                    <li>
                        <input type="submit" value="Submit Idea" className="special"
                               disabled={!this.state.formControls.idea.valid}/>
                    </li>
                </ul>
            </form>
        </div>);
    }


}

export default IdeasForm;
