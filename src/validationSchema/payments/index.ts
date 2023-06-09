import * as yup from 'yup';

export const paymentValidationSchema = yup.object().shape({
  amount_paid: yup.number().integer().required(),
  payment_date: yup.date().required(),
  invoice_id: yup.string().nullable().required(),
});
