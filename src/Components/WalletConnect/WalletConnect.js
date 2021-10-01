import React from 'react';
import { useWeb3React } from '@web3-react/core'
import { ConnectorId, useWalletModal } from '@pantherswap-libs/uikit'
import { injected, bsc, walletconnect } from '../../connectors'

const WalletConnect = () => {
    const { account, activate, deactivate } = useWeb3React()

    const handleLogin = (connectorId : ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }
        else if(connectorId === 'bsc') {
            return activate(bsc)
        }
        return activate(injected)
    }

    const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account)

    const { onPresentAccountModal } = useWalletModal(handleLogin, deactivate, account)
    
    return(
        ! account ? <button type = "button" className = "wallet_button" onClick = {onPresentConnectModal}> Connect </button>
                  : <button type = "button" className = "wallet_button" onClick = { onPresentAccountModal }>{ account }</button>
    )
}

export default WalletConnect