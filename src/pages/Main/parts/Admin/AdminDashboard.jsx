import React, { useState } from "react";
import CardDashboard from "../../../../components/CardDashboard";
import EarningsChart from "../../../../components/DashboardChact";
const data = [
  {
    title: "Total Earnings (Jun)",
    value: "$24.88K",
    subtext: "-10% from last month",
  },
  {
    title: "Total vehicles",
    value: "100",
    subtext: "+10% from last month",
  },
  {
    title: "Available Vehicles",
    value: "80",
    subtext: "Out of 180 total",
  },
  {
    title: "Upcoming Trips",
    value: "50",
    subtext: "Next 7 days",
  },
];
const sampleEarningsData = [
  { month: "JAN", value: 4500 },
  { month: "FEB", value: 2800 },
  { month: "MAR", value: 8200 },
  { month: "APR", value: 8800 },
  { month: "MAY", value: 8400 },
  { month: "JUN", value: 9200, highlighted: true, percentageChange: "+8.24%" },
  { month: "JUL", value: 8600 },
  { month: "AUG", value: 5200 },
  { month: "SEP", value: 3400 },
  { month: "OCT", value: 8000 },
  { month: "NOV", value: 8800 },
  { month: "DEC", value: 8400 },
];
export default function AdminDashboard() {
  const [overView, setOverView] = useState([...data]);
  const [earningsData, setEarningsData] = useState([...sampleEarningsData]);
  const handleYearChange = (year) => {
    console.log("Year changed to:", year);
    // Handle year change logic here
  };
  return (
    <div className="">
      <DashboardTop />
      <div>
        {overView.map((item, id) => (
          <CardDashboard key={id} item={item} />
        ))}
      </div>
      <div className="mt-6">
        <EarningsChart
          title="Earnings"
          data={earningsData}
          selectedYear="2024"
          years={years}
          onYearChange={handleYearChange}
          maxValue={10000}
          backgroundColor="#DBDEEF"
          barColor="#0B2088"
          textColor="#1E1E1E"
          className="shadow-lg"
        />
      </div>
    </div>
  );
}
