import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto">
        <h2 className="section-title">Get in Touch</h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating or have a security project in mind? 
            Feel free to reach out!
          </p>

          {/* Email with copy */}
          <div className="inline-flex items-center gap-3 p-4 rounded-lg bg-card border border-border mb-8">
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-mono text-foreground">{profile.email}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyEmail}
              className="ml-2"
            >
              {copied ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button variant="terminal" size="lg" asChild>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>

            {profile.linkedin && (
              <Button variant="terminal" size="lg" asChild>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            )}

            <Button variant="hero" size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Send className="w-5 h-5" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
