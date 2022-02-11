import type { NextPage } from 'next';
import { useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';

const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Hello</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag size='s' color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  );
};

export default Home;
