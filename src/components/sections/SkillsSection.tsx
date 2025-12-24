import { Shield, Network, Wifi, Cpu, Code, Languages } from 'lucide-react';
import { profile } from '@/data/profile';

const skillIcons: Record<string, React.ReactNode> = {
  "Penetration Testing & Offensive Security": <Shield className="w-5 h-5" />,
  "Networking & Infrastructure": <Network className="w-5 h-5" />,
  "Wireless & Radio Security": <Wifi className="w-5 h-5" />,
  "Embedded/IoT": <Cpu className="w-5 h-5" />,
  "Programming & Tools": <Code className="w-5 h-5" />,
  "Languages": <Languages className="w-5 h-5" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(profile.skills).map(([category, skills], index) => (
            <div 
              key={category}
              className="p-6 rounded-lg bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  {skillIcons[category] || <Code className="w-5 h-5" />}
                </div>
                <h3 className="font-semibold text-foreground">{category}</h3>
              </div>
              
              <ul className="space-y-2">
                {skills.map((skill, i) => (
                  <li 
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary font-mono mt-0.5">→</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
