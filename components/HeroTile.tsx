import { Flame } from "lucide-react";
export default function HeroTile() {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold">
        Welcome Back, Ariv
      </h2>

      <div className="mt-2 flex items-center gap-2 text-zinc-400">
        <Flame size={18} className="text-orange-500" />
        <span>7 Day Learning Streak</span>
      </div>
    </div>
  );
}