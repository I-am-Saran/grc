import React, { useEffect, useState } from "react";
import axios from "axios";
import ControlsTable from "../components/ControlsTable";

const ControlsPage = () => {
  const [controls, setControls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/controls`);
        setControls(res.data.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch controls. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_BASE_URL]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6">
      <div className="max-w-[95vw] mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center drop-shadow-sm">
          Security Controls Dashboard
        </h1>

        {loading && (
          <p className="text-blue-700 text-center font-medium">Loading...</p>
        )}
        {error && <p className="text-red-600 text-center">{error}</p>}
        {!loading && !error && <ControlsTable controls={controls} />}
      </div>
    </div>
  );
};

export default ControlsPage;
