import React from "react";

type Model = { id: string; name: string };
type Props = {
  models: Model[];
  selected: string;
  onChange: (id: string) => void;
};

const ModelSelector: React.FC<Props> = ({ models, selected, onChange }) => (
  <div className="mb-4">
    <label className="block mb-1 font-semibold">Model</label>
    <select
      className="border rounded px-2 py-1 w-full"
      value={selected}
      onChange={e => onChange(e.target.value)}
      aria-label="Select Model"
    >
      {models.map(m => (
        <option key={m.id} value={m.id}>{m.name}</option>
      ))}
    </select>
  </div>
);

export default ModelSelector;