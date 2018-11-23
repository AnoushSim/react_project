import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import {toast} from "react-toastify";

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

export function existingSubtitle( obj, content, update) {

        let exists = false;
        content.forEach((elem) => {
            if(elem.subtitle === update) {
                toast.info('Already exists such subtitle!');
                exists = true;
            }
        })
        return exists;


}
