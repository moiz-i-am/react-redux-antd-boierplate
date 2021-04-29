import { withRouter } from "react-router-dom";

import "antd/dist/antd.css";

function App(props) {
  return (
    <div className="App">
      <main>{props.children}</main>
    </div>
  );
}

export default withRouter(App);
