import React from "react";
import Product from "./Product/Product";

class App extends React.Component {
  render() {
    return (
      <div id="main" className="container">
        <h2>React App</h2>
        <Product title="book 1" price="99" />
        <Product title="book 2" price="89">
          Discount: 20%
        </Product>

        <Product title="book 3" price="79" />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div id= "main" className= "container">
//       <h2>React App</h2>
//       <Product />
//     </div>
//   )
// };

export default App;
