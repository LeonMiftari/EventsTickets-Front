import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';  
import api from './api'; 

function BuyForm() {
  const navigate = useNavigate(); 

  const { state } = useLocation();
  const eventData = state ? state.eventData : null;

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  if (!eventData) {
    return <div>Invalid event data</div>;
  }
  const handleBuyTickets = async () => {
    const ticketData = {
      name,
      username,
      emailAddress,
      eventName: eventData.description,
      price: eventData.price,
    };

    const result = await api.buyTickets(ticketData);

    if (result.success) {
      console.log('Ticket purchased successfully');
      navigate('/transactions');
    } else {
      console.error(result.error);
    }
  };


  return (
    <>
      <h2 className="CustomTitle mt-5">Buy Tickets</h2>
      <div className="container mt-5">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="eventName" className="form-label">Event Name</label>
            <input
              type="text"
              className="form-control"
              id="eventName"
              value={eventData.description}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={`$${eventData.price}`}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleBuyTickets}>
        Buy Tickets
      </button>
        </form>
      </div>
    </>
  );
}

export default BuyForm;
