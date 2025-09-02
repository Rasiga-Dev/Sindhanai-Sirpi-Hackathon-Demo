
import React, { useState } from 'react';

interface Props {
  initialData: any;
  onNext: (data: any) => void;
  onBack: () => void;
}

const ProjectDetailsForm: React.FC<Props> = ({ initialData, onNext, onBack }) => {
  const [data, setData] = useState({
    teamSize: initialData?.teamSize || 3,
    ideaTitle: initialData?.ideaTitle || '',
    ideaDescription: initialData?.ideaDescription || '',
    problemStatement: initialData?.problemStatement || '',
    solution: initialData?.solution || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Idea Title</label>
      <input
        type="text"
        placeholder="Idea Title"
        value={data.ideaTitle}
        onChange={(e) => setData({ ...data, ideaTitle: e.target.value })}
        required
        className="border p-2 mb-2 w-full"
      />

      <label>Idea Description <span className="text-gray-500 text-xs">(Max 100 characters)</span></label>
      <textarea
        placeholder="Idea Description"
        value={data.ideaDescription}
        onChange={(e) => setData({ ...data, ideaDescription: e.target.value })}
        maxLength={100}
        required
        className="border p-2 mb-2 w-full"
      />

      <label>Problem Statement <span className="text-gray-500 text-xs">(Max 100 characters)</span></label>
      <textarea
        placeholder="What problem are you solving?"
        value={data.problemStatement}
        onChange={(e) => setData({ ...data, problemStatement: e.target.value })}
        maxLength={100}
        required
        className="border p-2 mb-2 w-full"
      />

      <label>Proposed Solution <span className="text-gray-500 text-xs">(Max 100 characters)</span></label>
      <textarea
        placeholder="Describe your solution"
        value={data.solution}
        onChange={(e) => setData({ ...data, solution: e.target.value })}
        maxLength={100}
        required
        className="border p-2 mb-2 w-full"
      />

      <label>Team Members</label>
      <input
        type="number"
        placeholder="Team Size"
        value={data.teamSize}
        onChange={(e) => setData({ ...data, teamSize: parseInt(e.target.value) })}
        required
        className="border p-2 mb-2 w-full"
      />

      {/* Buttons */}
      <div className="flex justify-between mt-4">


        <button
          type="submit"
          className="bg-red-800 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ProjectDetailsForm;
