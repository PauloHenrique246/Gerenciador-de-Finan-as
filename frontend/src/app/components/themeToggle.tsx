// "use client";

// import { useState, useEffect } from "react";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeToggle() {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   useEffect(() => {
//     const root = document.documentElement;
//     if (isDarkMode) {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   const toggleTheme = () => setIsDarkMode(!isDarkMode);

//   return (
//     <button
//       onClick={toggleTheme}
//       className="absolute top-6 right-6 p-2.5 rounded-lg bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#262626] text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1A1A1A] transition-all focus:outline-none shadow-sm z-10"
//       aria-label="Alternar tema"
//     >
//       {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );
// }