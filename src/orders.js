import React from "react";
import "./orders.css";
import { Link } from "react-router-dom";

function orders() {
  return (
    <div>
      <h2 className="text__first">Your order has been placed!</h2>
      <h3 className="text__second">Thank you for shopping with us.</h3>
      <Link to="/">
      <button className="button__styling" >Back to shopping</button>
      </Link>
    </div>
  );
}

export default orders;