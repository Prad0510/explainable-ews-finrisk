import Layout from "./components/Layout";
import RiskSummary from "./components/RiskSummary";
import FeatureImportance from "./components/FeatureImportance";

function App() {
  return (
    <Layout>
      <RiskSummary />
      <FeatureImportance />
    </Layout>
  );
}

export default App;
