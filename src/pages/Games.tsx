import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Game {
  id: number;
  title: string;
  description: string;
  type: 'puzzle' | 'quiz' | 'adventure';
  image: string;
}

const games: Game[] = [
  {
    id: 1,
    title: "Number Web Puzzle",
    description: "Help Spidey connect the right numbers to complete his web!",
    type: "puzzle",
    image: "/games/web-puzzle.png"
  },
  {
    id: 2,
    title: "Math Quiz Show",
    description: "Test your math skills in this exciting quiz game!",
    type: "quiz",
    image: "/games/quiz.png"
  },
  {
    id: 3,
    title: "Shape Adventure",
    description: "Join Spidey on a quest to collect geometric shapes!",
    type: "adventure",
    image: "/games/shape-adventure.png"
  }
];

const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">Math Games</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <motion.div
            key={game.id}
            whileHover={{ scale: 1.05 }}
            className="card cursor-pointer"
            onClick={() => setSelectedGame(game)}
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-red-600 mb-2">{game.title}</h2>
            <p className="text-gray-600 mb-4">{game.description}</p>
            <span className={`px-2 py-1 rounded text-sm ${
              game.type === 'puzzle' ? 'bg-blue-100 text-blue-800' :
              game.type === 'quiz' ? 'bg-purple-100 text-purple-800' :
              'bg-green-100 text-green-800'
            }`}>
              {game.type.charAt(0).toUpperCase() + game.type.slice(1)}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Game Modal */}
      {selectedGame && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGame(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-red-600 mb-4">{selectedGame.title}</h2>
            <p className="text-gray-600 mb-6">{selectedGame.description}</p>
            <button
              className="btn-primary"
              onClick={() => setSelectedGame(null)}
            >
              Start Playing!
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Games; 