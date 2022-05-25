import { Button } from '@mantine/core';

export default function SettingsButton() {
  const goBack = () => {
    // set to go back to the previous page 
  };
  return (
    <Button
      className="settingsButton"
      compact
      variant='subtle'
      onClick={goBack}
    >
      &#8592;
    </Button>
  );
}


