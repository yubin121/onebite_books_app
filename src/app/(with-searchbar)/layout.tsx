import Searchbar from './searchbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Searchbar />
      {children}
    </>
  );
}
