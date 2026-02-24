export default function RiskSummary(){
    const data = {
        avgRisk: 0.61,
        defaultRate: 0.23,
        highRiskRatio: 0.18,
    };

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-sm text-gray-500">Average Risk Score</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                    {data.avgRisk}
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-sm text-gray-500">Default Rate</h3>
                <p className="text-3xl font-bold text-red-500 mt-2">
                    {(data.defaultRate*100).toFixed(1)}%
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-sm text-gray-500">High Risk Customers</h3>
                <p className="text-3xl font-bold text-orange-500 mt-2">
                    {(data.highRiskRatio * 100).toFixed(1)}%
                </p>
            </div>
        
        </div>
    );
}