import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    console.log("Product");
    return (
      <div className="product">
        <p onClick={this.props.click}> Product name: {this.props.title} </p>
        <p> Product Price: {this.props.price} </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.title}
        />
      </div>
    );
  }
}

export default Product;
