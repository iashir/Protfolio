import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Form, Button } from 'react-bootstrap';
import Title from '../Title/Title';
import emailjs from 'emailjs-com';
import { service_id, template_id, user_id } from '../../config';
class Contact extends Component {
  state = { name: '', email: '', message: '', subject: '', errorMessage: '', successMessage: '' };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, errorMessage: '' });
  };

  sendEmail = (e) => {
    e.preventDefault();
    const { name, email, message, subject } = this.state;
    if (!name || !email || !message || !subject)
      return this.setState({ errorMessage: 'Please enter all fields' });

    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      (result) => {
        this.setState({
          successMessage: 'Thank you!',
          errorMessage: '',
          name: '',
          email: '',
          message: '',
          subject: '',
        });
      },
      (error) => {
        this.setState({
          errorMessage: 'Error occured',
          successMessage: '',
          name: '',
          email: '',
          message: '',
          subject: '',
        });
      }
    );
  };

  render() {
    const { errorMessage, successMessage } = this.state;
    return (
      <section id="contact">
        <Container>
          <Title title="Contact" />
          <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="contact-wrapper">
              <Container>
                <Form className="contact-F" onSubmit={this.sendEmail}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" name="message" onChange={this.handleChange} />
                  </Form.Group>

                  {errorMessage && (
                    <div
                      style={{ backgroundColor: 'red', margin: '1rem 0rem', padding: '1rem 0rem' }}
                    >
                      {errorMessage}
                    </div>
                  )}
                  {successMessage && (
                    <div
                      style={{
                        backgroundColor: 'green',
                        margin: '1rem 0rem',
                        padding: '1rem 0rem',
                      }}
                    >
                      {successMessage}
                    </div>
                  )}
                  <Button variant="link" className="cta-btn cta-btn--resume" type="submit">
                    Submit
                  </Button>
                </Form>
              </Container>
            </div>
          </Fade>
        </Container>
      </section>
    );
  }
}

export default Contact;
