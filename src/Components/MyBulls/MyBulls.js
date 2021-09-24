import React from 'react';
import { useWeb3React } from '@web3-react/core'

const MyBulls = () => {
    const { account } = useWeb3React()
    return(
        <div id = "mybulls" style = {{ padding: "120px"}}>
            <h2 style = {{
                color: "#fff",
                fontSize: "18px",
                fontFamily: "Roboto",
            }}>
                { account ? "My Collection Bulls" : "You need to connect wallet to see your collection of bulls" }
            </h2>
        </div>
    )
}

export default MyBulls;