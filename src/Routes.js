import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gnb from "./Components/Gnb";
import ProductList from "./Pages/ProductList";

function Routes() {
  return (
    <Router>
      <Gnb />
      <Switch>
        <Route exact path="/" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default Routes;
