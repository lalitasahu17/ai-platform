import React from "react";

type Props = {
  temperature: number;
  setTemperature: (v: number) => void;
  maxTokens: number;
  setMaxTokens: (v: number) => void;
};

const ParametersPanel: React.FC<Props> = ({
  temperature, setTemperature, maxTokens, setMaxTokens
}) => (
  <div className="mb-4 flex gap-4">
    <div>
      <label className="block mb-1 font-semibold">Temperature</label>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={temperature}
        onChange={e => setTemperature(Number(e.target.value))}
        aria-label="Temperature"
      />
      <span className="ml-2">{temperature}</span>
    </div>
    <div>
      <label className="block mb-1 font-semibold">Max Tokens</label>
      <input
        type="number"
        min={1}
        max={2048}
        value={maxTokens}
        onChange={e => setMaxTokens(Number(e.target.value))}
        className="border rounded px-2 py-1 w-20"
        aria-label="Max Tokens"
      />
    </div>
  </div>
);

export default ParametersPanel;