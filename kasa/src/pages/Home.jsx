import Card from "../components/card";
import homeBannerImg from "../assets/images/homeBannerImg.png"; 
import { useState, useEffect } from "react";

function Home() {
  
  const [dataList, setdataList] = useState([]);

  useEffect(() => {
    fetch("../../data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setdataList(data);
      });
  }, []);

  return (
    <>
      <div className="img_display">
        <img src={homeBannerImg} alt="aa" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      {dataList.length !== 0 && <Card dataList={dataList} />}
    </>
  );
}

export default Home;
