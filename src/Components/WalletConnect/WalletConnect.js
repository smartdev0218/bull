import React from 'react';
import { useWeb3React } from '@web3-react/core'
import Navbar from '../Navbar/Navbar';
import { ConnectorId, useWalletModal } from '@pantherswap-libs/uikit'
import { injected, walletconnect } from '../../connectors'

const WalletConnect = () => {
    const { account, activate, deactivate } = useWeb3React()

    const handleLogin = (connectorId : ConnectorId) => {
        console.log("connectorId=>", connectorId)
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }
        return activate(injected)
    }

    const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate)
    
    return(
        <Navbar shootProps = {onPresentConnectModal} />
    )
}

export default WalletConnect