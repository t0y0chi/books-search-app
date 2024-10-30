import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Book } from '@/lib/types';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { volumeInfo } = book;
  const thumbnail = volumeInfo.imageLinks?.thumbnail || '/no-image.png';

  return (
    <Card className="flex flex-col h-full">
      <CardContent className="flex-1 p-4">
        <div className="aspect-[3/4] relative mb-4">
          <Image
            src={thumbnail}
            alt={volumeInfo.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h3 className="font-bold line-clamp-2 mb-2">{volumeInfo.title}</h3>
        {volumeInfo.authors && (
          <p className="text-sm text-muted-foreground">
            {volumeInfo.authors.join(', ')}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={`/books/${book.id}`}
          className="w-full"
        >
          <Button variant="secondary" className="w-full">
            詳細を見る
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
} 
