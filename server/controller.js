module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.query('select * from products')
        .then(result => {
            res.send(result)
        })
        // console.log(result)
    },
     
    createItem(req, res){
        console.log(req.body)
        const db = req.app.get('db');
        const data = req.body;
        db.products.insert({name: data.product, price: data.price, image_url: data.Image})
        .then(result => {
            console.log(result)
            res.send(result)
        })
    },
    
    deleteItem(req,res){
        
        const id = req.params.id;
        const db = req.app.get('db');
        console.log({id})
        db.products.destroy({
            id: id
        })
        .then(result => {
            res.send(result)
        })
    }
    
}

