import './globals.css';
import Navbar from '../component/Navbar/Navbar';

export const metadata = {
  title: 'Saytica Eval Console',
  description: 'AI model evaluation and annotation workspace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 min-h-screen flex flex-col">
         <Navbar />
        
         <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}