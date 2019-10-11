module.exports = {
    getQuantity: (req, res, next) => {
        const db = req.app.get('db')

        db.get_quantity()
            .then(dbResponse => res.status(200).send(dbRespnse))
            .catch(err => {
                res.status(500).send({errorMessage: 'Something went wrong!'})
            })
    },
}