import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const IconCardLayout = styled.div`
  align-items: center;
  background: ${props => props.shadow ? 'hsla(232deg, 1%, 89%, 0.6)' : 'hsla(0deg, 0%, 0%, 0)'};
  border-radius: 5px;
  box-shadow: ${props => props.shadow ? '0 0 2px 2px #e1e1e1' : 'none'};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: ${props => props.shadow ? '40px 20px' : '15px 20px'};
  max-width: 400px;
  min-height: 360px;
  padding: 20px;
  text-align: center;
  & > a {
    background-color: #2a2a2a;
    border-radius: 5px; 
    color: #ebd6d3;
    font-weight: 700;
    margin-bottom: 30px;
    min-width: 110px;
    padding: 12px 20px 5px 20px;
    text-align: center;
  }
`;

export const IconCard = props => {
  return (
    <IconCardLayout shadow={props.shadow}>
      <div>
        <Image
          src={props.src}
          alt=""
          height={props.height || 100}
          width={props.width || 100}
        />
      </div>
      <h3>{props.title}</h3>
      {props.text && <p>{props.text}</p>}
      {props.page && <Link href={props.page}><a>Voir</a></Link>}
    </IconCardLayout>
  );
}