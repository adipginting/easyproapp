import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  CalendarDays,
  CircleCheck,
  DoorClosed,
  Hourglass,
  MapPin,
  Settings2,
  ZoomIn,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const LaporanTerbaru = () => {
  const LaporanTerbaru = [
    {
      id: 1,
      title: 'Laporan 1',
      Date: '14 juni 2024',
      status: 'selesai',
      detail: 'detail',
    },
    {
      id: 2,
      title: 'Laporan 2',
      Date: '14 juni 2024',
      status: 'selesai',
      detail: 'detail',
    },
  ];
  const DetailLaporan = [
    {
      id: 1,
      kamar: 'Kost A',
      image: '/assets/images/dp1.png',
      alamat: 'Jl. A',
      panjang: '12/15',
      detail: 'terisi',
    },
    {
      id: 2,
      kamar: 'Kost B',
      image: '/assets/images/dp2.png',
      alamat: 'Jl. B',
      panjang: '12/15',
      detail: 'kosong',
    },
  ];
  return (
    <div className="container pt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-[#131F35] font-bold">Laporan Terbaru</h1>
        <Settings2 />
      </div>
      <div className="flex flex-row gap-5 mt-4">
        {LaporanTerbaru.map((item, index) => (
          <Card
            className="bg-gradient-to-b from-[#203459] to-[#131F35] px-1 rounded-3xl"
            key={index}
          >
            <CardHeader>
              <CardTitle className="text-white text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3">
                  <CalendarDays size={12} color="#BACAE6" />
                  <p className="text-[#BACAE6] text-xs">{item.Date}</p>
                </div>
                <div className="flex flex-row gap-3">
                  <Hourglass size={12} color="#BACAE6" />
                  <p className="text-[#BACAE6] text-xs">{item.status}</p>
                </div>
                <div className="flex flex-row gap-3">
                  <ZoomIn size={12} color="#BACAE6" />
                  <p className="text-[#BACAE6] text-xs">{item.detail}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-xl text-[#131F35] font-bold mt-4">
          Daftar Properti
        </h1>
        <Settings2 />
      </div>
      <div className="flex flex-row gap-5 mt-4">
        {DetailLaporan.map((item, index) => (
          <Card className=" rounded-xl " key={index}>
            <CardHeader className="p-0 space-y-0 w-full ">
              <Image
                src={item.image}
                alt="properti"
                className="rounded-t-2xl h-[120px]"
                width={500}
                height={500}
              />
            </CardHeader>
            <CardContent className="p-3 flex flex-col gap-1">
              <div className="flex justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <DoorClosed size={10} />
                  <p className="text-xs">{item.panjang}</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <CircleCheck size={10} />
                  <p className="text-xs">{item.panjang}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3">
                  <p className="text-[#131F35] text-sm font-bold">
                    {item.kamar}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <MapPin size={10} color="#5E7091" />
                <p className="text-[#5E7091] text-xs">{item.alamat}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
