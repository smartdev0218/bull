import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useWeb3React } from '@web3-react/core'
import { ConnectorId, useWalletModal } from '@pantherswap-libs/uikit'
import { injected, walletconnect } from '../../connectors'
import WalletButton from "../WalletConnect/WalletConnect"

const Wrapper = styled.div`
  padding-bottom: 40px;
  height: 100vh;
  .sidebar-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #000;
  }
  .sidebar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .sidebar a {
    text-decoration: none;
    color: var(--text-color);
    font-size: 18px;
    margin: 8px 0;
    padding: 10px 20px;
  }
  .close {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 30px 10px 0px;
    cursor: pointer;
  }
  .wallet_connect {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  }
`;

const Sidebar = (props) => {
  const { menuItem, showSidebar } = props;

  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="close">
          <IoMdClose color="#fff" size={30} onClick={showSidebar} />
        </div>
        <div className="sidebar">
          {menuItem.map((el, i) => (
            !el.ischecked?
            <Link to={el.url} onClick={showSidebar}>
              <NavLink activeClassName="active" to={el.url} key={i}>
                {el.text}
              </NavLink>
            </Link> : <WalletButton />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
