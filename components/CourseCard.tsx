"use client";
import { BookOpen, Rocket, Brain } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  progress: number;
  icon_name: string;
}

const icons = {
  book: BookOpen,
  rocket: Rocket,
  brain: Brain,
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: CourseCardProps) {

  const Icon =
    icons[icon_name as keyof typeof icons] ?? BookOpen;

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-2xl bg-zinc-900 p-6"
    >
      <div className="flex items-center gap-2 font-semibold">
        <Icon size={18} />
        <span>{title}</span>
      </div>

      <div className="mt-3 h-2 bg-zinc-800 rounded-full">
        <motion.div
          className="h-2 bg-green-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      </div>

      <p className="mt-2 text-zinc-400">
        Progress: {progress}%
      </p>
    </motion.div>
  );
}