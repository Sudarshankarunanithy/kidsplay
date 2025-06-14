import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">
            Learn Math with Spidey!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join Spidey and his amazing friends on an exciting math adventure!
          </p>
          <Link to="/lessons" className="btn-primary text-lg">
            Start Learning
          </Link>
        </motion.div>
      </section>

      {/* Featured Content */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="card"
        >
          <h2 className="text-2xl font-bold text-red-600 mb-4">Fun Lessons</h2>
          <p className="text-gray-600 mb-4">
            Learn math through exciting stories and adventures with Spidey!
          </p>
          <Link to="/lessons" className="text-red-600 hover:text-red-700">
            Explore Lessons →
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="card"
        >
          <h2 className="text-2xl font-bold text-red-600 mb-4">Math Games</h2>
          <p className="text-gray-600 mb-4">
            Play fun games that make learning math super exciting!
          </p>
          <Link to="/games" className="text-red-600 hover:text-red-700">
            Play Games →
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="card"
        >
          <h2 className="text-2xl font-bold text-red-600 mb-4">Parent Corner</h2>
          <p className="text-gray-600 mb-4">
            Track progress and get helpful resources for your child's learning journey.
          </p>
          <Link to="/parent-corner" className="text-red-600 hover:text-red-700">
            Visit Parent Corner →
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 