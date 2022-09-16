import db from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuid} from "uuid";
import { authRegisterSchema, authLoginSchema } from "../schemas/auth.schemas.js";

async function registerUser (req, res) {

    try {
        const newUser = req.body;

        const validationSchema = authRegisterSchema.validate(newUser);

        if(validationSchema.error){
            return res.status(422).send("Todos os campos são obrigatórios");
        }

        const passwordHash = bcrypt.hashSync(newUser.password, 10);
        
        const emailAlreadyRegistered = await db.collection('users').findOne({email: newUser.email});

        if(emailAlreadyRegistered){
            return res.status(422).send("Esse email não pode ser registrado");
        }
        
        await db.collection('users').insertOne({
            name: newUser.name,
            email: newUser.email,
            password: passwordHash,
            endress: newUser.endress,
            city: newUser.city,
            endressNumber: newUser.endressNumber
        });

        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

async function loginUser (req, res) {
    
    try {
        const login = req.body;

        const validationSchema = authLoginSchema.validate(login);

        if(validationSchema.error){
            return res.status(422).send("Digite o email e a senha");
        }

        const user = await db.collection('users').findOne({ email: login.email});

        if(!user){
            return res.status(422).send("Email ou Senha inválidos");
        }

        const passwordIsValid = bcrypt.compareSync(login.password, user.password);

        if(!passwordIsValid){
            return res.status(422).send("Email ou Senha inválidos");
        }
        const token = uuid();

        await db.collection('sessions').insertOne({
            token,
            user: user._id,
        });

        return res.status(200).send({token, name: user.name});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}


export {loginUser, registerUser}