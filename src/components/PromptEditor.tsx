import React from "react";

type Template = { id: number; name: string; prompt: string };
type Props = {
  templates: Template[];
  value: string;
  onChange: (v: string) => void;
  onTemplateSelect: (prompt: string) => void;
};

const PromptEditor: React.FC<Props> = ({ templates, value, onChange, onTemplateSelect }) => (
  <div className="mb-4">
    <label className="block mb-1 font-semibold">Prompt</label>
    <textarea
      className="border rounded w-full p-2"
      rows={4}
      value={value}
      onChange={e => onChange(e.target.value)}
      aria-label="Prompt Editor"
    />
    <div className="flex gap-2 mt-2">
      {templates.map(t => (
        <button
          key={t.id}
          className="bg-gray-200 px-2 py-1 rounded text-sm"
          onClick={() => onTemplateSelect(t.prompt)}
        >
          {t.name}
        </button>
      ))}
    </div>
  </div>
);

export default PromptEditor;