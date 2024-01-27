import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import EventDetails from './EventDetails';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';


function Events() {
  const slideData = [
    { image: "/images/drakeconcert.jpg" },
    { image: "/images/adele.jpg" },
    { image: "/images/ballon.jpg" },
    { image: "/images/bella.jpg" },
    { image: "/images/kev.jpg" },
  ];

  const FootballEventsData = [
    { description: " Ticket for El Clasico!", image: "/images/ELC.jpg",price:250 },
    { description: " Ticket for World Cup Final!", image: "/images/WC.jpg",price:320 },
    { description: " Ticket for UCL Final!", image: "/images/UCL.jpg",price: 300},
  ];

  const ConcertEventsData = [
    { description: " Ticket for Adele Concert!", image: "/images/adele.jpg",price:400  },
    { description: " Ticket for Eminem Concert!", image: "/images/eminem.jpg", price:350 },
    { description: " Ticket for Drake Concert!", image: "/images/drakeconcert.jpg",price:370  },
  ];

  const ComedyEventsData = [
    { description: " Ticket for James Show!", image: "/images/james.jpg",price:270  },
    { description: " Ticket for Kevin Show!", image: "/images/kevin.jpg",price:360  },
    { description: " Ticket for Jimmy Show.", image: "/images/jimmy.jpg" ,price:370 },
  ];

  const getTotalEventsCount = () => {
    return FootballEventsData.length + ConcertEventsData.length + ComedyEventsData.length;
  };


  

  return (
    <>
<h2 className="CustomTitle mt-5">EventEagleTickets!</h2>
      <FaFilter className="filter-icon"  />

      <div className="event-count">{getTotalEventsCount()} Events</div>
      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'3'}
          initialSlide={2}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 400,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {slideData.map((s, index) => (
            <SwiperSlide key={index}>
              <img src={s.image} alt={`slide_image_${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="EventSection">
        <div className="container mt-5">
          <h2 className="EventCategoryTitle">Football Events</h2>
          <div className="row">
            {FootballEventsData.map((e, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="CardEventSection">
                <Link to={`/event`} state={{ eventData: e }}>
  <span className="EventCategoryLabel">{e.description}</span>
  <img src={e.image} alt={`event_image_${index + 1}`} className="card-img-top" />
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="EventSection">
        <div className="container mt-5">
          <h2 className="EventCategoryTitle">Concert Events</h2>
          <div className="row">
            {ConcertEventsData.map((c, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="CardEventSection">
                <Link to={`/event`} state={{ eventData: c }}>
  <span className="EventCategoryLabel">{c.description}</span>
  <img src={c.image} alt={`event_image_${index + 1}`} className="card-img-top" />
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="EventSection">
        <div className="container mt-5">
          <h2 className="EventCategoryTitle">Comedy Events</h2>
          <div className="row">
            {ComedyEventsData.map((cm, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="CardEventSection">
                <Link to={`/event`} state={{ eventData: cm }}>
  <span className="EventCategoryLabel">{cm.description}</span>
  <img src={cm.image} alt={`event_image_${index + 1}`} className="card-img-top" />
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
