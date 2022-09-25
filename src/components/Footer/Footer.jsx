import Reac, { useRef } from 'react';
import "./footer.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BiLocationPlus} from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';
// import {Loader, LoaderOptions} from 'google-maps';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mpx2c8k', 'template_82icydl', form.current, 'AkbE3VaEkveGegDXz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="footer mt-5">
      <h3 className="text-center my-5">Follow Us</h3>
      <p className="m-5" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus, dolor non at, ducimus itaque accusantium eaque amet, possimus commodi repudiandae asperiores obcaecati. Delectus quae eveniet nemo eius numquam earum.
      Alias, nemo ad esse soluta iusto saepe tempore iste odio beatae eius vitae sint incidunt similique, a quas commodi rem cupiditate quod! Eum doloribus excepturi autem dolore voluptatibus vel molestias.
      </p>
      <ul className="d-flex justify-content-center m-5 fs-3" id="social-circle">
        <li className="pe-5"><a href="https://www.facebook.com/PetsLifeSolutionMe"><BsFacebook /></a> </li>
        <li className="pe-5"><a href="https://www.instagram.com/petslifesolution/"><BsInstagram /></a> </li>
        <li className="pe-5"><a href="https://twitter.com/petslifesln"><BsTwitter /></a></li>
        <li className="pe-5"><a href="https://www.tiktok.com/search?lang=en&q=petslifesolution&t=1663384931914"><FaTiktok /></a> </li>
      </ul>
      <div id="locateUs" className="my-5 p-3">
        <div className="contacts d-flex justify-content-around my-5">
          <div><BiLocationPlus className="fs-3 mb-2" />
          <h3>Address</h3>
            <p>Free Deliveries within Nairobi</p>
          </div>
        
          <div><BsFillTelephoneFill className="fs-3 mb-2"/>
          <h3>Call Us On</h3>
            <p><i>+254 754 159 938</i></p>
          </div>  
        
          <div><MdOutlineMail className="fs-3 mb-2"/>
          <h3>Email</h3>
            <p><i>petslifesolution@gmail.com</i></p> 
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Your Email" name="email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Subject" name="subject" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Message..." name="message" />
            </Form.Group>
            <Button as="input" type="submit" value="Submit Message" className="mb-5" />{' '}
          </Form>
        </div>    
      </div>
      <div>
        <Nav className="justify-content-center bg-dark">
          <Nav.Item>
            <Nav.Link href="/home" ><i className="copyright" > Copyright &copy; Petslife Solution {(new Date().getFullYear())}. All Rights Reserved</i></Nav.Link>
          </Nav.Item> 
        </Nav>      </div>
    </div>
  )
}

export default Footer