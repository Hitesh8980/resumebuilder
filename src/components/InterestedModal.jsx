import React, { useState } from "react";

const InterestedTopicModal = ({ isOpen, onClose }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const topics = ["Web Development", "Data Science", "Machine Learning", "Blockchain", "Cloud Computing", "Artificial Intelligence", "Cybersecurity"];

  const handleTopicChange = (e) => {
    const topic = e.target.value;
    setSelectedTopics((prevTopics) =>
      prevTopics.includes(topic)
        ? prevTopics.filter((item) => item !== topic)
        : [...prevTopics, topic]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can save or process the selected topics here (dispatch or update state)
    onClose();  
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Select Interested Topics</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {/* Box displaying selected topics */}
              <div className="border border-gray-300 p-2 rounded-md flex flex-wrap gap-2 w-full max-h-20 overflow-auto">
                {selectedTopics.map((topic, index) => (
                  <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Available Topics</h3>
              {/* List of checkboxes for topics */}
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={topic}
                    value={topic}
                    checked={selectedTopics.includes(topic)}
                    onChange={handleTopicChange}
                    className="mr-2"
                  />
                  <label htmlFor={topic} className="text-gray-700">{topic}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterestedTopicModal;
