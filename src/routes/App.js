import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import Layout from "../components/Layout";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { errorBoundary } from "../helpers/errorBoundary";

const Home = lazy(() => import("../containers/Home"));
const Search = lazy(() => import("../containers/Search"));
const NotFound = lazy(() => import("../containers/NotFound"));

const App = () => (
  <Layout>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default errorBoundary(App);
