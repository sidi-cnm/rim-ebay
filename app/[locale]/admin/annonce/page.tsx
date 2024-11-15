import React from "react";
import AnnonceAdmin from "../../components/AnonnceAdmin";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  // Simuler des données chargées depuis une API
  const annonces = [
    {
      id: 1,
      title: "Belle Maison",
      description: "Une belle maison avec jardin.",
      price: 120000,
      name: "John Doe",
      contact: "+222 22222222",
    },
    {
      id: 2,
      title: "Appartement à louer",
      description: "Appartement spacieux au centre-ville.",
      price: 800,
      name: "Jane Smith",
      contact: "+222 22222222",
    },
  ];

  return (
    <div className="py-28 px-14">
      <div className="text-2xl font-bold text-gray-800 uppercase mb-6">LIST DES ANONNCES </div>
      <AnnonceAdmin annonces={annonces} />
    </div>
  );
}
