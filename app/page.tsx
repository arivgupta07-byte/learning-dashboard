import Sidebar from '../components/Sidebar'
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import ActivityTile from "../components/ActivityTile";



export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">
        <aside className="w-64 border-r border-zinc-800 p-6">
          <Sidebar />
        </aside>

        <section className="flex-1 p-6">
          <HeroTile />

          <div className="grid grid-cols-2 gap-4 mt-4">
            <CourseCard
              title="React Mastery"
              progress={75}
            />

            <CourseCard
              title="Next.js"
              progress={40}
            />
          </div>

          <div className="mt-4">
            <ActivityTile />
          </div>
        </section>
      </div>
    </main>
  );
}