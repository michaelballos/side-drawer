import { Button } from '@mantine/core';

/**
 * returns a button with a loading indicator or a normal button 
 * @param {Boolean} loading states if the button is loading
 * @returns a button with a loading indicator or a normal button 
 */
export default function LoadingButton({
  label,
  size,
  loading,
}: {
  label: string;
  size: 'sm' | 'md' | 'lg';
  loading: boolean;
}): JSX.Element {

  return (
      <Button 
        variant="subtle" 
        type="submit" 
        {...{loading}} 
        loaderPosition="right"
        size={size}
      >
        {label}
      </Button>
  );
}
