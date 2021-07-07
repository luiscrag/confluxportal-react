import { useCallback } from "react";
import ExampleConfluxPortal from "../ExampleConfluxPortal";

const CheckConfluxPortal = () => {
    const action = useCallback(() => {
        if (window.conflux && window.conflux.isConfluxPortal)
            return "ConfluxPortal is installed.";
        else
            return "ConfluxPortal is NOT installed.";
    }, []);
    return <ExampleConfluxPortal title="Check ConfluxPortal"  text="Check" action={action}/>
};

export default CheckConfluxPortal;