import React from 'react';
import { SelectProfile } from '../Components';
import { useContent } from '../Hooks';
import selectionFilter from '../UTills/selection-filter';

export default function Brose({ user }) {
  const { movies } = useContent('movies');
  const { series } = useContent('series');
  const slides = selectionFilter({ movies, series });

  return (
    <>
      <SelectProfile user={user} slides={slides} />
    </>
  );
}
