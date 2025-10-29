import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TournamentCardProps {
  name: string;
  prizePool: string;
  date: string;
  status: 'live' | 'upcoming' | 'finished';
  teams: number;
}

export default function TournamentCard({ name, prizePool, date, status, teams }: TournamentCardProps) {
  const statusColors = {
    live: 'bg-primary text-primary-foreground animate-pulse-glow',
    upcoming: 'bg-secondary text-secondary-foreground',
    finished: 'bg-muted text-muted-foreground'
  };

  const statusLabels = {
    live: 'LIVE',
    upcoming: 'Скоро',
    finished: 'Завершён'
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-foreground">{name}</h3>
        <Badge className={statusColors[status]}>
          {statusLabels[status]}
        </Badge>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Icon name="Trophy" size={18} className="text-accent" />
          <span className="text-accent font-semibold">{prizePool}</span>
        </div>
        
        <div className="flex items-center gap-3 text-muted-foreground">
          <Icon name="Calendar" size={18} />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center gap-3 text-muted-foreground">
          <Icon name="Users" size={18} />
          <span>{teams} команд</span>
        </div>
      </div>
    </Card>
  );
}
