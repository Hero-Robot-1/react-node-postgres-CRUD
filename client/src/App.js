import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Transaction from "./scenes/transactions";
import CreateTransaction from "./scenes/transactions/create-transaction";
import DeleteTransaction from "./scenes/transactions/delete-transaction";
import UpdateTransaction from "./scenes/transactions/update-transaction";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Landing, Login, SignUp, Home } from "./scenes/authentication";
import AccountMenu from "./scenes/global/AccountMenu";

import React, { useEffect } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar user={user} />
          <main className="content">
            <Topbar user={user}/>
            <Routes>
              <Route path="/" element={user?.email ? <Home user={user} /> : <Landing />}/>
              <Route path="/home" element={user?.email ? <Home user={user} /> : <Navigate to="/" />}/>
              <Route path="/signup" element={user?.email ? <Home user={user}/> : <SignUp />}/>
              <Route path="/login" element={user?.email ? <Home user={user}/> : <Login />}/>
              <Route path="/transactions" element={user?.email ? <Transaction user={user}/> : <Login />}/>
              <Route path="/create-form" element={<CreateTransaction />} />
              <Route path="/update-form" element={<UpdateTransaction />} />
              <Route path="/delete-form" element={<DeleteTransaction />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
