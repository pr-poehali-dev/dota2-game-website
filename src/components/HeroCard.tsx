import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroCardProps {
  name: string;
  role: string;
  image: string;
  winrate: number;
  pickrate: number;
}

export default function HeroCard({ name, role, image, winrate, pickrate }: HeroCardProps) {
  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
        <Badge className="absolute top-3 right-3 bg-secondary/90 text-secondary-foreground">
          {role}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-3 text-foreground">{name}</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" size={16} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Винрейт</p>
              <p className="text-sm font-semibold text-primary">{winrate}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Users" size={16} className="text-secondary" />
            <div>
              <p className="text-xs text-muted-foreground">Пикрейт</p>
              <p className="text-sm font-semibold text-secondary">{pickrate}%</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
