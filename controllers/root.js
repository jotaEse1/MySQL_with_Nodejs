const {connection} = require('../db')

const getData = (req, res) => {
    const sql = 'SELECT * FROM money'

    connection.query(sql, (err, result) => {
        if(err) throw err

        res.status(200).json(result)
    })
}

const createData = (req, res) => {
    //const {currency, amount} = req.body
    //const sql = 'INSERT INTO money(currency, amount) VALUES(?,?)'
    //if you use the method above, then in query as second parameter ---> [currency, amount]

    const data = req.body
    const sql = 'INSERT INTO money SET ?'

    connection.query(sql, data, (err, result) => {
        if(err) throw err;

        res.status(201).json(result)
    })
}

const updateData = (req, res) => {
    const {id, ...data} = req.body
    const sql = 'UPDATE money SET ? WHERE id = ?'

    connection.query(sql, [data, id], (err, result) => {
        if(err) throw err;

        res.status(200).json(result)
    })
}

const deleteData = (req, res) => {
    const {id} = req.body
    const sql = 'DELETE FROM money WHERE id = ?'

    connection.query(sql, [id], (err, result) => {
        if(err) throw err;

        res.status(200).json(result)
    })
}

module.exports = {
    getData,
    createData,
    updateData,
    deleteData
}