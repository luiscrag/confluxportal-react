import { useCallback, useContext } from "react";
import ExampleConfluxPortal from "../ExampleConfluxPortal";
import { AddressContext } from "../context/AddressContext";

const GetAccount = () => {
  const { setUserAddress } = useContext(AddressContext);
  const action = useCallback(async () => {
    try {
      const accounts = await window.conflux.send("cfx_requestAccounts");
      setUserAddress(accounts[0])
      return JSON.stringify(accounts);
    } catch (error) {
      if (error.code === 4001) {
        // EIP 1193 userRejectedRequest error
        return "Please connect to ConfluxPortal."
      } else {
        console.log(error);
        return error;
      }
    }
  }, [setUserAddress]);

  return (
    <ExampleConfluxPortal
      title="Get ConfluxPortal Accounts"
      text="Get Accounts"
      action={action}
    />
  );
};

export default GetAccount;
