import { useEffect, useState} from "react"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

function RiskTimeline(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("/risk_timeline.json")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    return (
        <div className="bg-white p-6 rounded-x1 shadow mt-8">
            <h2 className="text-xl font-semibold mb-4">
                Early Warning Risk Timeline
            </h2>
            <div className="flex justify-center">
                <LineChart width={550} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone"
                    dataKey="default" 
                    stroke="#ef4444" 
                    strokeWidth={3} 
                    name="Default Customers"/>
                    <Line 
                    type="monotone" 
                    dataKey="non_default"
                    stroke="#3b82f6" 
                    strokeWidth={3} 
                    name="Non-Default Customers"/>
                </LineChart>
            </div>
        </div>
    )
}
export default RiskTimeline