import type { NextPage } from 'next';
import { Htag, Button, P } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
    </>
  );
};

export default Home;
