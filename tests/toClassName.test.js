import { expect } from 'chai';
import { toClassName } from '../src/stringUtils';

describe('toClassName', () => {
  it('Lowercases single words', () => {
    expect(toClassName('sent')).to.equal('sent');
    expect(toClassName('SENT')).to.equal('sent');
  });

  it('Adds dashes for multiple words', () => {
    expect(toClassName('Ready to send')).to.equal('ready-to-send');
  });

  it('Adds dashes for multiple words in other case patterns', () => {
    expect(toClassName('Ready to send')).to.equal('ready-to-send');
    expect(toClassName('READY_TO_SEND')).to.equal('ready-to-send');
    expect(toClassName('ready_to_send')).to.equal('ready-to-send');
    expect(toClassName('ready-to-send')).to.equal('ready-to-send');
    expect(toClassName('Ready-to-send')).to.equal('ready-to-send');
    expect(toClassName('readyToSend')).to.equal('ready-to-send');
    expect(toClassName('ReadyToSend')).to.equal('ready-to-send');
  });

  it('Adds removes unhandled characters', () => {
    expect(toClassName('Ready to send!')).to.equal('ready-to-send');
    expect(toClassName('ready, to send?')).to.equal('ready-to-send');
    expect(toClassName('ready_to_send😀')).to.equal('ready-to-send');
  })
});
