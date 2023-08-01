import React from "react";
import { useHistory } from "react-router-dom";
import homeShoesImage from "./home_shoes.png";
import logo from "./logo.png";

const StartPage = () => {
  const history = useHistory();

  const navigateToLoginPage = () => {
    history.push("/login");
  };

  return (
    <div
      className="body"
      style={{
        backgroundImage: `url(${homeShoesImage})`,
        backgroundSize: "cover",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0"
      }}
    >
      <header
        style={{
          position: "relative",
          backgroundColor: "transparent",
          padding: "20px",
          zIndex: "9999",
          textAlign: "center"
        }}
      >
        <img
          src={logo}
          alt="SHOEWISE 로고"
          className="logo"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "100px",
            height: "100px",
            margin: "5px"
          }}
        />
      </header>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1 style={{ fontSize: "100px", fontWeight: "bold" }}>SHOEWISE</h1>
        <p style={{ fontSize: "50px", fontWeight: "bold" }}>
          슈와이즈로 리뷰를 확인하고, 발에 딱 맞는 신발을 찾아보세요
        </p>
        <button
          onClick={navigateToLoginPage}
          className="button"
          style={{
            padding: "20px 40px",
            backgroundColor: "white",
            fontSize: "30px",
            fontWeight: "bold",
            borderRadius: "50px"
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
};

export default StartPage;
