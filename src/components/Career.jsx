import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// 이미지
import arrow from "../assets/img/icons/ic_arrow.svg";
import hanchon from "../assets/img/career/hanchon.svg";
import kimgane from "../assets/img/career/kimgane.svg";
import cheongnyun from "../assets/img/career/cheongnyun.svg";
import dailybeer from "../assets/img/career/dailybeer.svg";
import yeonan from "../assets/img/career/yeonan.svg";
import sgfco from "../assets/img/career/sgfco.svg";

const Career = () => {
  return (
    <div className="career section">
      <div id="career" className="space"></div>
      <div className="section__inner">
        <div className="section__area career__area">
          <h4 className="title manrope">career</h4>
          {/* 디윅스 이력 */}
          <div className="career__content">
            <div className="text__title__area mt__0">
              <p className="career__title manrope">
                DWEAX <span>(프론트엔드 2021.03 - 2023.07)</span>
              </p>
              <a
                href="https://www.dweax.co.kr/"
                target="blank"
                className="arrow__link nanum"
              >
                바로가기
                <img src={arrow} alt="화살표" />
              </a>
            </div>
            <div className="text__area nanum">
              <ul>
                <li>대규모 언어 모델(LLM) 기반 반응형 챗봇 POC 개발</li>
                <li>
                  한국지능정보사회진흥원(NIA) 포함 외부 업체와 협업하여 공공기관
                  사업 프로젝트인 "기관공유데이터 관리시스템" 개발
                </li>
                <li>
                  React, Next.js, Styled Components, HTML, SCSS, Ant Design,
                  Tailwind CSS, zustand
                </li>
              </ul>
            </div>
          </div>
          {/* 더커머스 이력 */}
          <div className="career__content">
            <div className="text__title__area">
              <p className="career__title manrope">
                The Commerce <span>(프론트엔드 2024.01 - 2024.10)</span>
              </p>
              <a
                href="https://onesell.co.kr/"
                target="blank"
                className="arrow__link nanum"
              >
                바로가기
                <img src={arrow} alt="화살표" />
              </a>
            </div>
            <div className="text__area nanum">
              <p className="text__title">
                원셀 서비스 개발 (판매자들을 위한 쇼핑몰 연동 및 상품
                등록/수정/전송, 배송/주문 관리 서비스 제공)
              </p>
              <ul>
                <li>서비스 반응형화 작업</li>
                <li>
                  위탁몰 연동 및 판매 신규 기능 개발 (상품 수집 - 주문 관리)
                </li>
                <li>Vue.js (2 & 3), HTML, SCSS</li>
              </ul>
            </div>
          </div>
          {/* 뷰3 이력 */}
          <div className="career__content">
            <div className="text__title__area">
              <p className="career__title manrope">
                View3 <span>(웹 퍼블리셔 2017.09 - 2019.11)</span>
              </p>
              <a
                href="https://view3.net/"
                target="blank"
                className="arrow__link nanum"
              >
                바로가기
                <img src={arrow} alt="화살표" />
              </a>
            </div>

            <div>
              <div className="text__area nanum">
                <p className="text__title">
                  여러 프랜차이즈 PC 및 모바일 / 반응형 홈페이지 제작 (한촌,
                  김가네, 청년다방, 생활맥주, 연안식당, 세광그린푸드 등 담당)
                </p>
                <ul>
                  <li>PC / 모바일 버전 제작 또는 반응형 제작</li>
                  <li>HTML, CSS, JavaScript, JQuery</li>
                  <li>웹 표준 준수, 크로스 브라우징</li>
                </ul>
              </div>
              {/* 스와이퍼 영역 */}
              <div className="swiper__area">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={18}
                  navigation
                  breakpoints={{
                    500: {
                      spaceBetween: 24,
                      slidesPerView: 2.5,
                    },
                    768: {
                      spaceBetween: 32,
                      slidesPerView: 3.5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <img src={hanchon} alt="한촌" width="100%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={kimgane} alt="김가네" width="100%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={cheongnyun} alt="청년다방" width="100%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={dailybeer} alt="생활맥주" width="100%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={yeonan} alt="연안식당" width="100%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={sgfco} alt="세광그린푸드" width="100%" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
