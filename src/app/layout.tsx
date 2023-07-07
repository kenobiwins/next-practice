import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header, Footer, Providers } from '@/components';
import Head from 'next/head';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Home',
  description: 'home page app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body
        style={{
          display: 'grid',
          height: '100vh',
          gridTemplateRows: '100px 1fr 100px',
        }}
        className={roboto.className}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
