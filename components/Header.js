import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const StyledHeader = styled.header`
  padding-bottom: ${props => props.isClicked ? '340px' : '20px'};
  @media only screen and (min-width: 900px) {
    & > div {
      transform: scale(0);
    }
  }
`;

const Nav = styled.nav`
  transform: ${props => props.isClicked ? 'scaleY(1)': 'scaleY(0)'};
  @media only screen and (min-width: 900px) {
    flex-direction: row;
    max-width: 1400px;
    top: 110px;
    transform: none;
    width: 100%;
  }
`;

const Anchor = styled.a`
  @media only screen and (min-width: 900px) {
    border-bottom: ${props => props.isSelected ? '2px solid #ebd6d3' : '2px solid transparent'};
    padding: 15px 0 0 0;
  }
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
        <Link href="/" passHref>
          <Anchor isSelected={props.isSelected === 0}>Accueil</Anchor>
        </Link>
        <Link href="/graphisme" passHref>
          <Anchor isSelected={props.isSelected === 1}>Graphisme</Anchor>
        </Link>
        <Link href="/maquettes-web" passHref>
          <Anchor isSelected={props.isSelected === 2}>Maquettes Web</Anchor>
        </Link>
        <Link href="/agencement-interieur" passHref>
          <Anchor isSelected={props.isSelected === 3}>Agencement d'intérieur</Anchor>
        </Link>
        <Link href="/animation-2d" passHref>
          <Anchor isSelected={props.isSelected === 4}>Animation 2D</Anchor>
        </Link>
        <Link href="/a-propos" passHref>
          <Anchor isSelected={props.isSelected === 5}>A propos</Anchor>
        </Link>
        <Link href="/contact" passHref>
          <Anchor isSelected={props.isSelected === 6}>Contact</Anchor>
        </Link>
      </Nav>
    </StyledHeader>
  );
}

export default Header;