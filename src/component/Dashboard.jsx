import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const Dashboard = () => {
  const pieData = [
    { name: "France", value: 400 },
    { name: "Italy", value: 300 },
    { name: "Norway", value: 300 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="dashboard mb-6">
        <h2 className="text-2xl font-bold">Manager Dashboard</h2>
        <p className="text-gray-600">View insights, reports, or analytics here.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {[
          { label: "Total Revenue", value: "$60.6k", icon: "💰" },
          { label: "Revenue of the Day", value: "$983", icon: "📅" },
          { label: "Total Earnings", value: "$40.5k", icon: "📈" },
          { label: "Products Sold", value: "$2.3k", icon: "🛒" },
        ].map((item) => (
          <div className="bg-white p-4 rounded-lg shadow" key={item.label}>
            <div className="text-2xl">{item.icon}</div>
            <div className="text-green-500 font-bold text-xl">{item.value}</div>
            <div className="text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Country Sales + Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Sales by Country */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Sales by Country</h2>
            <a href="#" className="text-blue-500 text-sm">View Full Report</a>
          </div>
          {[
            { country: "Munbai", amount: "Rs-12,567", percent: "70%", color: "bg-purple-500" },
            { country: "Delhi", amount: "Rs-9,324", percent: "60%", color: "bg-green-500" },
            { country: "Varanasi", amount: "Rs-10,167", percent: "65%", color: "bg-orange-500" },
            { country: "Ghaziabad", amount: "Rs-12,100", percent: "75%", color: "bg-yellow-400" },
            { country: "Noida", amount: "Rs-11,480", percent: "72%", color: "bg-red-400" },
          ].map((item) => (
            <div className="mb-2" key={item.country}>
              <div className="flex justify-between text-sm">
                <span>{item.country}</span>
                <span>{item.amount}</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div
                  className={`${item.color} h-2 rounded`}
                  style={{ width: item.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Weekly Sales (France, Italy, Norway)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Product Sales + Product Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Sales */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Product Sales</h2>
          <div className="text-sm text-gray-500">[Bar Chart Placeholder for Bags & Shoes]</div>
        </div>

        {/* Top Products Table */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Top Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2">Product</th>
                  <th>Availability</th>
                  <th>Code</th>
                  <th>Sale</th>
                </tr>
              </thead>
              <tbody>
                {Array(6).fill().map((_, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="py-2">Women shirt</td>
                    <td>
                      <span className="text-green-700 bg-green-100 px-2 py-1 rounded-full text-xs">
                        In Stock
                      </span>
                    </td>
                    <td>DN004536</td>
                    <td>$12,456</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right text-blue-500 mt-2 text-sm cursor-pointer">
              Show More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
