import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Image } from "react-bootstrap";
import img7 from "../../images/testimonial1.jpg";
import img8 from "../../images/cat_scratching_post.jpg"
import img9 from "../../images/cat_condo1.jpg";
import img10 from "../../images/scratch_board.jpg"
// import { ImQuotesLeft } from "react-icons/im";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <>
    <div className="mt-5" >
        <Container>
            <h4 className="text-center mt-4 text-uppercase">Customer Feedback</h4>
            <div>
            <Row className="m-5">
                <Col className="mt-2"><Image src={img7} style={{height: 220, width: 220}} className="rounded"/></Col> 
                <Col className="mt-4 content">My cat Kitty is happy after buying her a comfortable bed from petslife solution. 
                I recommend furniture from that store.  
                </Col>
            
                <Col className="mt-2"><Image src={img8} style={{height: 220, width: 220}} /></Col>
                <Col className="mt-4 content" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
                    vitae consequuntur ratione amet  
                </Col>
            </Row>

            <Row className="m-5" >
                <Col className="mt-2"><Image src={img9} style={{height: 220, width: 220}} className="rounded_image"/></Col> 
                <Col className="mt-4 content" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
                    vitae consequuntur ratione amet  
                </Col>

                <Col className="mt-2"><Image src={img10} style={{height: 220, width: 220}} className="rounded_image"/></Col>
                <Col className="mt-4 content" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
                    vitae consequuntur ratione amet  
                </Col>
            </Row>
          
            <Row className="m-5" >
                <Col className="mt-2"><Image src={img7} style={{height: 220, width: 220}} className="rounded_image"/></Col> 
                <Col className="mt-4 content" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
                    vitae consequuntur ratione amet  
                </Col>

                <Col className="mt-2"><Image src={img7} style={{height: 220, width: 220}} className="rounded_image"/></Col>
                <Col className="mt-4 content" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis nesciunt 
                    vitae consequuntur ratione amet  
                </Col>
            </Row>
            </div>  
        </Container> 
    </div>

    </>
   
  )
}

export default Testimonials