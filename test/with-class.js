const assert = require('chai').assert;
const Verifier = require('../src/passwordVerifier-class');
const { describe, it, beforeEach } = require('mocha');

describe('Password Verifier class', () => {
  let verifier, result;
  beforeEach(() => {
    verifier = new Verifier();
    result = verifier.verify('any input');
  });
  describe('by default class', () => {
    it('should not fail', () => {
      assert.equal(result.result, true);
    });
    it('should have an empty reason', () => {
      assert.equal(result.reason, '');
    });
  });
  describe('Adding Simple Failing Rule class', () => {
    let result;
    beforeEach(() => {
      const newRule = input => ({ result: false, reason: 'fake rule' });
      verifier.addRule(newRule);
      result = verifier.verify('any input');
    });
    it('the result will be false', () => {
      assert.equal(result.result, false);
    });
    it(`the reason will be the rule's reason`, () => {
      assert.equal(result.reason, 'fake rule');
    });
  });
  describe('Adding Simple Passing Rule class', () => {
    let result;
    beforeEach(() => {
      const newRule = input => {
        return { result: true, reason: 'passing rule' };
      };
      verifier.addRule(newRule);
      result = verifier.verify('any input');
    });
    it('the result will be true', () => {
      assert.equal(result.result, true);
    });
    it('the reason will be empty', () => {
      // assert(result.reason === '');
      assert.equal(result.reason, '');
    });
  });
});
