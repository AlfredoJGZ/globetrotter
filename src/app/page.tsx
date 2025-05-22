"use client";
import FormIndexer from "@/components/FormIndexer";
import MainForm from "@/components/MainForm";
import useFlightsStore from "@/store/flightsStore";
import { useEffect, useState } from "react";

const fetchFlights = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Lstanislao/cities-permalink/main/flights.json"
  );
  const flights = await response.json();
  return flights;
};

export default function Home() {
  const setFlights = useFlightsStore((state) => state.setFlights);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFlights = async () => {
      const flights = await fetchFlights();
      setFlights(flights);
      setLoading(false);
    };
    loadFlights();
  }, [setFlights]);

  return (
    <main className="max-w-xl mx-auto">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <FormIndexer />
          <MainForm />
        </>
      )}
    </main>
  );
}
