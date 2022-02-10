import type { NextPage } from 'next';
import { Htag, Button } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
    </>
  );
};

export default Home;
