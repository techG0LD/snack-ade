
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navigation from './components/Header';
import Home from './components/Pages/Home';
import Error404 from './components/Pages/Error404';
import AboutUs from './components/Pages/AboutUs';
import Footer from './components/Footer';
import CurrentUserProvider from './contexts/CurrentUser'
import Product from './components/Pages/Product';
import AddSnack from './components/Pages/AddSnack';
import UpdateSnack from './components/Pages/Update';
import LoginForm from './components/Pages/Login';
import SignUpForm from './components/Pages/SignUp';
import Profile from './components/Pages/Profile';
import UpdateProfile from './components/Pages/UpdateProfile';
import SnacksIndex from './components/Pages/SnacksIndex';

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
      <Router>
        <Navigation/>
        
        <main>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>  
            <Route exact path = '/catalog' element={<SnacksIndex />}/>
            <Route exact path = '/profile/:user_id' element={<Profile />}/>
            <Route exact path='/profile/:user_id/update' element={<UpdateProfile />}></Route>
            <Route exact path='/about' element={<AboutUs />}></Route>
            <Route exact path='/addSnack' element={<AddSnack />}></Route>
            <Route exact path='/login' element={<LoginForm />}></Route>
            <Route exact path='/sign-up' element={<SignUpForm />}></Route>
            <Route exact path='/snacks/:name' element={<Product />}></Route>
            <Route exact path='/snacks/:name/update' element={<UpdateSnack />}></Route>
            <Route path= '/:anything' element={<Error404/>} /> 
            <Route path= '/snacks/:anysnack' element={<Error404/>} />
          </Routes>
         
        </main>
         <Footer/>
      </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
