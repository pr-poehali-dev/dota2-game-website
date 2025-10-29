import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface PlayerStatsProps {
  name: string;
  avatar: string;
  rank: string;
  mmr: number;
  winRate: number;
  matches: number;
  kda: string;
}

export default function PlayerStats({ name, avatar, rank, mmr, winRate, matches, kda }: PlayerStatsProps) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16 border-2 border-primary">
          <AvatarImage src={avatar} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-sm text-accent font-semibold">{rank}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Award" size={16} className="text-accent" />
            <p className="text-xs text-muted-foreground">MMR</p>
          </div>
          <p className="text-2xl font-bold text-accent">{mmr.toLocaleString()}</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="TrendingUp" size={16} className="text-primary" />
            <p className="text-xs text-muted-foreground">Винрейт</p>
          </div>
          <p className="text-2xl font-bold text-primary">{winRate}%</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Gamepad2" size={16} className="text-secondary" />
            <p className="text-xs text-muted-foreground">Матчи</p>
          </div>
          <p className="text-2xl font-bold text-foreground">{matches}</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Swords" size={16} className="text-destructive" />
            <p className="text-xs text-muted-foreground">KDA</p>
          </div>
          <p className="text-2xl font-bold text-foreground">{kda}</p>
        </div>
      </div>
    </Card>
  );
}
