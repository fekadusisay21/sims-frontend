import {Form as veeForm,Field as veeField,defineRule,ErrorMessage } from 'vee-validate'
import { required,min,max,alpha_spaces as alphaSpaces,email,confirmed} from '@vee-validate/rules/'
export default {
    install(app) {
        app.component('veeForm',veeForm);
        app.component('veeField',veeField);
        app.component('ErrorMessage',ErrorMessage);

        defineRule('required',required)
        defineRule('min',min)
        defineRule('max',max)
        defineRule('email',email)
        defineRule('confirmed',confirmed)
        defineRule('alpha_Spaces',alphaSpaces)


    },
};