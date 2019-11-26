module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.query('select * from products')
        .then(result => {
            res.send(result)
        })
        // console.log(result)
    }
    
}

