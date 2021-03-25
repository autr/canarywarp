import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Link from './Link';

storiesOf('Atoms/Link', module)
  .add('with text', () => (
    <Link onClick={action('clicked')} title={'Hello Link'}>Hello Link</Link>
  ))
