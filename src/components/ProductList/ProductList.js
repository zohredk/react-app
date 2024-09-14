import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ProductList");
    return true;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log("ProductList, getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("ProductList, componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ProductList, componentWillUnmount");
  }

  render() {
    console.log("ProductList");
    return this.props.products.map((item, index) => {
      return (
        <Product
          click={() => this.props.click(index)}
          title={item.title}
          price={item.price}
          key={index.id}
          change={(event) => this.props.change(event, item.id)}
          isAuth={this.props.isAuth}
        />
      );
    });
  }
}

export default ProductList;
