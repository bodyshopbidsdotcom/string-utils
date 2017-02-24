import { expect } from 'chai';
import { formatDollars } from '../src/stringUtils';

describe('formatDollars', () => {
  it('Formats money', () => {
    expect(formatDollars(10)).to.equal('$10.00');
    expect(formatDollars(1.023)).to.equal('$1.02');
    expect(formatDollars('2.11')).to.equal('$2.11');
    expect(formatDollars('2.101')).to.equal('$2.10');
  });
});
