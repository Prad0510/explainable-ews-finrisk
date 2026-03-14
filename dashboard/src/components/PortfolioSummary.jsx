import { useEffect, useState} from "react"

function PortfolioSummary(){
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch("/portfolio_summary.json")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])


if(!data){
    return <div>Loading...</div>
}

const highRiskThreshold = 0.2
const showAlert = data.highRiskRation > highRiskThreshold

{showAlert && (

  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">

    ⚠️ Risk Alert: High proportion of customers classified as high-risk.
    
  </div>

)}

return(
    <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-x1 shadow">
            <h2 classname="text-gray-500">Average Risk</h2>
            <p className="text-2xl font-bold">{data.avgRisk.toFixed(3)}</p>
        </div>

        <div className="bg-white p-6 rounded-x1 shadow">
            <h2 classname="text-gray-500">Default Rate</h2>
            <p className="text-2xl font-bold">{data.defaultRate.toFixed(3)}</p>
        </div>

        <div className="bg-white p-6 rounded-x1 shadow">
            <h2 classname="text-gray-500">High Risk Ratio</h2>
            <p className="text-2xl font-bold">{data.highRiskRatio.toFixed(3)}</p>
        </div>
    </div>
    )
}

export default PortfolioSummary