// EditForm.stories.tsx
import React, { useState, useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EditForm, { EditFormProps } from './EditForm';  // Assurez-vous que le chemin est correct
import { I18nProviderClient } from '@/locales/client';  // Assurez-vous que le chemin est correct pour I18nProvider
import mockRouter from 'next-router-mock';  // Utiliser next-router-mock pour simuler le router

// Charger les traductions dynamiquement
const loadTranslations = async (lang: string) => {
  switch (lang) {
    case 'fr':
      return import('@/locales/translations/fr');
    default:
      return import('@/locales/translations/ar'); // Langue par défaut
  }
};

export default {
  title: 'Components/EditForm',
  component: EditForm,
} as Meta<EditFormProps>;

const Template: StoryFn<EditFormProps> = (args) => {
  const [translations, setTranslations] = useState<any>(null);
  const lang = args.lang || 'fr'; // Utiliser la langue passée dans args ou par défaut 'fr'

  // Simuler le Router ici pour cette histoire
  const [router] = useState(mockRouter);

  useEffect(() => {
    const fetchTranslations = async () => {
      const loadedTranslations = await loadTranslations(lang);
      setTranslations(loadedTranslations);
    };
    fetchTranslations();
  }, [lang]);

  if (!translations) {
    return <div>Loading...</div>; // Attendre le chargement des traductions
  }

  return (
    <I18nProviderClient locale={lang}>
      <EditForm {...args} />
    </I18nProviderClient>
  );
};

// Définir les arguments pour l'histoire Default
export const Default = Template.bind({});
Default.args = {
  lang: 'fr', // Propriétés requises par EditForm
  annonceId: 123,
  userid: 1,
  initialData: {
    typeAnnonceId: 1,
    categorieId: 2,
    subcategorieId: 3,
    description: 'Sample description',
    price: 100,
  },
  onClose: () => console.log('Closed'),
};
