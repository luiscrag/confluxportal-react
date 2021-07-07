import React from "react";
import { useCallback, useState, useContext } from "react";
import ExampleConfluxPortal from "../ExampleConfluxPortal";
import { AddressContext } from "../context/AddressContext";
import Input from "../components/Common/Input";

const SendCFX = () => {
  const [to, setTo] = useState("")
  const { userAddress } = useContext(AddressContext);
  const action = useCallback(async () => {
    
    const params = [
      {
        from: userAddress,
        to,
        gas: "0x76c0", // 30400
        gasPrice: "0x9184e72a000", // 10000000000000
        value: "0xDE0B6B3A7640", // 2441406250
        data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
      },
    ];
    try {
      const response = await window.conflux.send("cfx_sendTransaction", params);
      return JSON.stringify(response);
    } catch (error) {
      console.error(error);
      return JSON.stringify(error);
    }
  }, [to, userAddress]);
  return (
    <>
      <ExampleConfluxPortal
        title="Send $CFX"
        text="Send"
        action={action}
      />
      <p>Your address: { userAddress }</p>
      <span>Send To:</span>
      <Input value={to} placeholder="Conflux Address" onChange={(e) => setTo(e.target.value)} />
    </>
  );
};

export default SendCFX;
