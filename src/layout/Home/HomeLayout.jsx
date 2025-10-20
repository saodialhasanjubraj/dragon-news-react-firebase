import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header";
import LatestNews from "../../components/LatestNews";
import Navbar from "../../components/Navbar";
import LeftAside from "../../components/homeLayout/LeftAside";
import RightAside from "../../components/homeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div className="w-full max-w-325 mx-auto">
      <header>
        <Header />
      </header>
      <section className="lateNews">
        <LatestNews />
      </section>
      <nav>
        <Navbar />
      </nav>

      <main className="w-11/12 mx-auto grid-cols-12 grid">
        {/* //! dont understand about w-11/12 */}
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
