import React, { useState } from "react";

import ProductList from "./ProductList/ProductList";

import "./App.css";
// Handeling states with classes
class App extends React.Component {
  state = {
    products: [
      { id: 1, title: "book 1", price: 99 },
      { id: 2, title: "book 2", price: 89 },
      { id: 3, title: "book 3", price: 79 },
    ],

    showProducts: false,
  };

  changeTitleHandler = (event, id) => {
    const productIndex = this.state.products.findIndex((item) => {
      return item.id === id;
    });

    const product = { ...this.state.products[productIndex] };

    product.title = event.target.value;

    const products = [...this.state.products];
    products[productIndex] = product;

    this.setState({ products: products });
  };

  toggleProductHandler = () => {
    const show = this.state.showProducts;
    this.setState({ showProducts: !show });
  };

  deleteProductHandler = (productIndex) => {
    const products = [...this.state.products];
    products.splice(productIndex, 1);
    this.setState({ products: products });
  };

  render() {
    const btn = {
      backgroundColor: "#7b1fa2",
      color: "#ffffff",
      font: "inherit",
      border: "none",
      outline: "none",
      borderRadius: "3px",
      padding: "0.6rem",
      margin: "0.6rem auto",
    };

    let products = null;

    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList
            products={this.state.products}
            click={this.deleteProductHandler}
            change={this.changeTitleHandler}
          />
        </div>
      );
    }

    return (
      <div className="center">
        <h2>Book Store</h2>
        <button style={btn} onClick={this.toggleProductHandler}>
          Show/Hide Products
        </button>
        {products}
      </div>
    );
  }
}

export default App;

// Handeling states with functions
// const App = (props) => {
//   const [productState, setProductState] = useState({
//     products: [
//       { title: "book 1", price: 99 },
//       { title: "book 2", price: 89 },
//       { title: "book 3", price: 79 },
//     ],
//   });

//   const changePriceHandler = () => {
//     setProductState({
//       products: [
//         { title: "book 1", price: 59 },
//         { title: "book 2", price: 59 },
//         { title: "book 3", price: 59 },
//       ],
//     });
//   };

//   return (
//     <div id="main" className="container">
//       <h2>React App</h2>
//       <Product
//         title={productState.products[0].title}
//         price={productState.products[0].price}
//       />
//       <Product
//         title={productState.products[1].title}
//         price={productState.products[1].price}
//       />
//       <Product
//         title={productState.products[2].title}
//         price={productState.products[2].price}
//       />
//       <button onClick={changePriceHandler}>Change Price</button>
//     </div>
//   );
// };