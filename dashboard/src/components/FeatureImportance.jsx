import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function FeatureImportance() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/feature_importance.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <div className="mt-10">Loading Feature Importance...</div>;

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Model Explainability (SHAP Feature Importance)
      </h2>
        
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="Feature" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Mean_SHAP" />
          </BarChart>
      </div>
  );
}
export default FeatureImportance