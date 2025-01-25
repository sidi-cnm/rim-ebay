// .storybook/preview.ts
import { useState, useEffect } from 'react';
import { Preview } from '@storybook/react';
import mockRouter from 'next-router-mock'; // Pour simuler le router avec next-router-mock

const preview: Preview = {
  decorators: [
    (Story: any) => {
      // Utilisation de next-router-mock pour simuler un Router
      const [router, setRouter] = useState(mockRouter);

      useEffect(() => {
        // Mettez à jour le router si nécessaire
        setRouter({
          pathname: '/',
          query: {},
          asPath: '/',
        });
      }, []);

      // Retourner un élément React valide ici
      return <Story />;
    },
  ],
  parameters: {
    actions: {
      argTypes: {
        onClick: { action: 'clicked' },
        onSubmit: { action: 'submitted' },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
