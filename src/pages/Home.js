import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import { Container, Row ,Col} from 'react-bootstrap';




function Home() {
  const carouselData = [
    {
      description: "Book your Ticket's",
      image: "/images/oskar.jpg",
    },
    {
      description: "Discover New Horizons",
      image: "/images/ticket.jpg",
    },
   
  ];

  
  const productData = [
    { image: '/images/oskar1.jpg' },
    { image: '/images/drakeconcert.jpg' },
    { image: '/images/ballondoor.jpg' },
  ];

  const serviceData = [
    {
      image: '/images/scan.jpg',
      title: 'Tickets',
      description: ' Scanner App Tickets',
    },
    {
      image: '/images/Vip.jpg',
      title: 'Tickets',
      description: 'Vip Tickets',
    },
    {
      image: '/images/virtual.jpg',
      title: 'Tickets',
      description: 'Virtual Tickets',
    },
  ];

  return (
    <div>
    <div className="CarouselSector">
      <Carousel>
        {carouselData.map((c) => (
          <Carousel.Item >
            <img src={c.image} alt="Slide" className="d-block w-100 " />
            <Carousel.Caption>
              <h1>{c.description}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>




 <div className="LatestProductsHeading text-center mt-5">
   <h1>The latest. Take a look at what’s new, right now.</h1> 
 </div>


 <Container className="ProductSector">
          <Row className="CardProductSection mt-5">
            {productData.map((p) => (
              <Col md={4}>
                <Card className="product-card">
                  <Card.Img variant="top" src={p.image} className="card-img" />
                </Card>
              </Col>
            ))}
          </Row>
      </Container>








        


      
    <div className="LatestProductsHeading text-center mt-4">
        <h1>About Us</h1>
      </div>



      <div className="FirstSection ">
        <Container fluid>
          <Row className="CaptionSection">
            <Col xs={12} md={6}>
              <h2 className="CustomTitle">Welcome to LeoTickets: Elevating Your Event Experience!

</h2>
              <p>
At LeoTickets, we are your dedicated ticketing platform, committed to bringing you closer to the most captivating events that promise unforgettable moments. Whether you're a music aficionado, sports enthusiast, or cultural explorer, LeoTickets is your gateway to a world of unparalleled experiences.              </p>
            </Col>
            <Col xs={12} md={6}>
              <Card>
              <Card.Img
            variant="top"
            src="/images/tick.png"
            style={{ backgroundColor: '#f7f7f7' }} 
          />
        </Card>
            </Col>
          </Row>
        </Container>
      </div>



      <div className="LatestProductsHeading text-center mt-4">
        <h1>Services</h1>
      </div>

        <Container className='ServiceSector'>
        <Row className='mt-5'>
          {serviceData.map((s) => (
            <Col  md={4}>
              <Card className="service-card">
                <Card.Img variant="top" src={s.image} className="card-img" />
                <Card.Body>
                  <Card.Title>{s.title}</Card.Title>
                  <Card.Text>{s.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


      

<div className="why-choose-us">
  <Container>
    <Row>
      <Col xs={12} md={12}>
        <div className="content">
          <h2>WHY CHOOSE US</h2>
          <p>
          LeoTickets is your gateway to a carefully curated selection of top-tier events. We handpick each experience to guarantee that every moment you spend with us is extraordinary.
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12} className="col-md-6 bottom-content mt-5">
        <p>Want any assistance, please write us!</p>
        <button>Contact Us</button>
      </Col>
    </Row>
  </Container>
</div>



    </div>
  );
}

export default Home;