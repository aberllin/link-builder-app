import Image from 'next/image';
import React from 'react';

export type IllustrationName = 'empty' | 'phone-mockup';

const Illustration: React.FC<{ name: IllustrationName }> = ({ name }) => (
  <Image src={`/images/illustration-${name}.svg`} alt={name} />
);

export default Illustration;
