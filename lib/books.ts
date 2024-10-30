import axios from 'axios';
import { Book, SearchParams } from './types';

const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function searchBooks(params: SearchParams) {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        ...params,
        maxResults: params.maxResults || 10,
      },
    });

    return {
      items: response.data.items as Book[],
      totalItems: response.data.totalItems as number,
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}

export async function getBookById(id: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data as Book;
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
} 
