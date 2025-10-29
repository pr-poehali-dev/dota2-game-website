import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import HeroCard from '@/components/HeroCard';
import TournamentCard from '@/components/TournamentCard';
import PlayerStats from '@/components/PlayerStats';
import StatsChart from '@/components/StatsChart';

export default function Index() {
  const [activeTab, setActiveTab] = useState('main');

  const heroes = [
    { name: 'Invoker', role: 'Маг', image: 'https://cdn.poehali.dev/projects/da663090-3a1e-4e22-ba88-475ee2219942/files/9cf04c56-21cc-4da3-9799-45f707a5d22c.jpg', winrate: 52.4, pickrate: 18.2 },
    { name: 'Phantom Assassin', role: 'Керри', image: 'https://cdn.poehali.dev/projects/da663090-3a1e-4e22-ba88-475ee2219942/files/9cf04c56-21cc-4da3-9799-45f707a5d22c.jpg', winrate: 51.8, pickrate: 22.5 },
    { name: 'Pudge', role: 'Танк', image: 'https://cdn.poehali.dev/projects/da663090-3a1e-4e22-ba88-475ee2219942/files/9cf04c56-21cc-4da3-9799-45f707a5d22c.jpg', winrate: 49.2, pickrate: 35.7 },
    { name: 'Crystal Maiden', role: 'Поддержка', image: 'https://cdn.poehali.dev/projects/da663090-3a1e-4e22-ba88-475ee2219942/files/9cf04c56-21cc-4da3-9799-45f707a5d22c.jpg', winrate: 53.1, pickrate: 15.4 },
  ];

  const tournaments = [
    { name: 'The International 2024', prizePool: '$40,000,000', date: '15-28 октября 2024', status: 'live' as const, teams: 20 },
    { name: 'DreamLeague Season 24', prizePool: '$1,000,000', date: '1-10 ноября 2024', status: 'upcoming' as const, teams: 12 },
    { name: 'ESL One Berlin', prizePool: '$500,000', date: '20-25 сентября 2024', status: 'finished' as const, teams: 8 },
  ];

  const winRateData = [
    { label: 'Invoker', value: 52.4 },
    { label: 'PA', value: 51.8 },
    { label: 'CM', value: 53.1 },
    { label: 'Pudge', value: 49.2 },
    { label: 'Anti-Mage', value: 48.9 },
  ];

  const pickRateData = [
    { label: 'Pudge', value: 35.7 },
    { label: 'PA', value: 22.5 },
    { label: 'Invoker', value: 18.2 },
    { label: 'CM', value: 15.4 },
    { label: 'Sniper', value: 12.3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DOTA 2
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => setActiveTab('main')} className={activeTab === 'main' ? 'text-primary' : ''}>
              Главная
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('tournaments')} className={activeTab === 'tournaments' ? 'text-primary' : ''}>
              Турниры
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('heroes')} className={activeTab === 'heroes' ? 'text-primary' : ''}>
              Герои
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('stats')} className={activeTab === 'stats' ? 'text-primary' : ''}>
              Статистика
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('guides')} className={activeTab === 'guides' ? 'text-primary' : ''}>
              Гайды
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('shop')} className={activeTab === 'shop' ? 'text-primary' : ''}>
              Магазин
            </Button>
          </nav>

          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="User" size={18} className="mr-2" />
            Войти
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'main' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/da663090-3a1e-4e22-ba88-475ee2219942/files/ab57de74-58b0-4bac-9b98-dcc8798e4b27.jpg"
                alt="Dota 2 Arena"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-12 max-w-2xl">
                <h1 className="text-6xl font-bold mb-4 animate-slide-up">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    The International 2024
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Крупнейший киберспортивный турнир года с призовым фондом $40,000,000
                </p>
                <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                    <Icon name="Play" size={20} className="mr-2" />
                    Смотреть Live
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg border-primary text-primary hover:bg-primary/10">
                    Подробнее
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Популярные герои</h2>
                <Button variant="outline" onClick={() => setActiveTab('heroes')}>
                  Все герои
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {heroes.map((hero, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <HeroCard {...hero} />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Актуальные турниры</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {tournaments.map((tournament, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <TournamentCard {...tournament} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'tournaments' && (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold">Турниры</h1>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="live">Live</TabsTrigger>
                <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {tournaments.map((tournament, index) => (
                    <TournamentCard key={index} {...tournament} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="live" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {tournaments.filter(t => t.status === 'live').map((tournament, index) => (
                    <TournamentCard key={index} {...tournament} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="upcoming" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {tournaments.filter(t => t.status === 'upcoming').map((tournament, index) => (
                    <TournamentCard key={index} {...tournament} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === 'heroes' && (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold">Герои Dota 2</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {heroes.map((hero, index) => (
                <HeroCard key={index} {...hero} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold">Статистика</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PlayerStats
                name="Miracle"
                avatar="https://cdn.poehali.dev/projects/da663090-3a1e-4e22-ba88-475ee2219942/files/9cf04c56-21cc-4da3-9799-45f707a5d22c.jpg"
                rank="Immortal"
                mmr={8547}
                winRate={58.3}
                matches={12453}
                kda="4.2"
              />
              <PlayerStats
                name="Topson"
                avatar="https://cdn.poehali.dev/projects/da663090-3a1e-4e22-ba88-475ee2219942/files/9cf04c56-21cc-4da3-9799-45f707a5d22c.jpg"
                rank="Immortal"
                mmr={8234}
                winRate={56.7}
                matches={9876}
                kda="3.9"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <StatsChart
                title="Винрейт героев"
                data={winRateData}
                color="#e03131"
              />
              <StatsChart
                title="Популярность героев"
                data={pickRateData}
                color="#1e88e5"
              />
            </div>
          </div>
        )}

        {activeTab === 'guides' && (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold">Гайды</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="BookOpen" size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">Гайд #{item}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Подробное руководство по игре за героя и основным механикам
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Eye" size={16} />
                    <span>{Math.floor(Math.random() * 10000)} просмотров</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'shop' && (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold">Магазин</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="bg-card/50 backdrop-blur border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:scale-105"
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name="ShoppingBag" size={48} className="text-primary" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Предмет #{item}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-accent">$9.99</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Купить
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border/50 mt-20 py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DOTA 2
              </h3>
              <p className="text-muted-foreground">
                Официальный портал Dota 2 с актуальной информацией о турнирах, героях и статистике
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Турниры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Герои</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гайды</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Reddit</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitch</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О проекте</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
            <p>© 2024 Dota 2 Portal. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
