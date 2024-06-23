import { LaporanTerbaru } from "./components/LaporanTerbaru";        
import Image from "next/image";
import DaftarTransaksi from "./components/DaftarTransaksi";
import React from "react";

export default function Home() {
  return (
    <LaporanTerbaru />
      <DaftarTransaksi />
    
  );
}
