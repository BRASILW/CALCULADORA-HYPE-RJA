import React, { Fragment, useEffect } from "react";

import HomeSection from "../../sections/HomeSection";
import Footer from "../../components/Footer";

const Dashboard: React.FC = () => {
  useEffect(() => {
    console.log(" ");
    console.log(" ");
    console.log(
      "%c Made with ❤️ by Luys Fernnando",
      "color: #01bf71; background: #010606; border-radius: 4px; padding: 10px; font-size: 12px; font-weight: bold"
    );
    console.log(" ");
    console.log(" ");
  }, []);

  return (
    <Fragment>
      <HomeSection />

      <Footer />
    </Fragment>
  );
};

export default Dashboard;
