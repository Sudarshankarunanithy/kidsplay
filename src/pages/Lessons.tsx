import React from 'react';
import { motion } from 'framer-motion';

interface Lesson {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Addition Adventure",
    description: "Join Spidey as he learns to add numbers while saving the city!",
    difficulty: "Beginner",
    duration: "15 mins",
    image: "/lessons/addition.png"
  },
  {
    id: 2,
    title: "Subtraction Stories",
    description: "Help Spidey solve subtraction problems to defeat the villains!",
    difficulty: "Beginner",
    duration: "15 mins",
    image: "/lessons/subtraction.png"
  },
  {
    id: 3,
    title: "Multiplication Mission",
    description: "Learn multiplication with Spidey's amazing web patterns!",
    difficulty: "Intermediate",
    duration: "20 mins",
    image: "/lessons/multiplication.png"
  },
  {
    id: 4,
    title: "Shape Safari",
    description: "Discover different shapes with Spidey's geometric web designs!",
    difficulty: "Beginner",
    duration: "15 mins",
    image: "/lessons/shapes.png"
  }
];

const Lessons: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">Math Lessons</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <motion.div
            key={lesson.id}
            whileHover={{ scale: 1.05 }}
            className="card cursor-pointer"
          >
            <img
              src={lesson.image}
              alt={lesson.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-red-600 mb-2">{lesson.title}</h2>
            <p className="text-gray-600 mb-4">{lesson.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{lesson.duration}</span>
              <span className={`px-2 py-1 rounded text-sm ${
                lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {lesson.difficulty}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Lessons; 