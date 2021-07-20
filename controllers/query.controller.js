const queryService = require('../services/query.service')

class QueryController {
  async createQuery(req, res, next) {
    try {
      const {quest} = req.body
      const query = await queryService.create(quest)

      return res.json(query)
    } catch (error) {
      next()
    }
  }

  async getQueriesAll(res, next) {
    try {
      const queries = await queryService.getAll()

      return res.json(queries)
    } catch (error) {
      next()
    }
  }

  async getQueryOne(req, res, next) {
    try {
      const {id} = req.params
      const query = await queryService.getOne(id)

      return res.json(query)
    } catch (error) {
      next()
    }
  }

  async deleteQuery(req, res, next) {
    try {
      const {id} = req.params
      const query = await queryService.delete(id)

      return res.json(query)
    } catch (error) {
      next()
    }
  }

  async editQuery(req, res, next) {
    try {
      const {id} = req.params
      const query = await queryService.edit(id)

      return res.json(query)
    } catch (error) {
      next()
    }
  }
}

module.exports = new QueryController()
