import { addDoc, collection } from 'firebase/firestore'

import { db } from '../services/firebaseConnection'

class CartsController {
  async index(req, res) {
    return res.status(200).json({ ok: true })
  }

  async create(req, res) {
    const { name, price } = req.body

    try {
      const response = await addDoc(collection(db, "teste"), {
        name: name,
        price: price
      })

      //console.log(response)

      return res.status(200).json(response)
    } catch (err) {
      res.status(400).json({ "err": "erro ao cadastrar" })
      console.log(err)
    }
  }
}

export default new CartsController()