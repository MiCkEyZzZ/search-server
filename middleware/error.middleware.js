const ApiError = require('../exceptions/api.error')

module.exports = (error, req, res) => {
  console.log(error)
  if (error instanceof ApiError) {
    return res.status(error.status).json({message: error.message, errors: error.errors})
  }

  return res.status(500).json({message: 'Something wrong, please try again.'})
}
