"use client";
import React, { useState } from "react";

const BackendClient: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/secure-endpoint", {
        credentials: "include",
      });
      const data = await response.json();
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
