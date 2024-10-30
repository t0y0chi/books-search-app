import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">Book Search</span>
          </Link>
          <nav>
            <Button variant="ghost" asChild>
              <Link href="/">
                ホーム
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
} 
