import './App.css';
import One from "./pages/One";
import Two from "./pages/Two";
import Navo from './pages/Navo';
import Home from './pages/Home';
import Profile from ".//profile/profile";
import Photo from "./profile/profilePhoto.jpg";
import { Route } from 'react-router-dom';
function App() {
  const oppe = () => {
    return alert("Thanks for being awesome!");
  };
  return (
    <div>
      <Navo />
      <div className="App">

        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/One'>
          <One />
        </Route>
        <Route path='/Two'>
          <Two />
        </Route>
        <Route path='/Profile'>
          <div className='do'>
            <div className="App">
              <Profile fullname="Ahmed Shembesh" Photo={Photo} alert={oppe} age={29} />
            </div>
          </div>
        </Route>
      </div>
    </div>
  );
}

export default App;
