import { Trophy, Award } from 'lucide-react';
import { profile } from '@/data/profile';

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy className="w-6 h-6" />,
  certificate: <Award className="w-6 h-6" />,
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Achievements</h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {profile.achievements.map((achievement, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-card border border-border card-hover flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                {iconMap[achievement.icon] || <Trophy className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.organization}
                </p>
                <span className="text-xs font-mono text-primary">
                  {achievement.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
