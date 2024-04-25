import { useContext } from "react";
import FilterProducts from "./components/FilterProducts";
import Search from "./components/Search";
import MyContext from "./context/MyContext";

function App() {
  const { hsnCode, products } = useContext(MyContext);
  return (
    <div className="min-h-[100vh] bg-purple-950">
      <div className="w-[80%] m-auto">
        <Search/>
        {
          products.length !== 0 &&
          <FilterProducts/>
        }
      </div>
    </div>
  );
}

export default App;
