
import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { motion } from "framer-motion";

const fartDescriptions = [
  {
    name: "The Leather Creaker",
    description:
      "A deceptive little squeak that sounds like someone adjusting in a leather chair... until the nose catches up with the truth."
  },
  {
    name: "WobbleBlast 3000",
    description:
      "A thunderous ripple that echoes through time and space, with a side of shame."
  },
  {
    name: "The Silent Assassin",
    description:
      "No sound. Just doom. By the time they notice, it's already too late."
  },
  {
    name: "Bubble Trouble",
    description:
      "A bubbly gurgler with enough bass to rattle plastic chairs."
  },
  {
    name: "Royal Trumpet",
    description:
      "A bold, brassy blast — fit for a king and heard across the realm."
  }
];

export default function App() {
  const [fart, setFart] = useState(null);

  const generateFart = () => {
    const randomFart = fartDescriptions[Math.floor(Math.random() * fartDescriptions.length)];
    setFart(randomFart);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">💨 FartForge</h1>
      <p className="mb-4 text-center text-lg">Tap the button to forge a glorious fart name & tale.</p>

      <Button onClick={generateFart} className="text-lg px-6 py-3 rounded-2xl">
        Generate Fart
      </Button>

      {fart && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-6 w-full max-w-md"
        >
          <Card className="bg-white text-black shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2">{fart.name}</h2>
              <p>{fart.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
