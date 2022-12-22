import { Image } from '@suid/icons-material';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@suid/material';
import { Component } from 'solid-js';
import { Book } from 'store/books';
import { formatDistance } from 'date-fns';

export interface BookCardProps {
  book: Book;
}
export const BookCard: Component<BookCardProps> = ({ book }) => {
  const ago =
    book.listenDate &&
    formatDistance(new Date(book.listenDate), Date.now(), {
      addSuffix: true,
    });
  return (
    <Card sx={{ display: 'flex', margin: 4, padding: 2, width: 250 }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <CardMedia
          component="img"
          sx={{ maxWidth: 200 }}
          image={book.imageUrl}
          alt={book.title}
        />
        <Typography
          variant="body2"
          component={'span'}
          sx={{ display: 'inline-block' }}
        >
          {book.title}
        </Typography>
        <Typography variant={'body2'}>{ago}</Typography>
      </CardContent>
    </Card>
  );
};
