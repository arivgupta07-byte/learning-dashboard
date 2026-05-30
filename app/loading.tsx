export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-32 rounded-2xl bg-zinc-900" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-40 rounded-2xl bg-zinc-900" />
          <div className="h-40 rounded-2xl bg-zinc-900" />
          <div className="h-40 rounded-2xl bg-zinc-900" />
        </div>

        <div className="h-48 rounded-2xl bg-zinc-900" />
      </div>
    </main>
  );
}