import Layout from "./components/Layout";
import './app.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<Layout />}>
              <Route index element={<Home />} />
              {/* Other routes can be added here */}
          </Route>
      </Routes>
  );
}

export default App;
