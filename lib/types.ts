export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount?: number;
    categories?: string[];
    imageLinks?: {
      thumbnail: string;
      smallThumbnail: string;
    };
    industryIdentifiers?: Array<{
      type: string;
      identifier: string;
    }>;
  };
}

export interface SearchParams {
  q: string;
  startIndex?: number;
  maxResults?: number;
  orderBy?: 'relevance' | 'newest';
} 
