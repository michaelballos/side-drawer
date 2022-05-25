import React from 'react';
import { Avatar } from '@mantine/core';

export default function ProfilePicture() {
  return (
    <Avatar radius="xl" size="lg" src={require("../../particleSpace.png")} /> 
  );
}
