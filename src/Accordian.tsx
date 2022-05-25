import React from 'react';
import './SideDrawer.scss';
import { Accordion } from '@mantine/core';

export default function Accordian() {

  return (
     <Accordion>
      <Accordion.Item label="About">
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Item>
      <Accordion.Item label="Timeline">
        Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
      </Accordion.Item>
      <Accordion.Item label="Deals">
        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
      </Accordion.Item>
      <Accordion.Item label="Tasks">
        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
      </Accordion.Item>
      <Accordion.Item label="Tickets">
        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
      </Accordion.Item>
    </Accordion>
  )
}
