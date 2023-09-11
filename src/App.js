
import About from "./pages/about/About";
import Help from "./pages/help/Help";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Volunteer from "./pages/volunteer/Volunteer";
import {BrowserRouter, Route,Routes} from 'react-router-dom';


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/help" element={<Help/>}/>
  <Route path="/volunteer" element={<Volunteer/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
