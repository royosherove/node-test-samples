module.exports = class Verifier {
    constructor() {
        this.__rules = [];
    };

    addRule(rule) {
        this.__rules.push(rule);
    }
    verify(input) {
        const payload = {errors: [], reasons: '', input};
        const reduced = this.__rules.reduce(this.reducer, payload);
        return {
            result: reduced.errors.length === 0,
            reason: reduced.reasons
        };
    };

    reducer({errors, reasons, input}, rule) {
        const result = rule(input);
        if (result.result === false) {
            return {errors: [...errors, result], reasons: reasons + result.reason};
        }
        return {errors, reasons, input};
    };

};


