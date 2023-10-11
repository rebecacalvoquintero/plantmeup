import Head from 'next/head';
import Layout from '../components/Layout';

import utilStyles from '../styles/utils.module.css';
import { PlantResponse, PlantData } from './types';
import { useApiRequest } from './hooks/useApiRequest';
import { useEffect } from 'react';
import Plant from '../components/Plant';
import 'dotenv/config';

export default function Home() {
  const [
    fetchPlants,
    { data, loading, error }
  ] = useApiRequest<PlantResponse[]>(`https://perenual.com/api/species-list?key=${process.env.API_KEY}`, `GET`);

  useEffect(() => {
     fetchPlants();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading || !data) {
    return <p>Fetching Members...</p>;
  }

  return (
    <Layout home>
      <Head>
        <title> Plant me up</title>
      </Head>
      <section className={utilStyles.headingMd}>
        Our plants
      </section>
      <section>
        {data?.data.map((plant: PlantData) => (
          <Plant plant={plant} />
        ))
        }
      </section>
    </Layout>
  );
}