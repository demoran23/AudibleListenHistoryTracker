import { Image } from '@suid/icons-material';
import {
  Box,
  Card,
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
    <Card sx={{ display: 'flex', padding: 4 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={book.imageUrl}
        alt={book.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="subtitle2">{book.title}</Typography>
          <Typography>{ago}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
