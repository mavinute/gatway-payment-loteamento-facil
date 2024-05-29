import * as Yup from 'yup'
import { addDoc, collection } from 'firebase/firestore'
import axios from 'axios'

import { db } from '../services/firebaseConnection'

class TransactionsPixController {
  async create(req, res) {
    try {

      const resp = await addDoc(collection(db, "teste"), {
        typePayment: 'pix'
      })

      const options = {
        method: 'GET',
        url: 'https://sandbox.asaas.com/api/v3/payments/aaa/pixQrCode',
        headers: {
          accept: 'application/json',
          access_token: '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDA0NDE1MjI6OiRhYWNoXzljMTAxNGE1LTQ1ZmQtNGM0Ny04ZDk2LWNiNDRiNDg4Yzg1Yg=='
        }
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          //const aaa = response.data
        })
        .catch(function (error) {
          console.error(error);
        });

      return res.status(200).end()
    } catch (err) {
      console.log(err)
      return res.status(500).json({ err: "erro ao gerar pix" })
    }
  }
}

export default new TransactionsPixController()