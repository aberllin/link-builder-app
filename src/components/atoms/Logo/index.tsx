import Image from 'next/image';
import React from 'react';

const Logo: React.FC<{ size?: 'large' | 'small' }> = ({ size = 'small' }) => (
  <Image
    src={`/images/logo-devlinks-${size}.svg`}
    alt={`logo-devlinks-${size}`}
    width={size === 'large' ? 180 : 40}
    height={40}
  />
);

export default Logo;
