const _rules = [];
const verifier = {
  addRule: rule => {
    _rules.push(rule);
  },
  verify: input => {
    for (let i = 0; i < _rules.length; i++) {
      const rule = _rules[i];
      const resultObj = rule(input);
      if (!resultObj.result) {
        return resultObj;
      }
    }
    return {
      result: true,
      reason: ''
    };
  }
};

const makeVerifier = (rules) => {
  return verifier;
};

exports.makeVerifier = makeVerifier;
