interface GoalBannerProps {
  goal: string;
}

export default function GoalBanner({ goal }: GoalBannerProps) {
  return (
    <div
      style={{ backgroundColor: '#FDE8E6', border: '1px solid #F5C6C1' }}
      className="rounded-lg px-4 py-3 flex items-start gap-2"
    >
      <span className="text-base mt-0.5">🎯</span>
      <p className="text-sm">
        <span style={{ color: '#C0392B' }} className="font-bold">Goal: </span>
        <span style={{ color: '#C0392B' }} className="italic">{goal}</span>
      </p>
    </div>
  );
}
