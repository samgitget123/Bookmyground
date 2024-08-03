import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingForm = () => {
  const { bookingid } = useParams(); // Groundname
  console.log(bookingid, 'bookingid');
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

    // Initialize time slots (6 AM to 10 PM with 30-minute intervals)
    const slots = [];
    for (let hour = 6; hour <= 26; hour++) {
      slots.push(`${hour}:00`);
      if (hour < 26) slots.push(`${hour}:30`);
    }
    setTimeSlots(slots);
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

  const handleSlotClick = (slot) => {
    const currentTime = new Date();
    const currentDateString = currentTime.toISOString().split('T')[0];
    const currentTimeString = currentTime.toTimeString().split(':').slice(0, 2).join(':');

    if (selectedDate === currentDateString && slot < currentTimeString) {
      return; // Do not allow selection of slots less than the current time
    }

    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter(selectedSlot => selectedSlot !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const handleBooking = () => {
    setBookedSlots([...bookedSlots, ...selectedSlots]);
    setSelectedSlots([]); // Clear selected slots after booking

    console.log('Sport:', selectedSport);
    console.log('Date:', selectedDate);
    console.log('Time:', selectedTime);
    console.log('Slot Duration:', slotDuration, 'minutes');
    console.log('Booked Slots:', bookedSlots);
  };

  const formatTime = (hour, minute) => {
    const suffix = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${suffix}`;
  };

  const formatTimeSlot = (startTime, duration) => {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const totalMinutes = startHour * 60 + startMinute + duration;
    const endHour = Math.floor(totalMinutes / 60);
    const endMinute = totalMinutes % 60;
    return `${formatTime(startHour, startMinute)} - ${formatTime(endHour, endMinute)}`;
  };

  return (
    <div className="container my-4">
      <div className='row'>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-header">
                  Time Slots
                </div>
                <div className="card-body">
                  <h5>Available Slots</h5>
                  <div className="time-slot-container">
                    {timeSlots.filter(slot => !bookedSlots.includes(slot)).map((slot, index) => (
                      <div
                        key={index}
                        className={`time-slot available ${selectedSlots.includes(slot) ? 'selected' : ''}`}
                        onClick={() => handleSlotClick(slot)}
                      >
                        {formatTimeSlot(slot, 30)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-header">
                  Booked Slots
                </div>
                <div className="card-body">
                  <h5>Booked Slots</h5>
                  <div className="time-slot-container">
                    {bookedSlots.map((slot, index) => (
                      <div
                        key={index}
                        className="time-slot booked"
                      >
                        {formatTimeSlot(slot, 30)}
                      </div>
                    ))}
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

export default BookingForm;
