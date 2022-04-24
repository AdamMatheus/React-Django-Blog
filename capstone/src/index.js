import ReactDOM from "react-dom/client";
import Providers from "./providers";
import MainRouter from "./router";

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Providers>
    <MainRouter />
  </Providers>,

);