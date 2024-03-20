import { Card } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Sample = () => {
  return (
    <div className="grid gap-4 ">
      <p className="text-[13px] font-medium"> <NavLink to={'/'} className="text-gray-300 -pr-2"> Home</NavLink> / Sample Page</p>
      <p className="text-[15px] font-semibold"> Sample Page</p>
      <Card className="grid gap-2 py-6 px-4 pb-8 bg-white">
        <p className="text-sm font-bold pb-8"> Sample Page</p>
        <p className="text-xs">
          Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion
          tempos incident ut laborers et doolie magna alissa. Ut enif ad minim
          venice, quin nostrum exercitation illampu laborings nisi ut liquid ex
          ea commons construal. Duos aube grue dolor in reprehended in voltage
          veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
          cuspidate non president, sunk in culpa qui officiate descent molls
          anim id est labours.
        </p>
      </Card>
    </div>
  );
};

export default Sample;
