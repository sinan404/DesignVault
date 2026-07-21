import { Poppins, Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {/* Sidebar — fixed to the left, full height */}
        <div className="fixed top-0 left-0 h-screen w-[234px] z-20">
          <Sidebar />
        </div>

        {/* TopBar — fixed to the top, starts after the sidebar */}
        <div className="fixed top-0 left-[234px] right-0 h-[68px] z-10">
          <TopBar />
        </div>

        {/* Main content — pushed right and down, this is the ONLY scrollable area */}
        <main className="ml-[234px] mt-[68px] p-6 min-h-[calc(100vh-68px)] bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}