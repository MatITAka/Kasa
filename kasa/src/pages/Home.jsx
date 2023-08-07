import Card from "../components/card";
import homeBannerImg from "../assets/images/homeBannerImg.png"; 
import Data from '../data/data.json';


function Home() {
  return (
      <>

      <div className="img_display">
      <img src ={homeBannerImg} alt ="aa"/>
      <h1>Chez vous, partout et ailleurs</h1>
      </div>


      
      
      < Card data ={Data}/>

      </>
    );
  }
  
  export default Home;