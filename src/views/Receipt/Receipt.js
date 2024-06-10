import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Receipt.css"; // Import your CSS file here

const Receipt = (props) => {
  const [donation, setDonation] = useState(null);
  const [fundName, setFundName] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const { donation, date, fund } = props.location.state;
    const formattedDate = new Date(date * 1000);
    setDonation(donation);
    setDate(formattedDate.toLocaleString());
    setFundName(fund);
  }, [props.location.state]);

  return (
    <div className="receipt-container">
      <div className="receipt-header">
        <h3>Thank you for your donation to {fundName}</h3>
      </div>
      <div className="receipt-info">
        <div>Date of Donation: {date}</div>
        <div>Donation Value: ${donation}</div>
      </div>
    </div>
  );
};

Receipt.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      donation: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
      fund: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Receipt;
