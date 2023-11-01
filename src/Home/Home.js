import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-2">
        <h1></h1>
        <div className="splide">
          <Splide options={{ perPage: 4, gap: "1rem", type: "slide" }}>
            <SplideSlide style={{ marginRight: "400px" }}>
              <div
                className="card"
                style={{ width: "700px", height: "400px", margin: "20px" }}
              >
                <img
                  className="card-img-top shadow w-100"
                  src="https://media.istockphoto.com/id/1347632685/tr/foto%C4%9Fraf/beautiful-caucasian-female-is-using-smartphone-with-clothing-online-web-store-to-choose.jpg?s=612x612&w=0&k=20&c=oDCwSM9Nrve3gzahyAbz8IY5thP_ukVS8hn8yii2euE="
                  alt=""
                  style={{ width: "500px", height: "500px" }}
                />
              </div>
            </SplideSlide>

            <SplideSlide>
              <div
                className="card"
                style={{ width: "500px", height: "400px", margin: "20px" }}
              >
                <img
                  className="card-img-top shadow"
                  src="https://www.kozmoslisesi.com/wp-content/uploads/2020/08/e-ticaret-nedir.jpg"
                  alt=""
                  style={{ width: "500px", height: "500px" }}
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                className="card"
                style={{ width: "500px", height: "400px", margin: "20px" }}
              >
                <img
                  className="card-img-top shadow"
                  src="https://www.kozmoslisesi.com/wp-content/uploads/2020/08/e-ticaret-nedir.jpg"
                  alt=""
                  style={{ width: "500px", height: "500px" }}
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <p>Welcome to our website</p>
    </div>
  );
};

export default Home;
