export default function ActivityTile() {
    const activities = [
        "Completed React Module",
        "Started Next.js Course",
        "Solved 5 DSA Questions",
    ];
    return (
        <div className="rounded-2xl bg-zinc-900 p-6">
            <h3 className="font-semibold">
                Recent Activity
            </h3>

            <ul className="mt-3 space-y-2">
                {activities.map((activity) => (
                    <li
                        key={activity}
                        className="text-zinc-400"
                    >
                        • {activity}
                    </li>
                ))}
            </ul>
        </div>
    );
}