const express = require("express");
const router = express.Router();
const Product = require("../Product.model.js")
const cloudinary = require("cloudinary")
cloudinary.config({
    cloud_name: 'dohj3wr2c',
    api_key: '195868556154949',
    api_secret: '***************************'
});
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.find(); // Tüm ürünleri al
        console.log("req.body: ", req.body);

        res.status(200).json(products); // Ürünleri JSON formatında yanıtla
    } catch (error) {
        next(error); // Hata oluşursa hatayı sonraki middleware'e ilet
    }
})
router.post('/', async (req, res, next) => {
    const product = new Product({
        name: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
        model: req.body.model,
        color: req.body.color

    })
    console.log("req.body: ", req.body);
    cloudinary.v2.uploader.upload(req.body.image,
        { public_id: "olympic_flag" },
        function (error, result) { console.log(result); });
    await product.save()
        .then(result => {
            console.log(result);
            res.send(result)
        })
        .catch(err => {
            console.log(err.message);
        })
    const user = await User.findById({ _id: game.user_id });
    user.gameInfo.push(game);
    await user.save();

})

router.get('/:id', (req, res, next) => {
    res.send("gett a single product")
})

router.delete('/:id', (req, res, next) => {
    res.send("Delete a product")
})
router.patch('/:id', (req, res, next) => {
    res.send("Update a product")
})
module.exports = router