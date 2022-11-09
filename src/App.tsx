import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import "./style/css.scss";
import { blocks } from "./blocks";

function App() {
  let [block, setBlock] = useState();
  const [activePage, setActivePage] = useState(1);
  const prevPage = () => {
    if (activePage !== 1) setActivePage(activePage - 1);
    else setActivePage(6);
  };
  const nextPage = () => {
    if (activePage !== 6) setActivePage(activePage + 1);
    else setActivePage(1);
  };
  useEffect(() => {
    let b = blocks.find((e) => e.id === activePage);
    setBlock(Object(b));
  }, [activePage]);

  let facts: any[] = [];
  if (block) {
    facts = block["facts"];
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className="heading">Исторические даты</h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {facts?.map((e) => (
            <SwiperSlide key={e.year} className="swiper_slider">
              <h5>{e.year}</h5>
              <p>{e.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="line1"></div>
        <div className="line2"></div>
        <div className="period">
          <div className="round">
            <span className="from">{block?.["from"]}</span>
            <span className="to">{block?.["to"]}</span>
            <div className="centerLine line0">
              <div className="bounce b-left"></div>
              <div className="bounce b-right"></div>
            </div>
            <div className="centerLine line60">
              <div className="bounce b-left"></div>
              <div className="bounce b-right"></div>
            </div>
            <div className="centerLine line120">
              <div className="bounce b-left"></div>
              <div className="bounce b-right"></div>
            </div>
          </div>
        </div>
        <div className="active_page">
          <span className="page">0{activePage}/06</span>
          <div className="btns">
            <div className="btn btn_left" onClick={() => prevPage()}>
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="btn btn_right" onClick={() => nextPage()}>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
