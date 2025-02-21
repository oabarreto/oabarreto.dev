export default function SkillCard({ name, icon, color, description }: any) {
  const IconComponent = icon;

  return (
    <div className="flex-none w-64 group">
      <div className="flex items-center gap-4">
        <div
          className={`p-4 rounded-xl bg-gradient-to-r ${color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
        >
          <IconComponent className="w-8 h-8 text-gray-700 dark:text-gray-300" />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-1">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
