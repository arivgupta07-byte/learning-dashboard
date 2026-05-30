interface CourseCardProps {
  title: string;
  progress: number;
}

export default function CourseCard({
  title,
  progress,
}: CourseCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6">
      <h3 className="font-semibold">{title}</h3>

      <p className="mt-2 text-zinc-400">
        Progress: {progress}%
      </p>
    </div>
  );
}