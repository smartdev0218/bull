import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useWeb3React } from '@web3-react/core'
import { ConnectorId, useWalletModal } from '@pantherswap-libs/uikit'
import { injected, walletconnect } from '../../connectors'

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
`;

const Sidebar = (props) => {
  const { menuItem, showSidebar } = props;

  const { account, activate, deactivate } = useWeb3React()

    const handleLogin = (connectorId : ConnectorId) => {
        console.log("connectorId=>", connectorId)
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }
        return activate(injected)
    }

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate)

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
            </Link> : <a href = "#" onClick = {onPresentConnectModal}>Connect</a>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
