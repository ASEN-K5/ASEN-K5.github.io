import { Shield } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono text-primary">$</span>
            <span>© {currentYear} {profile.name}. All rights reserved.</span>
          </div>

          {/* Legal Disclaimer */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
            <Shield className="w-4 h-4" />
            <span>For authorized security testing and educational purposes only.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
