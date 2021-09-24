import React from 'react';
import { useWeb3React } from '@web3-react/core'
import { ConnectorId, useWalletModal } from '@pantherswap-libs/uikit'
import { injected, bsc, walletconnect } from '../../connectors'
import Navbar from "../Navbar/Navbar"

const WalletConnect = () => {
    const { account, activate, deactivate } = useWeb3React()

    const handleLogin = (connectorId : ConnectorId) => {
        console.log("account=>", account)
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }
        else if(connectorId === 'bsc') {
            return activate(bsc)
        }
        return activate(injected)
    }

    const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate)
    
    return(
        <Navbar walletProps = {onPresentConnectModal} />
    )
}

export default WalletConnect