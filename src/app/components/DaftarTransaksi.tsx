"use client";
import React, { useState } from "react";
import { Calendar, SlidersHorizontal } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { DoorClosed } from "lucide-react";
import { CircleCheck } from "lucide-react";

const DaftarTransaksi = () => {
  const [count, setCount] = useState<number>(3);

  type Tenant = {
    name: string;
    date: Date;
    roomNumber: number;
    status: string;
  };

  const tenants: Tenant[] = [
    {
      name: "Budi Santoso",
      date: new Date(2024, 1, 1),
      roomNumber: 101,
      status: "Lunas",
    },
    {
      name: "Siti Nurhaliza",
      date: new Date(2024, 2, 15),
      roomNumber: 202,
      status: "Lunas",
    },
    {
      name: "Budi Santoso",
      date: new Date(2024, 3, 3),
      roomNumber: 303,
      status: "Lunas",
    },
    {
      name: "Siti Nurhaliza",
      date: new Date(2024, 2, 15),
      roomNumber: 202,
      status: "Lunas",
    },
    {
      name: "Siti Nurhaliza",
      date: new Date(2024, 2, 15),
      roomNumber: 202,
      status: "Lunas",
    },
  ];
  return (
    <div className="w-96 flex items-center flex-col">
      <div className="flex justify-between mb-6 w-full">
        <h1 className="font-bold">Daftar Penyewa</h1>
        <SlidersHorizontal />
      </div>

      <div>
        {tenants
          .filter((_, index) => index < count)
          .map((tenant, index) => (
            <div className="border-black border-b-2 pb-3 pt-3">
              <div className="flex flex-row items-center">
                <div className="flex flex-row pr-3">
                  <CircleUserRound />
                </div>
                <div className="flex flex-col pr-20">
                  <div className="font-bold">{tenant.name}</div>
                  <div className="flex gap-2">
                    <Calendar />
                    {tenant.date.toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-2">
                    <DoorClosed />
                    {tenant.roomNumber}
                  </div>
                  <div className="flex flex-row gap-2">
                    <CircleCheck />
                    {tenant.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {count === tenants.length ? (
        <div
          className="flex pt-4"
          onClick={() => {
            setCount(tenants.length);
          }}
        >
          See more ...
        </div>
      ) : (
        <div
          className="flex pt-4"
          onClick={() => {
            setCount(3);
          }}
        >
          See less ...
        </div>
      )}
    </div>
  );
};

export default DaftarTransaksi;
