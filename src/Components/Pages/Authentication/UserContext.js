import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// import localStorage from "js-cookie"; // Import the localStorage object

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const token =localStorage.getItem("cookie"); // Use localStorage.get() to read the token cookie
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("cookie"); // Use localStorage.remove() to remove the token cookie
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, handleLogout,setUserId,userId }}
    >
      {children}
    </UserContext.Provider>
  );
};
