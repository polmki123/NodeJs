const pool = require('./pool')

const delete = (req, res) =>{
    const id = parseInt(req.params.id)    
    pool.query('DELETE FROM users WHERE id = $1', [id], 
        (err, results) => {
            if(err) {
                console.error(error)
                return
            }
            res.status(200).send("Delete Complete")
        })
}