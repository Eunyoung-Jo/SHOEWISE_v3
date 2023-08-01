import React from "react";
import { useHistory } from "react-router-dom";
import homeShoesImage from "./home_shoes.png";
import logo from "./logo.png";

const LoginPage = () => {
  const history = useHistory();

  const navigateToLoginPage = () => {
    history.push("/login");
  };

  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url:
            "file:///C:/Users/23ail/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/SHOEWISE/login.html",
          success: function (response) {
            console.log(response);
          },
          fail: function (error) {
            console.log(error);
          }
        });
      },
      fail: function (error) {
        console.log(error);
      }
    });
  };

  const kakaoLogout = () => {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        url:
          "file:///C:/Users/23ail/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/SHOEWISE/start.html",
        success: function (response) {
          console.log(response);
        },
        fail: function (error) {
          console.log(error);
        }
      });
      Kakao.Auth.setAccessToken(undefined);
    }
  };

  const naverLogin = () => {
    // 네이버 로그인 기능 구현
  };

  const naverLogout = () => {
    // 네이버 로그아웃 기능 구현
  };

  return (
    <div>
      <header>
        <img src={logo} alt="SHOEWISE 로고" className="logo" />
      </header>
      <ul>
        <li>
          <a href="javascript:void(0)" onClick={kakaoLogin}>
            <span>카카오 로그인</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" onClick={kakaoLogout}>
            <span>카카오 로그아웃</span>
          </a>
        </li>
      </ul>
      {/* 카카오 스크립트 */}
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    </div>
  );
};

export default LoginPage;
