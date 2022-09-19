import { ObjectId } from "mongodb";
import db from "../database/db.js";

async function productsList (req,res){
    try {
        const allProducts = await db.collection('products').find().toArray();
        console.log(allProducts)
        res.status(200).send(allProducts);
        return
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

async function getProduct (req, res) {
    const {productId} = req.params;

    try {
        const product = await db.collection('products').findOne({_id: ObjectId(productId)});

        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export { productsList, getProduct };