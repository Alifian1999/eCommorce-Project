import Navbar from './components/Navbar';
import Page1 from './components/Home-page-1';
import Page2 from './components/home-page-2';
import FooterHome from './components/Footer-home';


export default function Home() {
  let isLogin= false
  return (

    <div className="App">
    <Navbar login={isLogin}/>
    <Page1></Page1>
    <Page2></Page2>
    <FooterHome></FooterHome>
    </div>
  );
}