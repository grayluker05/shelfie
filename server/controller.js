module.exports = {
    getQuantity: (req, res, next) => {
        const db = req.app.get('db')

        db.get_quantity()
            .then(dbResponse => res.status(200).send(dbRespnse))
            .catch(err => {
                res.status(500).send({errorMessage: 'Something went wrong!'})
            })
    },

    create : ( req, res ) => {
        const dbInstance = req.app.get('db')
        const { image, name, price } = req.body
        dbInstance.create_product([image, name, price])
        .then( () => res.sendStatus(200) )
    },

    delete : ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params

        dbInstance.delete_product( id )
        .then( () => res.sendStatus(200))
    }
}