import {addons} from '@storybook/preview-api';
import isChromatic from 'chromatic/isChromatic';
import {DARK_MODE_EVENT_NAME} from 'storybook-dark-mode';
import WrapDecorator from '../decorators/WrapDecorator';
import ChromaticDecorator from './decorator';

// render dark mode in chromatic snapshots
export const isChromaticSnapshot =
  isChromatic() ||
  (process.env.NODE_ENV === 'production' ?
    [...(window?.location.ancestorOrigins || {length: 0})].some((origin) =>
      origin.includes('www.chromatic.com')
    )
    // @ts-ignore
  : false);

if (!isChromaticSnapshot) {
  // listen for dark mode toggle changes
  const channel = addons.getChannel();
  channel.on(DARK_MODE_EVENT_NAME, (isDark: boolean) => {
    // eslint-disable-next-line unicorn/prevent-abbreviations
    const docsStory = document.querySelector('.docs-story');

    if (isDark) {
      document.documentElement.classList.add('dark');
      docsStory?.classList.add('bg-grey-900');
      docsStory?.classList.add('text-white');
    } else {
      document.documentElement.classList.remove('dark');
      docsStory?.classList.remove('bg-grey-900');
      docsStory?.classList.remove('text-white');
    }
  });
}

export const decorators =
  isChromaticSnapshot ? [WrapDecorator, ChromaticDecorator] : [WrapDecorator];
