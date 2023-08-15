import "../assets/css/card.scss";
import { Link } from 'react-router-dom'

function Card({dataList}) {
  return (
    <>
      <section className="hebergements">
        <div className="gallery">
        
          {dataList.map((logement,i) => (
            <article className="card" key={i}>
               <Link to={'/hebergements/' + logement.id}>                
                <img src ={logement.cover} alt="cover img"/>
                <p>{logement.title}</p>

              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Card;