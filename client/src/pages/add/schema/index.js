import * as Yup from 'yup';

export const AddProductSchema = Yup.object().shape({
    img: Yup.string()
      .url('must be url')
      .required('Required'),
      name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
      price: Yup.number()
      .min(2, 'Too Short!')
      .max(859, 'Too Long!')
      .required('Required'),
  });