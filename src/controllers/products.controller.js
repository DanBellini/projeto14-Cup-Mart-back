import db from "../database/db.js";

async function productsList (req,res){
    try {
        const allProducts = await db.collection('products').find();

        res.status(200).send(allProducts);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export { productsList };