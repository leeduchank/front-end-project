import Header from './common/header/Header'
import {BrowserRouter as Router,Routes} from "react-router-dom";import './App.css';

function App() {
  return (
    <>
 <Router>
    <Header />
    <Routes>
      {/*<Route path="/" exact>
        <About />

  </Route>*/}
    
    </Routes>
 </Router>
 </>
  );
}

export default App;
