import * as React from "react";
import {render} from "react-dom";
import { Carousel } from "./Carousel";

const App = () => (
  <div style={{
    width: '100%'
  }}>
    <Carousel/>
  </div>
);

render(<App/>, document.getElementById("root"));
