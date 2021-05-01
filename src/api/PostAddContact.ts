import axios from 'axios';
import { ContactDetailModelType, PostPhotoModelType } from '../models/ContactModel';

export const PostAddContact = async (
  editContactForm: ContactDetailModelType,
  file: PostPhotoModelType,
  id: string
) => {

  // const formData = new FormData();
  // formData.append('firstName', editContactForm.firstName);
  // formData.append('lastName', editContactForm.lastName);
  // formData.append('age', editContactForm.age.toString());
  // formData.append('photo', file.raw);

  const result: any = await axios
    .post(`${process.env.REACT_APP_API}/contact`, 
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
