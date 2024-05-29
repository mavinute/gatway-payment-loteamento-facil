import * as Yup from 'yup'
import { addDoc, collection } from 'firebase/firestore'
import axios from 'axios'

import { db } from '../services/firebaseConnection'

const url = 'https://sandbox.asaas.com/api/v3/payments/';

class TransactionsController {
  async create(req, res) {
    try {
      // const {
      //   name,
      //   cpf,
      //   creditCardNumber,
      //   creditCardExpiration,
      //   creaditCardCvv
      // } = req.body

      // const schema = Yup.object({
      //   name: Yup.string().required(),
      //   cpf: Yup.string().required(),
      //   creditCardNumber: Yup.string().when(
      //     "paymentType",
      //     (paymentType, schema) => {
      //       paymentType === "credit_card" ? schema.required : schema
      //     }
      //   ),
      //   creditCardExpiration: Yup.string().when(
      //     "paymentType",
      //     (paymentType, schema) => {
      //       paymentType === "credit_card" ? schema.required : schema
      //     }
      //   ),
      //   creaditCardCvv: Yup.string().when(
      //     "paymentType",
      //     (paymentType, schema) => {
      //       paymentType === "credit_card" ? schema.required : schema
      //     }
      //   ),
      // })

      // if (!(await schema.isValid(req.body))) {
      //   return res.status(400).json({
      //     err: "Erro ao validar dados"
      //   })
      // }

      // const response = await addDoc(collection(db, "teste"), {
      //   name: name,
      //   cpf: cpf,
      //   type: 'creditCard',
      // })

      const options = {
        method: 'POST',
        url: 'https://sandbox.asaas.com/api/v3/payments/',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          access_token: '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDA0NDE1MjI6OiRhYWNoXzc4MDlmY2I5LWUzMTItNDJjYS1hMDU0LWZmNTVlNGYwOTM4MA=='
        },
        data: {
          customer: 'cus_000005401844',
          billingType: 'CREDIT_CARD',
          dueDate: '2023-08-30',
          value: 1,
          description: 'Pedido 056984',
          externalReference: '056984',
          creditCard: {
            holderName: 'Nome',
            number: '4350870241195308',
            expiryMonth: '05',
            expiryYear: '2025',
            ccv: '318'
          },
          creditCardHolderInfo: {
            name: 'Nome',
            email: 'john.doe@asaas.com.br',
            cpfCnpj: '000',
            postalCode: '89223-005',
            addressNumber: '277',
            addressComplement: null,
            phone: '4738010919',
            mobilePhone: '47998781877'
          }
        }
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });

      return res.json(options)
    } catch (err) {
      return res.status(500).json({ err })
    }
  }
}

export default new TransactionsController()