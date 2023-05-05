import React from 'react';

function ProductModal(props) {
  return (
    <div className="product-modal">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}

export default ProductModal;
