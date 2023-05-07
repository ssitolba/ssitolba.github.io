import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import SocialLinks from './components/social';

export default function App() {
  return (
<body className="text-white bg-black font-bold">
<NavBar></NavBar>
<Home></Home>
<About></About>
<Portfolio></Portfolio>
<Experience></Experience>
<Contact></Contact>  

<SocialLinks></SocialLinks>
</body>

  )
  }