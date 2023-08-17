import aboutImg from "../assets/images/test.png";
import Collapse from "../components/collapse";
import { AboutList } from "../data/about"

function About() {

 
 return (
    <>
      <div className="img_about">
        <img src={aboutImg} alt="aa" />
      </div>

      <section className="flex-container-about">
      {
        AboutList.map((element,i) => 
          < Collapse key={i} title={element.title} content={element.content}/>
        )
      }
        
      </section>
    </>
  );
}

export default About;