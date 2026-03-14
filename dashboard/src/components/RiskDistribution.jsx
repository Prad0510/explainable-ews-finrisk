import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

function RiskDistribution(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("/risk_distribution.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const COLORS = ["#22c55e", "#facc15", "#ef4444"]
    return (
        <div className="bg-white p-6 rounded-x1 shadow mt-8">
            <h2 className="text-xl font-semibold mb-4">
                Portfolio Risk Distribution
            </h2>
            
            <PieChart width={450} height={300}>
                <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label={({percent }) => `${(percent * 100).toFixed(1)}%`}
                >
                    {data.map((entry,index)=>(
                        <Cell key={index} fill={COLORS[index]}/>
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    )
}
export default RiskDistribution