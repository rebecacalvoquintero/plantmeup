import Head from 'next/head';
import Layout from '../components/Layout';

import utilStyles from '../styles/utils.module.css';
import { PlantResponse, PlantData } from './types';
import { useApiRequest } from './hooks/useApiRequest';
import { useEffect } from 'react';
import Plant from '../components/Plant';
import 'dotenv/config';

export async function getStaticProps() {
  const apiKey = process.env.API_KEY
  return {
    props: {
    apiKey
    }
  }
}

export default function Home({apiKey}) {
  const [
    fetchPlants,
    { data, loading, error }
  ] = useApiRequest<PlantResponse[]>(`https://perenual.com/api/species-list?key=${apiKey}`, `GET`);

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
          <Plant key={plant.id} plant={plant} />
        ))
        }
      </section>
    </Layout>
  );
}