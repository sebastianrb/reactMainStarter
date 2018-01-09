import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Routes from "./routes";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("app"));

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept();
  }
}

// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept("./app", () => {
//     const NextApp = require("./app").default;
//     ReactDOM.render(
//       <AppContainer>
//         <NextApp />
//       </AppContainer>,
//       document.getElementById("app")
//     );
//   });
// }
