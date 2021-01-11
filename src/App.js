import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import products from "./products";

function App() {
      return (
            <div className="app">
                  <FilterableProductTable products={products} />
            </div>
      );
}

export default App;
