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
          {profile.achievements.map((achievement, index) => {
            const content = (
              <>
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
              </>
            );

            const baseClasses = "p-6 rounded-lg bg-card border border-border card-hover flex items-start gap-4";

            if (achievement.link) {
              return (
                <a
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseClasses} cursor-pointer transition-transform hover:scale-[1.02]`}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={index} className={baseClasses}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
