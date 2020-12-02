import Head from 'next/head';
import Link from 'next/link';

import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import { PinkSection, WhiteSection } from '@/elements/Div';
import Picture from '@/elements/Picture';
import { IconCard } from '@/components/elements/Cards';
import { iconList, services } from '@/lib/data';

const Accueil = props => {
  return (
    <>
      <Head>
        <title>3DKam - Graphisme, Design d'intérieur et Web design</title>
      </Head>
      <Header handleClick={props.handleClick} isClicked={props.isClicked} />
      <main>
        <PageTitle url="/images/accueil.webp">
          <h1>Bienvenue sur 3DKam</h1>
          <p>Graphisme</p>
          <p>Agencement d'intérieur</p>
          <p>Maquettes web</p>
        </PageTitle>
        <PinkSection>
          <h2>"Choisir, c'est renoncer"</h2>
          <p>Chez 3DKam, on aime toucher à tout.<br />Dans le design, il n'y a souvent qu'un pas entre deux disciplines. Et comme choisir un domaine d'activité c'était renoncer à tous les autres, 3DKam a décidé de garder toutes les cordes à son arc, et de continuer à vous proposer toutes celles qui lui tiennent à cœur. </p>
          <p>Graphisme - Agencement d'espace en 3D - Maquettes Web & App, et bientôt peut être petit films d'animation en 2D !</p>
          <Link href="/a-propos"><a>En savoir plus sur 3DKam</a></Link>
        </PinkSection>
        <Picture src="/images/interieur.webp" />
        <WhiteSection>
          <h2>Pourquoi 3DKam ?</h2>
          {iconList.map(item => (
            <IconCard
              key={item.key}
              src={item.src}
              title={item.title}
              text={item.text}
              shadow={true}
            />
          ))}
        </WhiteSection>
        <PinkSection>
          <h2>De quoi avez-vous besoin aujourd'hui ?</h2>
          {services.map(service => (
            <IconCard
              key={service.key}
              src={service.src}
              title={service.title}
              page={service.page}
              height={300}
              width={250}
            />
          ))}
        </PinkSection>
      </main>
    </>
  );
}

export default Accueil;