import { Book } from '@/lib/types';
import { BookCard } from './BookCard';

interface BookListProps {
  books: Book[];
}

export function BookList({ books }: BookListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
} 
