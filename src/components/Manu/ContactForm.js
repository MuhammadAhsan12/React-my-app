import React, { Component } from 'react'
import './ContactUs.css'

export default class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            submit: false,
            show: false,
            firstName: "",
            lastName: "",
            contry: "",
            subject: "",
        }
    }

    submit() {
        this.setState({
            submit: !this.state.submit,
        })
    }

    show() {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.submit ?
                        this.state.show ?
                            <div className="container con">
                                <h1 className="res">Your response.....</h1>
                                <h4 className="resp">First Name : {this.state.firstName}</h4>
                                <h4 className="resp">Last Name : {this.state.lastName}</h4>
                                <h4 className="resp">Contry : {this.state.contry}</h4>
                                <h4 className="resp">Subject : {this.state.subject}</h4>
                            </div>
                            :
                            <div className="container">
                                <h3 className="responce">{this.state.firstName} {this.state.lastName} Your risponce has been submited successfully<br />for see your responce</h3>
                                <h2 className="click" onClick={() => this.show()}>Click me</h2>
                            </div>

                        :

                        <div className="container">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(e) => this.setState({ firstName: e.target.value })} />

                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={(e) => this.setState({ lastName: e.target.value })} />

                            <label for="country">Country</label>
                            <select id="country" name="country" onChange={(e) => this.setState({ contry: e.target.value })}>
                                <option value="usa" onChange={(e) => this.setState({ contry: e.target.value })}>Australia</option>
                                <option value="usa" onChange={(e) => this.setState({ contry: e.target.value })}>India</option>
                                <option value="usa" onChange={(e) => this.setState({ contry: e.target.value })}>Japan</option>
                                <option value="australia" onChange={(e) => this.setState({ contry: e.target.value })}>Pakistan</option>
                                <option value="canada" onChange={(e) => this.setState({ contry: e.target.value })}>Canada</option>
                                <option value="usa" onChange={(e) => this.setState({ contry: e.target.value })}>USA</option>
                            </select>

                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." onChange={(e) => this.setState({ subject: e.target.value })} ></textarea>

                            <input type="submit" value="Submit" onClick={() => this.submit()} />
                        </div>
                }

                
            </div>
        )
    }
}
