import Image from 'next/image';

const Picture = ({ src }) => {
  return (
    <Image
      src={src}
      alt=""
      height={600}
      width={1123}
      quality={100}
    />
  );
}

export default Picture;