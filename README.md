# Spidey Math - Interactive Math Learning Platform

An engaging and interactive math learning platform for children under 10, featuring Spidey and His Amazing Friends theme.

## Features

- **Interactive Lessons**: Gamified learning experience with Spidey-themed content
- **Math Games**: Fun and educational games covering various math concepts
- **Progress Tracking**: Monitor your child's learning journey
- **Parent Corner**: Resources and tools for parents to support their child's learning

## Tech Stack

- Frontend: React with TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Backend: Firebase (Authentication & Firestore)
- State Management: React Hooks

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── pages/         # Page components
  ├── firebase.ts    # Firebase configuration
  ├── App.tsx        # Main application component
  └── index.tsx      # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 