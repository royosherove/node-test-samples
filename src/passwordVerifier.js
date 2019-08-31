const Verifier = () => {
  const __rules = [];
  return {
    addRule: rule =>  __rules.push(rule) ,
    verify: input => {
      for (let i = 0; i < __rules.length; i++) {
        const rule = __rules[i];
        const resultObj = rule(input);
        if (resultObj.result === false) {
          return resultObj;
        }
      }
      return {
        result: true,
        reason: ''
      };
    },
  };
};

const makeVerifier = () => {
  return Object.assign({}, Verifier());
};

exports.makeVerifier = makeVerifier;
