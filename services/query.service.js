const QueryModel = require('../models/query.model')

class QueryService {
  async create(quest) {
    const query = await QueryModel
  }

  async getAll() {
    const queries = await QueryModel.find()

    return queries
  }

  async getOne(id) {
    const query = await QueryModel.findById(id)

    return query
  }

  async delete(id) {
    const query = await QueryModel.findById(id)

    return query
  }

  async edit(id) {
    const queryUpdate = await QueryModel.findById(id)

    return queryUpdate
  }
}

module.exports = new QueryService()
