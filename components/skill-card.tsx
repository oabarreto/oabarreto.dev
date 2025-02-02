export default function SkillCard({ name, icon, color }: any) {
  return (
    <div
      key={name}
      className="flex-none w-48 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:scale-105 transition-transform"
    >
      {icon}
      <div
        className={`flex justify-center h-1 mb-3 bg-gradient-to-r ${color}`}
      ></div>
      <div className="font-medium text-center">{name}</div>
    </div>
  );
}
