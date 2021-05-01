import axios from 'axios';
import { ContactDetailModelType, PostPhotoModelType } from '../models/ContactModel';

export const PostEditPhoto = async (
  file: PostPhotoModelType,
  id: string
) => {

  const result: any = await axios
    .put(`https://simple-contact-crud.herokuapp.com/contact/${id}`, 
      {
        photo: file.raw
      }
    )
    .then(({ data }) => {
      console.log('hasil', data);
      return data;
    })
    .catch((error) =>{
      
    });
  return result;
};
