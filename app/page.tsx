import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("./(routes)/preloader/preloader"), {
  ssr: false,
});

export default function Page() {
  return (
    <main className="min-h-screen">
      <Preloader />
    </main>
  );
}
