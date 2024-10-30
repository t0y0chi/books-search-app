'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">エラーが発生しました</h1>
        <p className="text-muted-foreground mb-4">
          書籍の情報を取得できませんでした。
        </p>
        <Link href="/">
          <Button>トップページに戻る</Button>
        </Link>
      </div>
    </div>
  );
} 
