import { useCallback } from "react";
import ExampleConfluxPortal from "../ExampleConfluxPortal";

const GetGlobalState = () => {
    const action = useCallback(async() => {
        const response = await window.conflux._state;
        return JSON.stringify(response, null, ' ');
    }, []);
    return <ExampleConfluxPortal title="Get Global State" text="Get State" action={action} />
};

export default GetGlobalState;

