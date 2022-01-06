import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0xa98E570a68b511e465ddCB870e0F40AC99c07E46";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
