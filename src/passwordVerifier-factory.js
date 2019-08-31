const verify = (rules,input) => {
    const payload = {errors: [], reasons: '', input};
    const reduced = rules.reduce(reducer, payload);
    return {
        result: reduced.errors.length === 0,
        reason: reduced.reasons
    };
};

const reducer = ({errors, reasons, input}, rule) => {
    const result = rule(input);
    if (result.result === false) {
        return {errors:[...errors, result], reasons:reasons + result.reason}
    }
    return {errors, reasons, input}
};
const Verifier = () => {
    const __rules = [];
    return {
        addRule: rule =>  __rules.push(rule) ,
        verify: input => verify(__rules, input),
    };
};

const makeVerifier = () => {
    return Object.assign({}, Verifier());
};

exports.makeVerifier = makeVerifier;
