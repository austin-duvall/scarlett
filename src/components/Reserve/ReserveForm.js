import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import ReserveDrop from './ReserveDrop';
import dateIcon from '../../icons_assets/date.png';
import timeIcon from '../../icons_assets/time.png';
import celebrateIcon from '../../icons_assets/celebrateIcon.png';
import guestsIcon from '../../icons_assets/guests.png';

const ReserveForm = ({ dateData, timeData }) => {
  const [guestsDropdownOpen, setGuestsDropdownOpen] = useState(false);
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const [occasionDropdownOpen, setOccasionDropdownOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleSelection = (item, setter, fieldName) => {
    setter(item);
    formik.setFieldValue(fieldName, item);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      guests: 'Number of Guests',
      date: 'Date',
      time: 'Time',
      occasion: 'Special Occasion?',
    },
    onSubmit: (values) => {
      console.log(values);
      setIsConfirmed(true)
    },
  });

  const nameError = formik.values.name.length === 0
  const emailError = formik.values.email.length === 0
  const emailFormatError = !formik.values.email.includes('@') || !formik.values.email.includes('.')
  const guestsError = formik.values.guests === 'Number of Guests'
  const dateError = formik.values.date === 'Date'
  const timeError = formik.values.time === 'Time'

  const disabler = () => {
    setIsDisabled(nameError || emailError || guestsError || dateError || timeError || emailFormatError)
  }

  useEffect(() => {
    disabler();
  }, [nameError, emailError, guestsError, dateError, timeError, emailFormatError])

  const doneHandler = () => {
    setIsConfirmed(false)
    formik.resetForm();
  }

  const occasions = [
    'Birthday',
    'Graduation',
    'Retirement',
    'Anniversary',
    'Promotion',
    'None'
  ]

  const guestsData = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ]

  return (
    <>
      <form className={isConfirmed ? 'reserveFormOff' : 'reserveForm'} onSubmit={formik.handleSubmit}>
        <h1 id='reserveHeader'>Reserve a Table</h1>
        <p id='requiredP'>(Required fields denoted by an asterisk)</p>
        <div className='formInput textInput'>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            tabIndex={1}
            maxLength={50}
          />
          {nameError ? <sup>*</sup> : ''}
        </div>
        <div className='formInput textInput'>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Confirmation Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            tabIndex={2}
            maxLength={50}
          />
          {emailFormatError ? <sup>*</sup> : ''}
        </div>

        <ReserveDrop
          icon={guestsIcon}
          value={formik.values.guests}
          isOpen={guestsDropdownOpen}
          toggleDropdown={() => setGuestsDropdownOpen(!guestsDropdownOpen)}
          closeDropdown={() => setGuestsDropdownOpen(false)}
          data={guestsData}
          onSelect={(item) => handleSelection(item, setGuestsDropdownOpen, 'guests')}
          beenChosen={formik.values.guests === 'Number of Guests'}
        />
        <ReserveDrop
          icon={dateIcon}
          value={formik.values.date}
          isOpen={dateDropdownOpen}
          toggleDropdown={() => setDateDropdownOpen(!dateDropdownOpen)}
          closeDropdown={() => setDateDropdownOpen(false)}
          data={dateData.map((item) => item.date)}
          onSelect={(item) => handleSelection(item, setDateDropdownOpen, 'date')}
          beenChosen={formik.values.date === 'Date'}
        />
        <ReserveDrop
          icon={timeIcon}
          value={formik.values.time}
          isOpen={timeDropdownOpen}
          toggleDropdown={() => setTimeDropdownOpen(!timeDropdownOpen)}
          closeDropdown={() => setTimeDropdownOpen(false)}
          data={timeData.map((item) => item.time)}
          onSelect={(item) => handleSelection(item, setTimeDropdownOpen, 'time')}
          beenChosen={formik.values.time === 'Time'}
        />
        <ReserveDrop
          icon={celebrateIcon}
          value={formik.values.occasion}
          isOpen={occasionDropdownOpen}
          toggleDropdown={() => setOccasionDropdownOpen(!occasionDropdownOpen)}
          closeDropdown={() => setOccasionDropdownOpen(false)}
          data={occasions}
          onSelect={(item) => handleSelection(item, setOccasionDropdownOpen, 'occasion')}
        />

        <div className='formInput formSubmitButton'>
          <button type='submit' disabled={isDisabled} tabIndex={4}>Book</button>
          {formik.touched.email && emailFormatError ? <p>Please check email format</p> : ''}
        </div>
      </form>
      <div className={isConfirmed ? 'confirmScreen' : 'confirmOff'}>
        <h1>You're all set!</h1>
        <p>Confirmation Number: SR-{Math.floor(Math.random() * 100000)}</p>
        <div className='confirmDetails'>
          <h2><span><img src={dateIcon} alt='Calendar'/></span>{formik.values.date}</h2>
          <h2><span><img src={timeIcon} alt='Clock'/> </span>{formik.values.time}</h2>
          <h2><span><img src={guestsIcon} alt='Number of Guests'/></span>{formik.values.guests}</h2>
          <h2><span><img src={celebrateIcon} alt='Celebrate Question'/></span>{formik.values.occasion === 'Special Occasion?' ? 'None' : formik.values.occasion}</h2>
        </div>
        <p>Need to make a change? Call us at 555.867.5309</p>
        <div className='cancellationPolicy'>
          <h3>Cancellations</h3>
          <p>We understand that plans can change, and sometimes it's necessary to cancel or modify your reservation. To ensure the best experience for all our guests, we kindly request that you notify us of any cancellations or changes to your reservation at least 24 hours in advance.</p>
        </div>
        <button type='button' onClick={doneHandler}>Done</button>
      </div>
    </>
  );
};

export default ReserveForm;