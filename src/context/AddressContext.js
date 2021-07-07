import { createContext, useState } from "react";

const AddressContext = createContext({
  userAddress: null,
  setUserAddress: () => null,
});

const AddressContextProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  return (
    <AddressContext.Provider
      value={{ userAddress: address, setUserAddress: setAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export { AddressContext, AddressContextProvider };
