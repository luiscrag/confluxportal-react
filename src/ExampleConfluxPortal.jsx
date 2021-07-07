import React, { useCallback, useState } from "react";
import Button from "./components/Common/Button";
import "./styles/App.css";

const ExampleConfluxPortal = ({ title, text, action }) => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onClickButton = useCallback(async () => {
    setIsLoading(true);
    const response = await action();
    if (response) {
      setResult(response);
      setIsLoading(false);
    }
  }, [action]);

  return (
    <div style={{ margin: "6px 0" }}>
      <h3>{title}</h3>
      <hr />
      <Button isLoading={isLoading} onClick={onClickButton} text={text} />
      {result !== "" && (
        <div className="Result">
          <code>{result}</code>
        </div>
      )}
    </div>
  );
};

export default ExampleConfluxPortal;
