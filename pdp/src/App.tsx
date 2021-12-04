import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";

const App = () => {
  const [showHeader, setShowHeader] = React.useState(false);
  return (
    <div className="container">
      {showHeader && (
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      )}

      <button onClick={() => setShowHeader(!showHeader)}>Show header</button>
      <div>pdp content</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
