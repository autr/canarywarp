import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from './Form';

storiesOf('Molecules/Form', module)
  .add('todo', () => (
    <Form>...</Form>
  ))
