const __rules = [];
exports.clearRules = ()=>  __rules.length=0;
exports.addRule = rule =>  __rules.push(rule);
exports.verify = input => {
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
    };
