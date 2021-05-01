import axios from 'axios';
// import { ContactDetailModelType } from '../models/ContactModel';

export const GetContact = async () => {
 
  const result: any = await axios
    .get(`${process.env.REACT_APP_API}/contact`)
    .then(({ data }) => {
      return data.data;
    })
    .catch((error) =>{
      
    });
  return result;
};
