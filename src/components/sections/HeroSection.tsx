import { Github, Mail, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';

export function HeroSection() {
  const basePath = import.meta.env.VITE_BASE || '/';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Terminal intro */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-border font-mono text-sm">
              <span className="text-muted-foreground">$</span>
              <span className="text-muted-foreground">whoami</span>
              <span className="text-primary">→</span>
              <span className="text-foreground">{profile.name}</span>
              <span className="terminal-cursor" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up animation-delay-100">
            <span className="gradient-text">{profile.name}</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl font-mono text-primary mb-4 animate-fade-in-up animation-delay-200">
            {profile.role}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6 animate-fade-in-up animation-delay-300">
            <MapPin className="w-4 h-4" />
            <span>{profile.location}</span>
          </div>

          {/* Intro */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
            {profile.intro}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-500">
            <Button variant="hero" size="lg" asChild>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            
            <Button variant="hero-outline" size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            
            <Button variant="terminal" size="lg" asChild>
              <a href={`${basePath}assets/CV.pdf`} download>
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-6 h-10 mx-auto rounded-full border-2 border-border flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
