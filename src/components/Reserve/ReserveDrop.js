import React from 'react';
import ClickAwayListener from 'react-click-away-listener';
import carrotDown from '../../icons_assets/carrotDown.png';

const ReserveDrop = ({ icon, value, isOpen, toggleDropdown, closeDropdown, data, onSelect, beenChosen }) => {
  const handleSelection = (item) => {
    onSelect(item);
    toggleDropdown();
  };

  const handleClickAway = () => {
    closeDropdown();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={`formInput inputContainer`}>
        <button type='button' tabIndex={3} onClick={toggleDropdown}>
          <img className='timeDateOccasionIcons' src={icon} alt='Icons' />
          <p>{value}{beenChosen ? <sup>*</sup> : ''}</p>
          <img className={`carrotDownIcon ${isOpen ? 'carrotFlip' : ''}`} src={carrotDown} alt='Dropdown Button' />
        </button>
        <div className={`dropdownOff ${isOpen ? 'dropdownOn' : ''}`}>
          <ul>
            {data.map((item) => (
              <li key={item}>
                <button type='button' onClick={() => handleSelection(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default ReserveDrop;
