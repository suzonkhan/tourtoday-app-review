import { useEffect, useState } from "react";

const useDashData = () => {
    const [dashboardData, setdashboardData] = useState([]);
    useEffect(() => {
        fetch("./dashboard-data.json")
          .then((res) => res.json())
          .then((data) => setdashboardData(data));
      }, []);
      return [dashboardData, setdashboardData]
}

export default useDashData;