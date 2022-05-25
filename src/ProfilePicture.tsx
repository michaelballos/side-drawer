import React from 'react';
import { Image } from '@mantine/core';

export default function ProfilePicture() {
  return (
    <Image
      width={55}
      height={55}
    >
      <img 
        src='../public/particle-space.png'
        alt='Particle Space'
      />
    </Image> 
  );
}