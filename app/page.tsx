'use client';

import { useState } from 'react';
import { SearchForm } from '@/components/SearchForm';
import { BookList } from '@/components/BookList';
import { searchBooks } from '@/lib/books';
import { Book, SearchParams } from '@/lib/types';

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (params: SearchParams) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await searchBooks(params);
      setBooks(result.items || []);
    } catch (err) {
      setError('検索中にエラーが発生しました。もう一度お試しください。');
      setBooks([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <div className="bg-gradient-to-b from-muted/50 pb-8 pt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            書籍を探す
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            タイトル、著者、ISBNで検索できます
          </p>
          <div className="flex justify-center mb-8">
            <SearchForm onSearch={handleSearch} isLoading={isLoading} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div>
        )}
        
        {isLoading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
            <p className="mt-4 text-muted-foreground">検索中...</p>
          </div>
        ) : books.length > 0 ? (
          <BookList books={books} />
        ) : (
          <div className="text-center text-muted-foreground">
            {error ? null : "検索結果がここに表示されます"}
          </div>
        )}
      </div>
    </main>
  );
}
