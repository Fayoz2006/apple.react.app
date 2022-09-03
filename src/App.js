import "./App.css";
import Layout from "./Layout/Layout";
import { BrowserRouter as Br } from "react-router-dom";
import { Views } from "./Components/Views/Views";

function App() {
  return (
    <Br>
      <Layout>
        <Views />
      </Layout>
    </Br>
  );
}

export default App;
