import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Booknow = () => {
  const { bookingid } = useParams(); // Groundname
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [slotDuration, setSlotDuration] = useState(30); // 30 minutes interval
  const [timeSlots, setTimeSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]); // List of booked slots
  const [selectedSlots, setSelectedSlots] = useState([]); // List of selected slots

  useEffect(() => {
    // Set default values for date and time
    const currentDate = new Date();
    setSelectedDate(currentDate.toISOString().split('T')[0]);
    setSelectedTime(currentDate.toTimeString().split(':').slice(0, 2).join(':'));

    // Initialize time slots (6 AM to 2 AM with 30-minute intervals)
    const slots = [];
    for (let hour = 6; hour < 24; hour++) {
      slots.push(`${formatTime(hour, 0)}-${formatTime(hour, 30)}`);
      slots.push(`${formatTime(hour, 30)}-${formatTime(hour + 1, 0)}`);
    }
    for (let hour = 0; hour <= 2; hour++) {
      slots.push(`${formatTime(hour, 0)}-${formatTime(hour, 30)}`);
      if (hour < 2) slots.push(`${formatTime(hour, 30)}-${formatTime(hour + 1, 0)}`);
    }
    setTimeSlots(slots);
  }, []);
console.log(timeSlots , 'availabletimeslots');
  const formatTime = (hour, minute) => {
    const suffix = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${suffix}`;
  };

  const handleSlotClick = (slot) => {
    const currentTime = new Date();
    const currentDateString = currentTime.toISOString().split('T')[0];
    const currentTimeString = currentTime.toTimeString().split(':').slice(0, 2).join(':');

    const [slotStartTime] = slot.split('-');
    const [slotHour, slotMinute] = slotStartTime.split(':').map(Number);
    const slotTime = new Date(selectedDate);
    slotTime.setHours(slotHour, slotMinute, 0, 0);

    const currentTimeForComparison = new Date();
    currentTimeForComparison.setSeconds(0, 0); // Ignore seconds and milliseconds for comparison

    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter(selectedSlot => selectedSlot !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const handleCancelSlot = (slot) => {
    setBookedSlots(bookedSlots.filter(bookedSlot => bookedSlot !== slot));
  };

  const handleBooking = () => {
    setBookedSlots([...bookedSlots, ...selectedSlots]);
    setSelectedSlots([]); // Clear selected slots after booking
  };
console.log(bookedSlots , 'availablebookedslots');
  return (
    <div className="container my-4">
      <div className='row'>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h3>Book Your Ground</h3>
          <button type="button" className="btn btn-primary my-2 w-100" onClick={handleBooking}>Confirm Now</button>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 com-sm-12 ">
              <div className="card">
                <div className="card-header">
                  Time Slots
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5>Available Slots</h5>
                      <div className="time-slot-container d-flex justify-content-center text-align-center">
                        {timeSlots.filter(slot => !bookedSlots.includes(slot)).map((slot, index) => (
                          <div
                            key={index}
                            className={`time-slot available ${selectedSlots.includes(slot) ? 'selected' : ''}`}
                            onClick={() => handleSlotClick(slot)}
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col">
                      <h5>Booked Slots</h5>
                      <div className="time-slot-container">
                        {bookedSlots.map((slot, index) => (
                          <div
                            key={index}
                            className="time-slot booked time-slot-booked"
                          >
                            {slot}
                            {bookedSlots.includes(slot) && (
                              <button className="btn btn-danger btn-sm cancel-button ms-1" onClick={() => handleCancelSlot(slot)}>Cancel</button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booknow;
