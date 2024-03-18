import React from "react";
import ListDashboard from "../../Components/ListDashboardPage";
import Chart from "../../Components/Charts";
import Cards from "../../Components/TopCardDashboard";

function Home() {
  return (
    <div>
      <Cards />
      <Chart />
    </div>
  );
}

export default Home;
