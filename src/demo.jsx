
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PrettyInputText, PrettyInputTextArea } from '.';
import demoStyle from './css/demo.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            emailValue: '',
            phoneValue: '044332211',
            nameValue: '',
            descriptionValue: ''
        }
    }

    render() {
        const {
            emailValue,
            phoneValue,
            nameValue,
            descriptionValue
        } = this.state;
        const pt = React.createElement(PrettyInputText, {
            name: 'email',
            labelText: 'Email Address',
            errorValue: 'Invalid Email Address',
            isRequired: true,
            inputValue: emailValue,
            onChange: e => this.setState({ emailValue: e.target.value.toString() })
        });
        return (
            <div className={demoStyle.container} style={{width: '100%'}}>
                {pt}
                <PrettyInputText
                    name="phone"
                    labelText="Phone"
                    inputValue={phoneValue}
                    errorValue="Invalid Phone"
                    labelColor="#fff"
                    backgroundColor='#000'
                    onChange={e => this.setState({ phoneValue: e.target.value.toString() })}
                    onValidation={inputValue => (inputValue.length < 9) ? false : true}
                    type="number"
                    size={9}
                />
                <PrettyInputText
                    name="name"
                    labelText="Name"
                    inputValue={nameValue}
                    onChange={e => this.setState({ nameValue: e.target.value.toString() })}
                />
                <PrettyInputTextArea
                    name="description"
                    labelText="Description"
                    inputValue={descriptionValue}
                    onChange={e => this.setState({ descriptionValue: e.target.value.toString() })}
                    isRequired
                />
            </div>
        );
    }
}

export default App;

if (!process.env || !process.env.RUNENV || process.env.RUNENV !== 'TDD') {
    ReactDOM.render(<App />, document.getElementById('app'));
}
