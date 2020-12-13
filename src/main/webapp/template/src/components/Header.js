// ok
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Row } from 'react-bootstrap';
import styled from "styled-components";
import SpanTagStyle from "../pages/constant/SpanTagStyle";
import LoginModal from "./modal/LoginModal";
import JoinModal from "./modal/JoinModal";
import LogoStyle from "../pages/constant/LogoStyle";

const HeaderStyle = styled.div`
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 999;
`;

const SpanStyle = styled.span`
	color : black;
	font-weight : 700;
`;

const Header = (props) => {
  const isToken = props.isToken;
  const setToken = props.setToken;

  const logoutfunction = () => {
    localStorage.removeItem("Authorization");

    // logout fetch 
    fetch(`http://localhost:8000/logout`, {
      method: "GET",
    }).then(res => res.text())
      .then(res => {
        if (res === "ok") {
          setToken();
          alert("로그아웃에 성공하였습니다");
        } else alert("로그아웃 실패");
      });
  }

  const isLogin = (flag) => {
    if (flag) {
      return <Row>
        <NavDropdown title="MY-TAB" id="basic-nav-dropdown">
          <NavDropdown.Item ><Nav.Link><Link to="/Mypage"><SpanTagStyle msg="MYPAGE"></SpanTagStyle></Link></Nav.Link></NavDropdown.Item>
          {/* <NavDropdown.Item ><Nav.Link><Link to="/MyTeam"><SpanTagStyle msg="MYTEAM"></SpanTagStyle></Link></Nav.Link></NavDropdown.Item> */}
          {/* 선 */}
          <NavDropdown.Divider />
          <NavDropdown.Item ><Nav.Link><Link to="/"><SpanStyle onClick={logoutfunction}>Logout</SpanStyle></Link></Nav.Link></NavDropdown.Item>
        </NavDropdown>

        {/* <Nav.Link><Link to="/"><SpanTagStyle func={logoutfunction} msg="Logout"></SpanTagStyle></Link></Nav.Link> */}

        {/* 로그아웃 드롭다운 안으로 이동 */}
        {/* <Nav.Link><Link to="/"><SpanStyle onClick={logoutfunction}>Logout</SpanStyle></Link></Nav.Link> */}
      </Row>
    } else {
      return <Row>
        <Nav.Link><Link to="/Login"><LoginModal setToken={props.setToken}></LoginModal></Link></Nav.Link>
        <Nav.Link><Link to="/Join"><JoinModal></JoinModal></Link></Nav.Link>
      </Row>
    }
  }

  return (
    <HeaderStyle>
      <Navbar bg="light" expand="lg">

        {/* 로고 영역 */}
        <Nav.Link>
          <Link to="/">
            <LogoStyle msg={<Navbar.Brand >
              <img src="/KakaoTalk_20201208_122932091.png"
                width="30"
                height="30"
                alt="React Bootstrap logo" />{''}

                &nbsp;BCM
            </Navbar.Brand>}></LogoStyle>
          </Link>
        </Nav.Link>

        {/* 로그인 여부에 따른 메뉴 영역*/}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {isLogin(isToken)}
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </HeaderStyle>
    
  )
};

export default Header;

