
import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
const BookingForm = () => {
    const { bookingid } = useParams();  //Groundname
   console.log(bookingid , 'bookingid')
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [slotDuration, setSlotDuration] = useState(30); // 30 minutes interval

  useEffect(() => {
    // Set default values for date and time
    const currentDate = new Date();
    setSelectedDate(currentDate.toISOString().split('T')[0]);
    setSelectedTime(currentDate.toTimeString().split(':').slice(0, 2).join(':'));
  }, []);

  const handleSportChange = (e) => {
    setSelectedSport(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSlotDurationChange = (e) => {
    setSlotDuration(parseInt(e.target.value));
  };

  const handleBooking = () => {
    // Handle the booking logic here
    console.log('Sport:', selectedSport);
    console.log('Date:', selectedDate);
    console.log('Time:', selectedTime);
    console.log('Slot Duration:', slotDuration, 'minutes');
  };
  
  return (
    <div className="container my-4">
      <h3>Book Your Ground</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="sport" className="form-label">Select Sport</label>
          <select id="sport" className="form-control" value={selectedSport} onChange={handleSportChange}>
            <option value="">Select a sport</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            {/* Add more sports as needed */}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Select Date</label>
          <input type="date" id="date" className="form-control" value={selectedDate} onChange={handleDateChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="time" className="form-label">Select Start Time</label>
          <input type="time" id="time" className="form-control" value={selectedTime} onChange={handleTimeChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="slotDuration" className="form-label">Slot Duration (minutes)</label>
          <input type="number" id="slotDuration" className="form-control" value={slotDuration} onChange={handleSlotDurationChange} min="30" step="30" />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleBooking}>Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
