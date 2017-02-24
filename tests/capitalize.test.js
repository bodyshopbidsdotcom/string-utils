import { expect } from 'chai';
import { capitalize } from '../src/stringUtils';

// export function capitalize(string, lowerRemaining = true) {
describe('capitalize', () => {
  it('Capitalizes and lowers remaining', () => {
    expect(capitalize('hello HOW is it going?')).to.equal('Hello how is it going?');
    expect(capitalize('hello HOW is it going?', true)).to.equal('Hello how is it going?');
    expect(capitalize('sent')).to.equal('Sent');
    expect(capitalize('SENT')).to.equal('Sent');
  });

  it('Capitalizes without lowering remaining', () => {
    expect(capitalize('hello HOW is it going?', false)).to.equal('Hello HOW is it going?');
    expect(capitalize('whatSUP', false)).to.equal('WhatSUP');
    expect(capitalize('SENT', false)).to.equal('SENT');
  });
});
