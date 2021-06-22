const pool = require('./pool')

const createUser = {req, res} => {
    const {name, email} = req.body
    pool.query( 'INSERT INTO user (name, email) VALUE ($1, $2)', [name, email], (err, results) => {
        if(err) {
            console.error(error)
            return
        }
        res.status(200).send('NEW user added')
    } )
}