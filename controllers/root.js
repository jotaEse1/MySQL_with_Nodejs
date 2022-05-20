const {connection} = require('../db')

const getData = (req, res) => {
    const sql = 'SELECT * FROM money'

    connection.query(sql)
        .then(result => res.status(200).json(result))
        .catch(err => {throw new Error('No data found')})
}

const createData = (req, res) => {
    //const {currency, amount} = req.body
    //const sql = 'INSERT INTO money(currency, amount) VALUES(?,?)'
    //if you use the method above, then in query as second parameter ---> [currency, amount]

    const data = req.body
    const sql = 'INSERT INTO money SET ?'

    connection.query(sql, data)
        .then(result => res.status(200).json(result))
        .catch(err => {throw new Error('An error ocurred. Try again later.')})
}

const updateData = (req, res) => {
    const {id, ...data} = req.body
    const sql = 'UPDATE money SET ? WHERE id = ?'

    connection.query(sql, [data, id])
        .then(result => res.status(200).json(result))
        .catch(err => {throw new Error('An error ocurred. Try again later.')})
}

const deleteData = (req, res) => {
    const {id} = req.body
    const sql = 'DELETE FROM money WHERE id = ?'

    connection.query(sql, [id])
        .then(result => res.status(200).json(result))
        .catch(err => {throw new Error('An error ocurred. Try again later.')})
}

module.exports = {
    getData,
    createData,
    updateData,
    deleteData
}