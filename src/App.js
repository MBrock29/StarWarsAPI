import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import API from "./API.js";

function App() {
  return (
    <div>
      <center>
        <Header />
        <Main todos={API} />
        <Footer todosData={API} />
      </center>
    </div>
  );
}
export default App;
