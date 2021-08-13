import * as React from "react";
import {render} from "react-dom";
import { Carousel } from "./Carousel";

import "./styles.css";

const App = () => (
  <div>
    <Carousel/>
  </div>
);

render(<App/>, document.getElementById("root"));
