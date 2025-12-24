import { Target, Crosshair, GraduationCap, BookOpen } from 'lucide-react';
import { profile } from '@/data/profile';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>

        {/* Goals */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-lg bg-card border border-border card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-md bg-primary/10">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Short-term Goal</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {profile.about.shortTerm}
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-md bg-accent/10">
                <Crosshair className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Long-term Goal</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {profile.about.longTerm}
            </p>
          </div>
        </div>

        {/* Education */}
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          Education
        </h3>

        <div className="space-y-4">
          {profile.education.map((edu, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-card border border-border card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                <span className="text-sm font-mono text-primary">{edu.period}</span>
              </div>
              <p className="text-muted-foreground mb-3">{edu.degree}</p>
              
              {edu.coursework && (
                <div className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="skill-tag text-xs">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
