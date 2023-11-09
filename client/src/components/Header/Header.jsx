import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate} from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./header.css";
import {  AuthContext } from "../../context/AuthContext";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const  {user, dispatch} = useContext(AuthContext);

  const logout = () =>{
    dispatch({type:"LOGOUT"});
    navigate("/");
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky__header' : ''}`}>
    <header className="header">
   <Container>
     <Row>
       <div className="nav__wrapper d-flex align-items-center justify-content-between">

     {/*================== logo ========================*/}
      <div className="logo">
        <img src={logo} alt="" />
      </div>
     {/*================== logo end ========================*/}

     {/*================== Menu start ========================*/}
     <div className="navigation">
      <ul className="menu d-flex align-items-center gap-5">
        {nav__links.map((item,index) => ( 
            <li className="nav__item" key={index}>
              <NavLink 
              to= {item.path}
              className={navClass=>
              navClass.isActive? 'active__link':""
              }
              >
                {item.display}
                </NavLink>
            </li>
          ))}
        </ul>
     </div> 
     {/*================== Menu end ========================*/}

     <div className="nav__right d-flex align-items-center gap-4 ">
      <div className="nav__btns d-flex align-items-center gap-4 ">
        { user? (
        <> 
          <h5 className="mb-0">{user.username}</h5>
          <Button className="btn btn-dark" onClick={logout}>Logout</Button>
          </> 
        ): (
        <>
          <Button className="btn secondary__btn">
          <Link to='/login'>Login</Link>
          </Button>
           <Button className="btn primary__btn">
            <Link to='/register'>Register</Link>
            </Button>
          </>
        )}
    </div>
    <span className="mobile__menu">
      <i class="ri-menu-line"></i>
      </span>
     </div>
       </div>
     </Row>
   </Container>
    </header>
    </header>
  );
};

export default Header;