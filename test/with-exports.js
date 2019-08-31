const assert = require('chai').assert;
const {addRule, verify} = require('../src/passwordVerifier-exports');
const { describe, it, beforeEach } = require('mocha');

describe('Password Verifier exports', () => {
  let result;
  beforeEach(() => {
    result = verify('any input');
  });
  describe('by default exports', () => {
    it('should not fail', () => {
      assert.equal(result.result, true);
    });
    it('should have an empty reason', () => {
      assert.equal(result.reason ,'');
    });
  });
  describe('Adding Simple Failing Rule exports', () => {
    let result;
    beforeEach(() => {
      const newRule = input => ({ result: false, reason: 'fake rule' });
      addRule(newRule);
      result = verify('any input');
    });
    it('the result will be false', () => {
      assert.equal(result.result, false);
    });
    it(`the reason will be the rule's reason`, () => {
      assert.equal(result.reason, 'fake rule');
    });
  });
  describe('Adding Simple Passing Rule', () => {
    let result;
    beforeEach(() => {
      const newRule = input => {
        return  { result: true, reason: 'passing rule' }};
      addRule(newRule);
      result = verify('any input');
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
