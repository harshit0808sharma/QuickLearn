import { QuickProvider } from './context/QuickContext';
import './globals.css';

export const metadata = {
  title: 'QuickLearn',
  description: 'This is a Learning Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <QuickProvider>
          <main>{children}</main>
        </QuickProvider>
      </body>
    </html>
  );
}
