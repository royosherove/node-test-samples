const Verifier = () => {
  const __rules = [];
  return {
    addRule: rule =>  __rules.push(rule) ,
    verify: input => {
      const reducer = ({errors, reasons}, rule) => {
        const result = rule(input);
        if (result.result === false) {
          return {errors:[...errors, result], reasons:reasons + result.reason}
        }
          return {errors, reasons}
      };
        const payload = {errors:[], reasons: ''};
        const reduced =  __rules.reduce(reducer, payload);
        return { result: reduced.errors.length===0,
            reason: reduced.reasons
        };
    },
  };
};

const makeVerifier = () => {
  return Object.assign({}, Verifier());
};

exports.makeVerifier = makeVerifier;
