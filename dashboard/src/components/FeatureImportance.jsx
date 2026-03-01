import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function FeatureImportance() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/feature_importance.json")
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  if (!data) return <div className="mt-10">Loading Feature Importance...</div>;

  return (
    <div className="bg-white p-6 rounded-2xl shadow mt-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        SHAP Feature Importance
      </h2>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="Feature" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Mean_SHAP" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}