import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function EventDetails() {
  const { state } = useLocation();
  const eventData = state ? state.eventData : null;
  const price = state ? state.price : null;


  console.log('Event Details State:', state);

  if (!eventData) {
    return <div>Invalid event data</div>;
  }

  return (
    <>
      <h2 className="CustomTitle mt-5">EventEagleTickets!</h2>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={eventData.image} alt={`event_image`} className="card-img-top" />
          </div>
          <div className="col-md-6">
            <div className="CardEvent">
              <h2>{eventData.description}</h2>
              <p>
                "Your Gateway to Entertainment Experiences – EventEagleTickets brings you a curated selection of thrilling football matches, sensational concerts, and hilarious comedy shows. Book your tickets now for unforgettable moments!"
              </p>
              <Link to="/buyform" state={{ eventData }}>
                <button className="btn btn-primary">Book a Ticket</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
