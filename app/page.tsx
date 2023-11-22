import Preloader from "./(routes)/preloader/preloader";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Preloader />
    </main>
  );
}
