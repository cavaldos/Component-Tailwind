import React from "react";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
};
export default HomeLayout;
