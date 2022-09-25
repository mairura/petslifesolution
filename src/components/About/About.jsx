import img4 from "../../images/01.png";
import img5 from "../../images/14.jpeg";
import img6 from "../../images/outdoor_Dog_Pet_House.jpg";
import img7 from "../../images/window_cat_perch.jpg";
import img8 from "../../images/minimalistic_hammock.jpg";
import img9 from "../../images/CatFriendlyScratchingPost.jpg";
import img10 from "../../images/cat_cage.jpg";
import img11 from "../../images/Soft_warm_Pet_Dog_catBed.jpg";
import img12 from "../../images/square_cat_bed.jpeg";
import img13 from "../../images/Vertical_Standing_Cat_Scratching_Board.jpg";
import img14 from "../../images/scratching_post.jpg";
import img15 from "../../images/outdoor_playpen.jpg";
import img16 from "../../images/05.jpg";
import img17 from "../../images/sisalwaxedScratcher.jpg";
import img18 from "../../images/woven_sisalScratchingPost.jpg";
import img19 from "../../images/Dog_Bed.jpg";
import img20 from "../../images/cat_tree.jpg";
import img21 from "../../images/22.jpg";
import img22 from "../../images/Scratching_Sofa_guard.jpg"
import "./about.css";

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";


function ResponsiveAutoExample() {
    return (
    <Container className="mt-3">
      <h3 className="my-5 text-center">Get A Taste of Our Collection</h3>
      <CardGroup>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover" >
          <Card.Img variant="top" src={img4} style={{width: "100%", height: "auto"}} />
          <Card.Body>
            <Card.Title className="text-success"> Cats Feeder</Card.Title>
            <Card.Text>
              Double Wooden Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/></p>
            <b>Ksh. 1050</b> 
            <div><i>In stock</i></div> 
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img9}  style={{width: "100%", height: "auto"}}  />
          <Card.Body>
           <Card.Title className="text-success">Cat Scratching Post</Card.Title>
            <Card.Text>
              5.11' Scratch Pole
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 2500</b>
            <div><i>Free Delivery</i></div> 
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img6}  style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success"> Outdoor Wooden Dog House</Card.Title>
            <Card.Text>
              Raised Wooden Dog House
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 5500</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img7} style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success">Wooden Raised Grove Cat Tower</Card.Title>
            <Card.Text>
              6.14' high Condo
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 6000</b>
            <div><i>In stock(+2)</i></div> 
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img22}  style={{width: "100%", height: 470}}  />
          <Card.Body>
          <Card.Title className="text-success">Pets Feeder</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img10}  style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success">Solid Pine Wooden Cat Crate</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img13} style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success">Fine Wood Cat scratcher Board</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img14}  style={{width: "100%", height: "auto"}}  />
          <Card.Body>
          <Card.Title className="text-success">Modern Wooden cat furniture scratching Post</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img12}  style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success"> Eco Friendly Portable Cat Perch</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img5} style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success">Green Wooden Cat Tree</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img17}  style={{width: "100%", height: "auto"}}  />
          <Card.Body>
          <Card.Title className="text-success">Cat Tree Climbing Tower</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img15}  style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success">Custom Made Cat Playpen</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img18} style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success">Modern Stool Cat Scratching Board</Card.Title>
            <Card.Text>
              Catscratching Stool
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img20}  style={{width: "100%", height: "auto"}}  />
          <Card.Body>
          <Card.Title className="text-success">Unique Grove Cat Tree Condo</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img16}  style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success"> Custom Made Wooden Raised Cat House</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card> 
      </CardGroup>

      <CardGroup>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img19} style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success">Washable Cosy cotton Dog Bed</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img21}  style={{width: "100%", height: "auto"}}  />
          <Card.Body>
          <Card.Title className="text-success">Grove Cat Tower</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>
        <Card className="me-3 my-3 border border-dark rounded" id="card_hover">
          <Card.Img variant="top" src={img11}  style={{width: "100%", height: "auto"}} />
          <Card.Body>
          <Card.Title className="text-success">Handmade Wooden Dog Bed</Card.Title>
            <Card.Text>
              Double Elevated Feeder
            </Card.Text>
            <p> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStar className="text-warning"/> <FaStarHalf className="text-warning"/></p>
            <b >Ksh. 3000</b>
            <div><i>Free Delivery</i></div>
          </Card.Body>
        </Card>

        
      </CardGroup>
    </Container>
    );
  }
  
  export default ResponsiveAutoExample;

