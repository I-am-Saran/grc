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
        setError("Failed to fetch controls. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_BASE_URL]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Security Controls Dashboard</h1>
      <ControlsTable controls={controls} />
    </div>
  );
};

export default ControlsPage;
