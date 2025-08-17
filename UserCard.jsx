Name: UserCard.jsx
Type: code/react

import React from "react";

// UserCard Component
// Props: name, email
// Displays a simple card layout with TailwindCSS

export default function UserCard({ name, email }) {
  return (
    <div className="max-w-sm rounded-2xl shadow-lg bg-gradient-to-br from-pink-500 to-orange-400 p-6 text-white">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-sm opacity-90">{email}</p>
    </div>
  );
}

// ✅ Save this file as `UserCard.jsx` inside your components folder
// Example: src/components/UserCard.jsx

// Example usage in App.jsx:
// import UserCard from "./components/UserCard";
//
// function App() {
//   return (
//     <div className="p-6">
//       <UserCard name="John Doe" email="john@example.com" />
//     </div>
//   );
// }
//
// export default App;

