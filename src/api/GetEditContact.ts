import axios from 'axios';

export const GetEditContact = async (id: string) => {
 
  const result: any = await axios
    .get(`${process.env.REACT_APP_API}/contact/${id}`)
    .then(({ data }) => {
      return data.data;
    })
    .catch((error) =>{
      
    });
  return result;
};
