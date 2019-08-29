const makeVerifier = (rules) => {
  const _rules = [];
  const verifier = {
    addRule: function (rule) {
      _rules.push(rule);
    },
    verify: function (input) {
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

  return verifier;
};

exports.makeVerifier = makeVerifier;
