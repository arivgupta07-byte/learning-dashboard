export default function Sidebar() {
  return (
    <nav className="space-y-4">
      <h2 className="text-xl font-bold">Dashboard</h2>

      <ul className="space-y-2 text-zinc-400">
        <li>Home</li>
        <li>Courses</li>
        <li>Progress</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}