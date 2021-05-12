import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
class ReduxForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
      email: '',
      firstName: '',
      lastName: '',
      notes: ''
    }
    this.inputHandler = this.inputHandler.bind(this);
  }
  inputHandler (e) {
    const {name, value} = e.target;
    console.log(name, value);
    this.setState({[name]: value});
  }
  render() {
    console.log(this.props)
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div className='row' data-test='reduxForm'>
        <div className='col'>
        <form onSubmit={() => handleSubmit(this.submitHandler)} test-component = 'formComponent' className='simple'>
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.inputHandler}
              />
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
                // onChange={(e) => this.inputHandler(e)}
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
                // onChange={(e) => this.inputHandler(e)}
              />
            </div>
          </div>
          <div>
            <label>Notes</label>
            <div>
              <Field name="notes" type="text" component="textarea"  
              // onClick={(e) => this.inputHandler(e)}
              />
            </div>
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}
ReduxForm.propType = {

}
export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(ReduxForm);