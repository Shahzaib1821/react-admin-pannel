import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dasboard from "../pages/Dashboard/Index";
import TodoPage from "../pages/Todo/Index";
import ReviewIndex from "../pages/Review";
import CustomerSection from "../pages/CustomerSection";
import SettingsPage from "../pages/Setting";
import SupportPage from "../pages/Support";
import FinancePage from "../pages/Finance";
import AccountancyPage from "../pages/Accountancy";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dasboard />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/reviews" element={<ReviewIndex />} />
          <Route path="/customers" element={<CustomerSection />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/accountancy" element={<AccountancyPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
