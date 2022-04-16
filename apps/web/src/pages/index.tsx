import { Header, Hero } from "../components";

export default function Web() {
  return (
    <>
      <Header />
      <div className="container max-w-7xl mx-auto p-8">
        <Hero />
      </div>
    </>
  );
}
