import { render } from '@testing-library/react';

import Stack from './stack';

describe('Stack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Stack><div/><div/><div/><div/></Stack>);
    expect(baseElement).toBeTruthy();
  });
});
