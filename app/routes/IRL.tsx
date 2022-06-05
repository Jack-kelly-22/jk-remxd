import { ethers } from 'ethers';
import { useState,useRef } from 'react';



import { VncScreen } from 'react-vnc';

const OptoABI = [
  // "function balanceOf(address) view returns (uint256)",
  "function tokenURI(uint256) view returns (string)",
]

const OPTO_ADDRESS = "0xd38a0D565F1b981f2736528cd071239432c2fdc1";

const BASE_URL = "47.45.119.117";

const getOptos = async (provider) => {
  const optoC = new ethers.Contract(OPTO_ADDRESS, OptoABI, provider);
  // const optos = await optoC.balanceOf(provider.address);
  const baseURI = await optoC.tokenURI(0);
  console.log(optos);
  return optos;
  // const 
}

export default function IRL() {
    const connectToMetamask = async () => {
        if (!walletConnected) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        const balance = await provider.getBalance(accounts[0]);
        // const optos = await getOptos(provider);
        const balanceInEther = ethers.utils.formatEther(balance);
        const block = await provider.getBlockNumber();
        setWalletConnected(true);
        // setOptos(optos);
        setWalletAddress(accounts[0]);
       
        }
      }
    const [optos, setOptos] = useState(null);
    const [walletConnected, setWalletConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
  return (
    <div className='flex flex-col items-center p-3 m-3'>
      <div className="mockup-code">
        <pre data-prefix="$"><code> Welcome to aptosXoptos</code></pre> 
        <pre data-prefix=">>>" data-suffix=">>>"><code>Your opto hosts</code>  </pre>
        
        {/* <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>  */}
        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>

      {walletConnected ? (
        <div>
            <h2 className='text-green text-2xl text left m-2'>Wallet Connected</h2>
            <p>Your hosts: {optos}</p>
            {/* <h3>Balance: {walletAddress}</h3> */}
        </div>) : ( <div className='p-3 m-2'>
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
      <iframe title="host" src={`http://opto0:6082/vnc.html?host=opto0&port=6082`} width='1000px' height="800px" />
    ) : (
      "no Hosts available")}
      
    </div>
  );
}