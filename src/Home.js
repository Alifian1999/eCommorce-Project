import Navbar from './Navbar';
import Page1 from './Home-page-1';
import Page2 from './home-page-2';
import FooterHome from './Footer-home';


export default function Home() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Page1></Page1>
    <Page2></Page2>
    <FooterHome></FooterHome>
    </div>
  );
}