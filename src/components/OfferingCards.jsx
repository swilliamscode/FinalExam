import React from "react";

const OfferingCards = () => {
  return (
    <div>
      <h2> Great Offerings!</h2>
      <div className="offerings-container">
        <img
          className="offerings"
          src="https://checkout.overstock.com/cdn/shop/files/Factory_Direct_Finds_824a07c0-1450-4641-842a-9c008939e4c9.jpg?v=1718391534&width=1200"
        />
        <img
          className="offerings"
          src="https://checkout.overstock.com/cdn/shop/files/Liquidation.jpg?v=1718391380&width=1200"
        />
      </div>
    </div>
  );
};

export default OfferingCards;
