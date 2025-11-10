import React from "react";

const ControlsTable = ({ controls }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border p-2">S.No</th>
            <th className="border p-2">ID</th>
            <th className="border p-2">Owner</th>
            <th className="border p-2">Domain</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Priority</th>
          </tr>
        </thead>
        <tbody>
          {controls.map((c, index) => (
            <tr key={c.id || index} className="hover:bg-gray-50">
              <td className="border p-2">{c.sno}</td>
              <td className="border p-2">{c.id}</td>
              <td className="border p-2">{c.owner}</td>
              <td className="border p-2">{c.control_domain}</td>
              <td className="border p-2">{c.status}</td>
              <td className="border p-2">{c.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ControlsTable;
