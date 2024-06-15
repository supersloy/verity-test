import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /** Put your mantine theme override here */
  components: {
    Button: {
      defaultProps: {
        variant: 'outline',
        color: 'gray',
      },
    },
  },
});
