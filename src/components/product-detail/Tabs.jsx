import { useState } from "react";

const Tabs = ({ description, details }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="space-y-4">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
            activeTab === "description"
              ? "border-gray-900 text-gray-900"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("details")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
            activeTab === "details"
              ? "border-gray-900 text-gray-900"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Details
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[100px]">
        {activeTab === "description" && (
          <div className="text-sm text-gray-600 leading-relaxed">
            {description}
          </div>
        )}
        {activeTab === "details" && (
          <div className="text-sm text-gray-600 leading-relaxed">{details}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
