import PortfolioSummary from "./components/PortfolioSummary"
import RiskDistribution from "./components/RiskDistribution"
import FeatureImportance from "./components/FeatureImportance"
import RiskTimeline from "./components/RiskTimeline"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto"></div>
      <h1 className="text-3xl font-bold mb-6">
        Explainable Financial Risk Dashboard
      </h1>

      <PortfolioSummary />


<div className="grid grid-cols-2 gap-8 mt-8">

  <RiskDistribution />

  <FeatureImportance />

</div>

<RiskTimeline />
    </div>
  )
}

export default App