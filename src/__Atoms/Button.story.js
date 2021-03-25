import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import README from './../_docs/Button.md';
import { withReadme } from 'storybook-readme';

storiesOf('Atoms/Button', module)
  .addDecorator(withReadme([README]))
  .addWithJSX('primary', () => (
    <Button onClick={() => { alert('Hello World') }} type={'primary'} >Hello World</Button>
  ))
  .addWithJSX('secondary', () => (
    <Button onClick={() => { alert('Hello World') }} type={'secondary'} >Hello World</Button>
  ))
  .addWithJSX('spinner', () => (
    <Button onClick={() => { alert('Hello World') }} spinner={true} >Hello World</Button>
  ))
  .addWithJSX('disabled', () => (
    <Button onClick={() => { alert('Hello World') }} disabled={true}>Hello World</Button>
  ))
  .addWithJSX('custom icon', () => (
    <Button onClick={() => { alert('Hello World') }} icon={'_logos/rl-logo-white.svg'}>Hello World</Button>
  ))
  .addWithJSX('custom text', () => (
    <Button onClick={() => { alert('Hello World') }}><em>Hello</em><strong>World</strong></Button>
  ))
