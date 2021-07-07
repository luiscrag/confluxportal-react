import "./styles/App.css";

/** Components */
import CheckConfluxPortal from "./components/CheckConfluxPortal";
import GetAccounts from "./components/GetAccounts";
import GetNetworkVersion from "./components/GetNetworkVersion";
import GetGlobalState from "./components/GetGlobalState";
import SendCFX from "./components/SendCFX";

import { AddressContextProvider } from "./context/AddressContext";

function App() {
  return (
    <AddressContextProvider>
      <div className="Container">
        <GetNetworkVersion />
        <CheckConfluxPortal />
        <GetAccounts />
        <GetGlobalState />
        <SendCFX />
      </div>
    </AddressContextProvider>
  );
}

export default App;
