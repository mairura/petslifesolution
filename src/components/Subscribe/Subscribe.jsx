import React from 'react'
// import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import blog3 from "../../images/blog-3.jpeg";
import emailjs from '@emailjs/browser';
// import { Image } from "react-bootstrap";
import "./subscribe.css";

const Subscribe = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mpx2c8k', 'template_1g0301r', e.target, 'AkbE3VaEkveGegDXz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
    <div className="subscribe-page mt-5">
      <h2 className='text-center mt-5' >Subscribe To My Newsletter</h2>
      <p className='text-center'><i>Subscribe and get my latest article in your inbox</i></p>
      <div className="d-flex align-items-center justify-content-center mb-4">
        <div>
          <InputGroup className="m-3 d-flex" onSubmit={sendEmail} >
            <Form.Control
              placeholder="example@gmail.com"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button type="submit" variant="dark" id="button-addon2" className="justify-content-center">
              Submit
            </Button>
          </InputGroup>
          <p className='text-center text-secondary'>We'll never share your email. Trust Us!</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <Card style={{width: '18rem', height: "18rem"}}>
          <Card.Img variant="top" src={blog3} />
        </Card>
      </div>  
    </div>
    </>
  )
}

export default Subscribe