// app/page.tsx
'use client';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex bg-black min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-16">
        {/* Header */}
        <Header />
        
        {/* Main Dashboard Area */}
        <main className="h-[calc(100vh-64px)] bg-black p-6">
          {/* This is where your main content would go */}
        </main>
      </div>
    </div>
  );
}