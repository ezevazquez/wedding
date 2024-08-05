import './globals.css';

export const metadata = {
  title: 'Agus & Eze',
  description: 'Bienvenidos a nuestra boda',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
