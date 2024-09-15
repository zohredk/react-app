import React from "react";

import ProductList from "./ProductList/ProductList";
import Main from "./Main/Main";
import Wrapper from "../hoc/Wrapper";
import Container from "../hoc/Container";
import AuthContext from "../context/auth-context";

import "./App.css";

// Handeling states with classes
class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log("App.js constructor");
    console.log(props.test);
  }

  state = {
    products: [
      { id: 1, title: "book 1", price: 99 },
      { id: 2, title: "book 2", price: 89 },
      { id: 3, title: "book 3", price: 79 },
    ],
    showProducts: false,
    showMain: true,
    auth: false,
  };

  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("App.js componentDidUpdate");
  }
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
  loginHandler = () => {
    this.setState({ auth: true });
  };
  render() {
    console.log("App.js render");

    let products = null;

    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList
            products={this.state.products}
            click={this.deleteProductHandler}
            change={this.changeTitleHandler}
            isAuth={this.state.auth}
          />
        </div>
      );
    }

    return (
      <Container>
        <button
          onClick={() => {
            this.setState({ showMain: false });
          }}
        >
          Remove Main
        </button>
        <AuthContext.Provider
          value={{ auth: this.state.auth, login: this.loginHandler }}
        >
          {this.state.showMain ? (
            <Main
              products={this.state.products}
              click={this.toggleProductHandler}
            />
          ) : null}
          {products}
        </AuthContext.Provider>
      </Container>
    );
  }
}

export default Wrapper(App, "center");

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
