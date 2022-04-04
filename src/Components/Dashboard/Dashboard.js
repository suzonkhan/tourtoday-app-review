import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
} from "recharts";

const Dashboard = () => {
  const [dashboardData, setdashboardData] = useState([]);
  useEffect(() => {
    fetch("./dashboard-data.json")
      .then((res) => res.json())
      .then((data) => setdashboardData(data));
  }, []);
  console.log(dashboardData);
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h2 className="block-title">Dashboard</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <LineChart
            width={400}
            height={300}
            data={dashboardData}
            margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
          </LineChart>
        </Col>
        <Col>
          <BarChart width={400} height={300} data={dashboardData}>
            <Bar dataKey="investment" fill="#82ca9d" />
            <Bar dataKey="sell" fill="#03a9f4" />
            <Bar dataKey="revenue" fill="#8884d8" />
            <XAxis dataKey="month" />
            <YAxis />
            <Legend />
            <Tooltip />
          </BarChart>
        </Col>
      </Row>
      <Row>
        <Col>
          <AreaChart
            width={400}
            height={300}
            data={dashboardData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </Col>
        <Col>
        <PieChart width={400} height={400}>
          <Pie data={dashboardData} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={dashboardData} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
