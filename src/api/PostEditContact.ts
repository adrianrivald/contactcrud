import axios from 'axios';
import { ContactDetailModelType, PostPhotoModelType } from '../models/ContactModel';

export const PostEditContact = async (
  editContactForm: ContactDetailModelType,
  file: PostPhotoModelType,
  id: string
) => {

  const result: any = await axios
    .put(`https://simple-contact-crud.herokuapp.com/contact/${id}`, 
      {
        firstName : editContactForm.firstName,
        lastName: editContactForm.lastName,
        age: editContactForm.age,
        photo: file.preview
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
