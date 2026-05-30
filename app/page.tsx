import Sidebar from '../components/Sidebar'
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import ActivityTile from "../components/ActivityTile";
import { supabase } from "@/lib/supabase";


export default async function Home() {
const { data: courses, error } = await supabase
  .from("courses")
  .select("*");
// console.log(courses);
// console.log(error);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">
        <aside className="w-64 border-r border-zinc-800 p-6">
          <Sidebar />
        </aside>

        <section className="flex-1 p-6">
          <HeroTile />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {courses?.map((course) => (
              <CourseCard
                key={course.title}
                title={course.title}
                progress={course.progress}
              />
            ))}
          </div>

          <div className="mt-4">
            <ActivityTile />
          </div>
        </section>
      </div>
    </main>
  );
}