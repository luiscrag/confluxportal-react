import { useCallback, useState , useEffect} from "react";
import Badge from "../components/Common/Badge";

const GetNetworkVersion = () => {
    const [networkVersion, setNetworkVersion] = useState("");

    useEffect(() => {
        window.conflux.on("networkChanged", function () {
            console.log("Network has changed")
            getNetworkVersion();
        });
        getNetworkVersion();
    }, []);

    async function getNetworkVersion() {
        console.log("Calling getNetwork")
        const version = await window.conflux.networkVersion;
        setNetworkVersion(version);
    }

    const getNetworkName = useCallback(() => {
        switch(networkVersion) {
            case "1":
                return "Conflux Test Network";
            case "1029":
                return "Conflux Tethys";
            default:
                return "Unkown Network"
        }
    }, [networkVersion]);

    const getColor = useCallback(() => {
        switch(networkVersion) {
            case "1":
                return "#FFC75B";
            case "1029":
                return "#30FFC1";
            default:
                return "#FF6C6C"
        }
    }, [networkVersion]);

    return <Badge color={getColor()} text={getNetworkName()} />; 
};

export default GetNetworkVersion;
