import { useState } from 'react';
import { Menu, X, Moon, Sun, Download, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems, profile } from '@/data/profile';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(navItems.map(item => item.id), 150);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const basePath = import.meta.env.VITE_BASE || '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center gap-2 text-primary font-mono font-bold"
          >
            <Terminal className="w-5 h-5" />
            <span className="hidden sm:inline">TXN</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "nav-link",
                  activeSection === item.id && "active"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            
            <Button
              variant="terminal"
              size="sm"
              asChild
              className="hidden sm:flex"
            >
              <a href={`${basePath}assets/CV.pdf`} download>
                <Download className="w-4 h-4" />
                CV
              </a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-4 py-3 text-left text-sm font-medium transition-colors rounded-md",
                    activeSection === item.id 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <span className="font-mono text-primary mr-2">$</span>
                  {item.label}
                </button>
              ))}
              <a 
                href={`${basePath}assets/CV.pdf`}
                download
                className="px-4 py-3 text-left text-sm font-medium text-primary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
