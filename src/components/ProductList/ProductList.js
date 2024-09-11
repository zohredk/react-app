import React from "react";
import Product from "../Product/Product";

const ProductList = (props) => {
  return props.product.map((item, index) => {
    return (
      <Product
        click={() => props.click(index)}
        title={item.title}
        price={item.price}
        key={index.id}
        change={(event) => props.change(event, item.id)}
      />
    );
  });
};

export default ProductList;
