import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import {BsEmojiHeartEyes } from 'react-icons/bs';
import img21 from "../../images/21.jpg"
// import "./collections.css";

const Collections = () => {
  return (
    <Container>
        <h3 className="text-center my-4">Our Latest Attendees</h3>
        <div className="mx-4 collections">
          <div className="container justify-content-center" >

        <Row className="my-3">
            <Col className="mt-3"><Image src={img21} style={{height: "auto", width: 250}} className="image_size" /></Col>
            <Col className="image_content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
            vitae consequuntur ratione amet aspernatur repellat facilis dolorum, 
            <br /><hr />
            <i><BsEmojiHeartEyes/> Visited on 22 Apr, 2022</i>
            </Col>

            <Col className="mt-3"><Image src={img21} style={{height: "auto", width: 250}}/> </Col> 
            <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
              vitae consequuntur ratione amet aspernatur repellat facilis dolorum, 
              <br /><hr />
              <i><BsEmojiHeartEyes/> Visited on 22 Apr, 2022</i>
            </Col>
      </Row>

      <Row className="my-3">
            <Col className="mt-3"><Image src={img21} style={{height: "auto", width: 250}} className="image_size"/></Col>
            <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
            vitae consequuntur ratione amet aspernatur repellat facilis dolorum, 
            <br /><hr />
            <i><BsEmojiHeartEyes/> Visited on 22 Apr, 2022</i>
            </Col>
          
            <Col className="mt-3"><Image src={img21} style={{height: "auto", width: 250}} className="image_size"/> </Col> 
            <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
              vitae consequuntur ratione amet aspernatur repellat facilis dolorum, 
              <br /><hr />
              <i><BsEmojiHeartEyes/> Visited on 22 Apr, 2022</i>
            </Col>
      </Row>

      <Row className="my-3">
            <Col className="mt-3"><Image src={img21} style={{height: "auto", width: 250}} className="image_size"/></Col>
            <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
            vitae consequuntur ratione amet aspernatur repellat facilis dolorum, 
            <br /><hr />
            <i><BsEmojiHeartEyes/> Visited on 22 Apr, 2022</i>
            </Col>
          
            <Col className="mt-3"><Image src={img21} style={{height: "auto", width: 250}} className="image_size"/> </Col> 
            <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
              vitae consequuntur ratione amet aspernatur repellat facilis dolorum, 
              <br /><hr />
              <i><BsEmojiHeartEyes/> Visited on 22 Apr, 2022</i>
            </Col>
      </Row>

      <Row className="my-3">
            <Col className="mt-3"><Image src={img21} style={{height: "auto", width: 250}} className="image_size"/></Col>
            <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
            vitae consequuntur ratione amet aspernatur repellat facilis dolorum, 
            <br /><hr />
            <i><BsEmojiHeartEyes/> Visited on 22 Apr, 2022</i>
            </Col>
          
            <Col className="mt-3"><Image src={img21} style={{height: "auto", width: 250}} className="image_size"/> </Col> 
            <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
              vitae consequuntur ratione amet aspernatur repellat facilis dolorum, 
              <br /><hr />
              <i><BsEmojiHeartEyes/> Visited on 22 Apr, 2022</i>
            </Col>
      </Row>
          </div>

      </div>
     
      
    </Container>
  ) 
}

export default Collections