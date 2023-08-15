import aboutImg from "../assets/images/test.png";
import Collapse from "../components/collapse";

function About() {
 return (
    <>
      <div class="img_about">
        <img src={aboutImg} alt="aa" />
      </div>

      <section class="flex-container-about">


        < Collapse />
      </section>
    </>
  );
}

export default About;