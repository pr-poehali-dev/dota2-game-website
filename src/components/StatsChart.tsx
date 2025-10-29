import { Card } from '@/components/ui/card';

interface DataPoint {
  label: string;
  value: number;
}

interface StatsChartProps {
  title: string;
  data: DataPoint[];
  color?: string;
}

export default function StatsChart({ title, data, color = '#e03131' }: StatsChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
      <h3 className="text-xl font-bold mb-6 text-foreground">{title}</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="text-sm font-semibold" style={{ color }}>{item.value}</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: color,
                  boxShadow: `0 0 10px ${color}40`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
