import { expect } from 'chai';
import { dasherize } from '../src/stringUtils';

describe('dasherize', () => {
  it('No dashes for a single word', () => {
    expect(dasherize('sent')).to.equal('sent');
    expect(dasherize('SENT')).to.equal('SENT');
  });

  it('Adds dashes instead of spaces', () => {
    expect(dasherize('The brown fox')).to.equal('The-brown-fox');
    expect(dasherize('The Brown  Fox')).to.equal('The-Brown-Fox');
  });

  it('Adds dashes instead of camel or snakecase', () => {
    expect(dasherize('theBrownFox')).to.equal('the-Brown-Fox');
    expect(dasherize('the_Brown_Fox')).to.equal('the-Brown-Fox');
  });

});
