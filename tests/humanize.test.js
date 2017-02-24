import { expect } from 'chai';
import { humanize } from '../src/stringUtils';

describe('humanize', () => {
  it('Humanizes human', () => {
    expect(humanize('READY TO SEND')).to.equal('Ready to send');
    expect(humanize('SENT')).to.equal('Sent');

    expect(humanize('READY TO SEND', false)).to.equal('READY TO SEND');
    expect(humanize('SENT', false)).to.equal('SENT');
  });

  it('Humanizes snakecase', () => {
    expect(humanize('READY_TO_SEND')).to.equal('Ready to send');
    expect(humanize('READY_TO_SEND', false)).to.equal('READY TO SEND');
  });

  it('Humanizes camelcase', () => {
    expect(humanize('ReadyToSend')).to.equal('Ready to send');
    expect(humanize('readyToSend')).to.equal('Ready to send');
    expect(humanize('readyToSend', false)).to.equal('ready To Send');
  });
});
