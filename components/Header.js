import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const StyledHeader = styled.header`
  padding-bottom: ${props => props.isClicked ? '300px' : '40px'};
`;

const Nav = styled.nav`
  transform: ${props => props.isClicked ? 'scaleY(1)': 'scaleY(0)'};
`;

const Header = props => {
  return(
    <StyledHeader isClicked={props.isClicked}>
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
      <div>
        <Image
          src="/images/icons/menu.png"
          alt=""
          height={30}
          width={30} 
          onClick={props.handleClick}
        />
      </div>
      <Nav isClicked={props.isClicked}>
        <Link href="/"><a>Accueil</a></Link>
        <Link href="/graphisme"><a>Graphisme</a></Link>
        <Link href="/maquettes-web"><a>Maquettes Web</a></Link>
        <Link href="/agencement-interieur"><a>Agencement d'intérieur</a></Link>
        <Link href="/animation-2d"><a>Animation 2D</a></Link>
        <Link href="/a-propos"><a>A propos</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </Nav>
    </StyledHeader>
  );
}

export default Header;