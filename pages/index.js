import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';

const Accueil = () => {
  return (
    <>
      <Header />
      <main>
        <PageTitle url="/images/accueil.webp">
          <h1>Bienvenue sur 3DKam</h1>
          <p>Graphisme</p>
          <p>Agencement d'intérieur</p>
          <p>Maquettes web</p>
        </PageTitle>
      </main>
    </>
  );
}

export default Accueil;