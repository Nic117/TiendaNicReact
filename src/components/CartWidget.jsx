import React from 'react';

const CartWidget = () => {
  const cartItemCount = 5; // Número hardcodeado

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;
