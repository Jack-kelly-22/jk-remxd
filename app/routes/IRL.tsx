import { ethers } from 'ethers';
import { useState,useRef } from 'react';

import { VncScreen } from 'react-vnc';

const BASE_URL = "47.45.119.117";

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
            <h2 className='text-green text-2xl text left'>Wallet Connected</h2>
            <p>Your hosts: </p>
            {/* <h3>Balance: {walletAddress}</h3> */}
        </div>) : ( <div>
            <h2>Wallet Not Connected</h2>
            <button  className='bg-blue rounded-lg px-2 text-xl py-1' onClick={connectToMetamask}>Connect with Metamask</button>
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
    {walletConnected ? (
      <iframe title="host" src={`http://${BASE_URL}:8080/view-stream.html`} width='1000px' height="800px" />
    ) : (
      "no Hosts available")}
      <div className="mockup-code">
        <pre data-prefix="$"><code> Welcome to </code></pre> 
        {/* <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>  */}
        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>
    </div>
  );
}
