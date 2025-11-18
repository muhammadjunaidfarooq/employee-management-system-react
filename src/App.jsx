import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);

  const handleLongin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (authData && authData.employees.find((emp) => emp.email === email && emp.password === password)) {
      setUser("employee");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLongin={handleLongin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
