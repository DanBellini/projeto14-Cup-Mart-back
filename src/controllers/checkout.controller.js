import { ObjectId } from "mongodb";
import db from "../database/db.js";

async function getCheckout (req, res){
    const id = res.locals.user;

    try {
        
        const checkout =  await db.collection('users').findOne({_id: id._id});

        delete checkout._id;
        delete checkout.password;

        res.status(200).send(checkout);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

};

async function checkoutConfirm (req, res) {
    const { name, email, endress, endressNumber, products, value, payment } = req.body;

    const haveProducts = (products.length > 0);

    if (!haveProducts) {
        res.status(422).send("choose products to checkout")
        return
    }

    try {

        const checkoutConfirmed = db.collection('sales').insertOne({
            name,
            email,
            endress,
            endressNumber,
            value,
            payment
        });

        return res.sendStatus(201);
        
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export { getCheckout }