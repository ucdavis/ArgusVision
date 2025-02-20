"use client";
import { secureEndpointAction } from "@/lib/actions";
import React, { useState } from "react";

const BackendClient: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const handleClick = async () => {
    try {
      const data = await secureEndpointAction();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult(`Error: ${error}`);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Call Secure Endpoint</button>
      <pre>{result}</pre>
    </div>
  );
};

export default BackendClient;
