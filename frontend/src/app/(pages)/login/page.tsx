// "use client";

// import { ShieldCheck, Zap } from "lucide-react";
// import { ThemeToggle } from "./components/themmeToggle";

// export default function EduFinanceLogin() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] dark:bg-[#0A0A0A] transition-colors duration-300 font-sans text-gray-900 dark:text-gray-100 p-4 relative">
      
//       <ThemeToggle />

//       {/* Card Principal de Login */}
//       <div className="w-full max-w-[440px] bg-white dark:bg-[#141414] rounded-xl border border-gray-200 dark:border-[#262626] shadow-sm p-8 relative">
        
//         {/* Identidade Visual - Logo EduFinance */}
//         <div className="flex items-center justify-center gap-3 mb-8">
//           <div className="w-9 h-9 bg-[#E53E3E] rounded-md flex items-center justify-center text-white font-bold text-xl leading-none">
//             E
//           </div>
//           <span className="font-semibold text-2xl tracking-tight text-gray-900 dark:text-white">
//             EduFinance
//           </span>
//         </div>

//         <div className="mb-8 flex-col justify-center items-center">
//           <h1 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
//             Acesse sua conta no sistema
//           </h1>
//           <p className="text-sm text-gray-500 dark:text-[#888888] flex flex-col gap-1.5">
//             <span className="flex items-center gap-1.5 text-[#E53E3E] font-medium mt-1">
//               <Zap size={14} /> Agilidade <ShieldCheck size={14} className="ml-1" /> Confiabilidade
//             </span>
//           </p>
//         </div>

//         {/* Formulário de Login */}
//         <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//           <div className="space-y-1.5">
//             <label 
//               htmlFor="email" 
//               className="block text-sm font-medium text-gray-700 dark:text-[#CCCCCC]"
//             >
//               E-mail
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="seu.email@exemplo.com"
//               className="w-full bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#262626] rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#E53E3E] dark:focus:border-[#E53E3E] text-gray-900 dark:text-white transition-colors"
//               required
//             />
//           </div>

//           <div className="space-y-1.5">
//             <label 
//               htmlFor="password" 
//               className="block text-sm font-medium text-gray-700 dark:text-[#CCCCCC]"
//             >
//               Senha
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="••••••••"
//               className="w-full bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#262626] rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#E53E3E] dark:focus:border-[#E53E3E] text-gray-900 dark:text-white transition-colors"
//               required
//             />
//           </div>

//           <div className="flex items-center justify-between text-sm mt-2">
//             <label className="flex items-center text-gray-600 dark:text-[#888888] cursor-pointer">
//               <input 
//                 type="checkbox" 
//                 className="mr-2 rounded border-gray-300 dark:border-[#262626] text-[#E53E3E] focus:ring-[#E53E3E] bg-white dark:bg-[#0A0A0A]" 
//               />
//               Lembrar de mim
//             </label>
//             <a href="#" className="text-gray-600 dark:text-[#888888] hover:text-[#E53E3E] dark:hover:text-[#E53E3E] transition-colors">
//               Esqueceu a senha?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#E53E3E] hover:bg-[#d43737] text-white font-medium py-2.5 px-4 rounded-md text-sm transition-colors mt-4 shadow-sm"
//           >
//             Entrar
//           </button>
//         </form>

//       </div>
//     </div>
//   );
// }