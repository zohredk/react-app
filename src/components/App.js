import React, { useState } from "react";
import Product from "./Product/Product";
import "./App.css";
// Handeling states with classes
class App extends React.Component {
  state = {
    products: [
      { title: "book 1", price: 99 },
      { title: "book 2", price: 89 },
      { title: "book 3", price: 79 },
    ],

    showProducts: false,
  };

  changeTitleHandler = (event) => {
    this.setState({
      products: [
        { title: "book 1", price: 59 },
        { title: event.target.value, price: 59 },
        { title: "book 3", price: 59 },
      ],
    });
  };

  // changePriceHandler = (newTitle) => {
  //   this.setState({
  //     products: [
  //       { title: "newTitle", price: 59 },
  //       { title: "book 2", price: 59 },
  //       { title: "book 3", price: 59 },
  //     ],
  //   });
  // };

  toggleProductHandler = () => {
    const show = this.state.showProducts;
    this.setState({ showProducts: !show });
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
          {
            this.state.products.map((item) => {
              return <product title={item.title} price={item.price} />;
            })
            /* <Product
            title={this.state.products[0].title}
            price={this.state.products[0].price}
          />
          <Product
            title={this.state.products[1].title}
            price={this.state.products[1].price}
            change={this.changeTitleHandler}
          />
          <Product
            title={this.state.products[2].title}
            price={this.state.products[2].price}
            // click={this.changePriceHandler.bind(this.newTitle)}
            // click={() => this.changePriceHandler("newTitle")}
          /> */
          }
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

export default App;

// function ?
// const App = () => {
//   return (
//     <div id= "main" className= "container">
//       <h2>React App</h2>
//       <Product />
//     </div>
//   )
// };

// static data
// class App extends React.Component {
//   render() {
//     return (
//       <div id="main" className="container">
//         <h2>React App</h2>
//         <Product title="book 1" price="99" />
//         <Product title="book 2" price="89"/>
//         <Product title="book 3" price="79" />
//         <button> Change Price</button>
//       </div>
//     );
//   }
// }
