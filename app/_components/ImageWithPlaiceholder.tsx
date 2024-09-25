import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

type ImageWithPlaiceholderProps = {
  src: string;
  alt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

const ImageWithPlaiceholder = async ({
  src,
  alt,
  ...rest
}: ImageWithPlaiceholderProps) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      blurDataURL={base64}
      alt={alt}
      placeholder='blur'
      {...rest}
    />
  );
};

export default ImageWithPlaiceholder;
