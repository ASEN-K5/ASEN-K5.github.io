import { ExternalLink, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((project, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg bg-card border border-border card-hover flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <Folder className="w-5 h-5 text-primary" />
                </div>
                {project.repoUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>

              {/* Category */}
              <span className="text-xs font-mono text-primary mb-2">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-4">
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                {project.tech.map((tech, i) => (
                  <span key={i} className="skill-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
