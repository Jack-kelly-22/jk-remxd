import { ethers } from 'ethers';
import { useState,useRef } from 'react';

import { VncScreen } from 'react-vnc';


export default function IRL() {
    const connectToMetamask = async () => {
        if (!walletConnected) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        const balance = await provider.getBalance(accounts[0]);
        const balanceInEther = ethers.utils.formatEther(balance);
        const block = await provider.getBlockNumber();
        setWalletConnected(true);
        // setProvider(provider);
        setWalletAddress(accounts[0]);
        // getPool(provider).then(data => {
        //   console.log("pool data",data);
        //   setPoolData(data);
          
        // });
        // setWalletBalance(balanceInEther);
        }
      }
    const [walletConnected, setWalletConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
  return (
    <div>
      <h1 className="py-4">Jk</h1>

      {walletConnected ? (
        <div>
            <h2>Wallet Connected</h2>
            <h3>Balance: {walletAddress}</h3>
        </div>) : ( <div>
            <h2>Wallet Not Connected</h2>
            <button onClick={connectToMetamask}>Connect with Metamask</button>
        </div>)}
        {/* <VncScreen
      url='ws://192.168.1.68:5900'
      scaleViewport
      background="#000000"
      style={{
        width: '75vw',
        height: '75vh',
      }}
      ref={vncScreenRef}
    /> */}
      <iframe src="http://192.168.1.68:8080/view-stream.html" width='600px' height="450px" />
      <div className="mockup-code">
        <pre data-prefix="$"><code> Welcome to </code></pre> 
        {/* <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>  */}
        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>
    </div>
  );
}
