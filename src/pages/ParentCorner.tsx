import React from 'react';
import { motion } from 'framer-motion';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'worksheet' | 'guide' | 'activity';
  downloadUrl: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Addition Worksheets",
    description: "Printable worksheets for practicing addition skills",
    type: "worksheet",
    downloadUrl: "/resources/addition-worksheets.pdf"
  },
  {
    id: 2,
    title: "Parent's Guide",
    description: "Tips and tricks for helping your child learn math",
    type: "guide",
    downloadUrl: "/resources/parent-guide.pdf"
  },
  {
    id: 3,
    title: "Fun Math Activities",
    description: "Engaging activities to do at home with your child",
    type: "activity",
    downloadUrl: "/resources/math-activities.pdf"
  }
];

const ParentCorner: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-red-600 mb-8">Parent Corner</h1>
        <div className="card">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Track Progress</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Completed Lessons</span>
              <span className="text-red-600 font-bold">12/20</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Games Played</span>
              <span className="text-red-600 font-bold">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Stars Earned</span>
              <span className="text-red-600 font-bold">45</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-red-600 mb-6">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-red-600 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a
                href={resource.downloadUrl}
                className="btn-primary inline-block"
                download
              >
                Download
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-red-600 mb-6">Tips for Success</h2>
        <div className="card">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Set aside regular time for math practice</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Make learning fun by incorporating games and activities</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Celebrate progress and achievements</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Encourage questions and exploration</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ParentCorner; 