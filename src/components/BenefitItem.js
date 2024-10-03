// src/components/BenefitItem.js
import React from 'react';

const BenefitItem = ({ icon, title, description }) => (
  <div className="benefit-item">
    <div className="benefit-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="bottom_line"></div>
  </div>
);

export default BenefitItem;
