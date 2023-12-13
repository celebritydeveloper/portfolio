import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://celebritydev.com/icon.svg',
    brandTitle: 'Saviour Essien Components',
    brandUrl: 'https://celebritydev.com',
  },
});
