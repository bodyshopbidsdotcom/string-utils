import { expect } from 'chai';
import { formatPhone } from '../src/stringUtils';

describe('formatPhone', () => {
  it('Formats numbers', () => {
    expect(formatPhone('5555555555')).to.equal('(555) 555-5555');
    expect(formatPhone('(555) 555-5555')).to.equal('(555) 555-5555');
    expect(formatPhone('555-555-5555')).to.equal('(555) 555-5555');
    expect(formatPhone('555.555.5555')).to.equal('(555) 555-5555');
  });
});
