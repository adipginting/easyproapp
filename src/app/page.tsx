import { LaporanTerbaru } from "./components/LaporanTerbaru";        

import DaftarTransaksi from "./components/DaftarTransaksi";
import React from "react";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <LaporanTerbaru />
      <DaftarTransaksi />
      <br/>
      <br/>
    </div>
  );
}
