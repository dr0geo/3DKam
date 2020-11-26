import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return(
    <header>
      <Link href="/">
        <a>
          <Image 
            src="/images/logo.webp"
            alt="Logo 3DKam"
            height={50}
            width={150}
          />
        </a>
      </Link>
      <nav>
        <Link href="/"><a>Accueil</a></Link>
        <Link href="/graphisme"><a>Graphisme</a></Link>
        <Link href="/maquettes-web"><a>Maquettes Web</a></Link>
        <Link href="/agencement-interieur"><a>Agencement d'intérieur</a></Link>
        <Link href="/animation-2d"><a>Animation 2D</a></Link>
        <Link href="/a-propos"><a>A propos</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </nav>
    </header>
  );
}

export default Header;