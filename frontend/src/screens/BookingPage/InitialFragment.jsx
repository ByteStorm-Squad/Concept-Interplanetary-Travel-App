import React, { useCallback, useState } from 'react';
import TextBox from '../../components/TextBox/TextBox';
import Button from '../../components/Button/Button';
import { getNextFlights } from '../../hooks/Booking/bookingApi';

const InitialFragment = ({ incrementFragmentNo, bookingData, setBookingData }) => {
  const [departure, setDeparture] = useState('MIL');
  const [destination, setDestination] = useState('ORI');

  const handleContinue = async () => {
    incrementFragmentNo();
    setBookingData({ ...bookingData, departure: departure, destination: destination });
    try {
      const data = await getNextFlights(2, `${departure} to ${destination}`);
      setBookingData({ ...bookingData, availableJourneys: data });
    } catch (error) {
      console.error('Error fetching journey data:', error);
    }
  };

  return (
    <>
      <div className="my-8 mx-8">
        <h2>Passenger Details</h2>
      </div>
      <TextBox text={'Departure'} setText={val => setDeparture(val)} />
      <TextBox text={'Destination'} setText={val => setDestination(val)} />
      <div className="flex justify-center">
        <Button text="Continue" type="full" onClick={handleContinue} />
      </div>
    </>
  );
};

export default InitialFragment;
