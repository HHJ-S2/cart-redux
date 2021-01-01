import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gnb from "./Components/Gnb";
import ProductList from "./Pages/ProductList";
import CartList from "./Pages/CartList";

function Routes() {
  return (
    <Router>
      <Gnb />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/cart" component={CartList} />
      </Switch>
    </Router>
  );
}

export default Routes;
