import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import { Container, Row ,Col} from 'react-bootstrap';




function Home() {
  const carouselData = [
    {
      description: "Explore new Things",
      image: "/images/Products12.jpg",
    },
    {
      description: "Discover New Horizons",
      image: "/images/Product11.jpg",
    },
   
  ];

  
  const productData = [
    { image: '/images/iphone15.jpg' },
    { image: '/images/applewatch.jpg' },
    { image: '/images/mac.jpg' },
  ];

  const serviceData = [
    {
      image: '/images/img3.jpg',
      title: 'Mac Service',
      description: 'Description:',
    },
    {
      image: '/images/Ipohone15-1.jpg',
      title: 'Iphone Service',
      description: 'Description:',
    },
    {
      image: '/images/img5.jpg',
      title: 'Apple Watch Service',
      description: 'Description :',
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
              <h2 className="CustomTitle">Leo Tech</h2>
              <p>
                I was inspired to start my business with Apple products because of their commitment to innovation, design, and quality. Their products have a dedicated user base, and I wanted to offer top-tier technology and a seamless user experience to my customers. Apple's ethos of pushing boundaries resonated with me, and I wanted to be part of that journey.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <Card>
              <Card.Img
            variant="top"
            src="/images/Service.png"
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
            We have highly skilled engineers with excellent technical knowledge and experience in using the latest software standards. By putting our clients at the heart of what we do, we are proud to still be supporting our first business client.
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12} className="col-md-6 bottom-content mt-5">
        <p>Want any assistance, please write us</p>
        <button>Contact Us</button>
      </Col>
    </Row>
  </Container>
</div>



    </div>
  );
}

export default Home;