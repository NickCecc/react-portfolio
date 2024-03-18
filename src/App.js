import Layout from "./components/Layout";
import './app.scss';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}></Route>
    </Routes>
  );
}

export default App;
