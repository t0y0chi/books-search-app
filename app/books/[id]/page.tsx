import { Metadata } from 'next';
import Image from 'next/image';
import { getBookById } from '@/lib/books';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = await getBookById(params.id);
  return {
    title: `${book.volumeInfo.title} | 書籍検索`,
    description: book.volumeInfo.description || book.volumeInfo.title,
  };
}

export default async function BookPage({ params }: Props) {
  const book = await getBookById(params.id);
  const { volumeInfo } = book;
  const thumbnail = volumeInfo.imageLinks?.thumbnail || '/no-image.png';

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            ← 検索結果に戻る
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <div className="aspect-[3/4] relative">
            <Image
              src={thumbnail}
              alt={volumeInfo.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{volumeInfo.title}</h1>
            
            {volumeInfo.authors && (
              <p className="text-lg text-muted-foreground mb-4">
                著者: {volumeInfo.authors.join(', ')}
              </p>
            )}

            <Separator className="my-4" />

            <dl className="grid gap-2">
              {volumeInfo.publisher && (
                <>
                  <dt className="font-semibold">出版社</dt>
                  <dd className="text-muted-foreground">{volumeInfo.publisher}</dd>
                </>
              )}

              {volumeInfo.publishedDate && (
                <>
                  <dt className="font-semibold">出版日</dt>
                  <dd className="text-muted-foreground">{volumeInfo.publishedDate}</dd>
                </>
              )}

              {volumeInfo.pageCount && (
                <>
                  <dt className="font-semibold">ページ数</dt>
                  <dd className="text-muted-foreground">{volumeInfo.pageCount}ページ</dd>
                </>
              )}

              {volumeInfo.categories && (
                <>
                  <dt className="font-semibold">カテゴリー</dt>
                  <dd className="text-muted-foreground">
                    {volumeInfo.categories.join(', ')}
                  </dd>
                </>
              )}

              {volumeInfo.industryIdentifiers && (
                <>
                  <dt className="font-semibold">ISBN</dt>
                  <dd className="text-muted-foreground">
                    {volumeInfo.industryIdentifiers
                      .map(identifier => identifier.identifier)
                      .join(', ')}
                  </dd>
                </>
              )}
            </dl>

            <Separator className="my-4" />

            {volumeInfo.description && (
              <div>
                <h2 className="text-xl font-semibold mb-2">概要</h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {volumeInfo.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 
