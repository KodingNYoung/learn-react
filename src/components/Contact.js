import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contactType: 'Tel.',
      message: '',
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };
  }
  onInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    alert('submitted');
  };
  onBlur = (field) => (e) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  validateForm = (firstname, lastname, telnum, email) => {
    const errors = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
    };

    if (this.state.touched.firstname && firstname.length < 3) {
      errors.firstname = 'Name should be >= 3 characters';
    } else if (this.state.touched.firstname && firstname.length > 10) {
      errors.firstname = 'Name should be <10 characters';
    }

    if (this.state.touched.lastname && lastname.length < 3) {
      errors.lastname = 'Name should be >= 3 character';
    } else if (this.state.touched.lastname && lastname.length > 10) {
      errors.lastname = 'Name should be <10 character';
    }

    const reg = /^\d+$/;

    if (this.state.touched.telnum && !reg.test(telnum)) {
      errors.telnum = 'Tel num should contain just numbers';
    }

    if (
      this.state.touched.email &&
      email.split('').filter((x) => x === '@').length !== 1
    ) {
      errors.email = 'Email should contain an @';
    }

    return errors;
  };

  render() {
    const error = this.validateForm(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );

    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/'>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>Contact us</h3>
            <hr />
          </div>
        </div>
        <div className='row row-content'>
          <div className='col-12'>
            <h3>Location Information</h3>
          </div>
          <div className='col-12 col-sm-4 offset-sm-1'>
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className='fa fa-phone'></i>: +852 1234 5678
              <br />
              <i className='fa fa-fax'></i>: +852 8765 4321
              <br />
              <i className='fa fa-envelope'></i>:{' '}
              <a href='mailto:confusion@food.net'>confusion@food.net</a>
            </address>
          </div>
          <div className='col-12 col-sm-6 offset-sm-1'>
            <h5>Map of our Location</h5>
          </div>
          <div className='col-12 col-sm-11 offset-sm-1'>
            <div className='btn-group' role='group'>
              <a
                role='button'
                className='btn btn-primary'
                href='tel:+85212345678'
              >
                <i className='fa fa-phone'></i> Call
              </a>
              <a role='button' className='btn btn-info' href='/contact'>
                <i className='fa fa-skype'></i> Skype
              </a>
              <a
                role='button'
                className='btn btn-success'
                href='mailto:confusion@food.net'
              >
                <i className='fa fa-envelope-o'></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className='row row-content'>
          <div className='col-12'>
            <h3>Send us your feedback</h3>
          </div>
          <div className='col-12 col-md-9'>
            <Form onSubmit={this.onFormSubmit} autoComplete='off'>
              <FormGroup row>
                <Label hmtlfor='firstname' md={2}>
                  First Name:
                </Label>
                <Col md={10}>
                  <Input
                    type='text'
                    id='firstname'
                    name='firstname'
                    placeholder='Firstname'
                    value={this.state.firstname}
                    onChange={this.onInputChange}
                    onBlur={this.onBlur('firstname')}
                    valid={
                      error.firstname === '' && this.state.touched.firstname
                    }
                    invalid={error.firstname !== ''}
                  />
                  <FormFeedback>{error.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label hmtlfor='lastname' md={2}>
                  Last Name:
                </Label>
                <Col md={10}>
                  <Input
                    type='text'
                    id='lastname'
                    name='lastname'
                    placeholder='Lastname'
                    valid={error.lastname === '' && this.state.touched.lastname}
                    invalid={error.lastname !== ''}
                    value={this.state.lastname}
                    onChange={this.onInputChange}
                    onBlur={this.onBlur('lastname')}
                  />
                  <FormFeedback>{error.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label hmtlfor='telnum' md={2}>
                  Contact tel:
                </Label>
                <Col md={10}>
                  <Input
                    type='tel'
                    id='telnum'
                    name='telnum'
                    placeholder='Contact tel'
                    valid={error.telnum === '' && this.state.touched.telnum}
                    invalid={error.telnum !== ''}
                    value={this.state.telnum}
                    onChange={this.onInputChange}
                    onBlur={this.onBlur('telnum')}
                  />
                  <FormFeedback>{error.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label hmtlfor='email' md={2}>
                  Email:
                </Label>
                <Col md={10}>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    valid={error.email === '' && this.state.touched.email}
                    invalid={error.email !== ''}
                    value={this.state.email}
                    onChange={this.onInputChange}
                    onBlur={this.onBlur('email')}
                  />
                  <FormFeedback>{error.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type='checkbox'
                        name='agree'
                        checked={this.state.agree}
                        onChange={this.onInputChange}
                      />
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 4, offset: 2 }}>
                  <Input
                    type='select'
                    name='contactType'
                    value={this.state.contactType}
                    onChange={this.onInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label hmtlfor='message' md={2}>
                  Your feedback:
                </Label>
                <Col md={10}>
                  <Input
                    type='textarea'
                    id='message'
                    name='message'
                    rows='12'
                    value={this.state.message}
                    onChange={this.onInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type='submit' color='primary'>
                    {' '}
                    Send feedback!
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
