import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

/*Check all fields in object and return object errors with same field name for all required fields*/
export function validateInput(data) {
    let errors = {};

    Object.keys(data).forEach(key => {

        if (data[key] === undefined || data[key] === null ){
            errors[key] = true;
        }
        else if (Validator.isEmpty(data[key])){
            errors[key] = true;
        }
    });

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
