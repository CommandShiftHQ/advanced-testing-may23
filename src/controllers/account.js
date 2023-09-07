const db = require('../db')

exports.create = async (req, res) => {
  const data = await db.query("INSERT INTO Users(email, password) VALUES ($1, $2) RETURNING *",
  ["email"],
  ["password"])
  res.status(201).json(data.rows[0])
}