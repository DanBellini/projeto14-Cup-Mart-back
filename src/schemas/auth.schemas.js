import joi from "joi";

const authRegisterSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    endress: joi.string().required(),
    city: joi.string().required(),
    endressNumber: joi.string().required(),
    password: joi.string().required()
});

const authLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export { authRegisterSchema, authLoginSchema };