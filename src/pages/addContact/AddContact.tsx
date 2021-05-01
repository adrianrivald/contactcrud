import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './AddContact.scss'
import Menubar from '../../components/menuBar/MenuBar';
import { useDispatch, useSelector } from 'react-redux';
import { GetContact } from '../../api/GetContact';
import { ContactDetailModelType, PostPhotoModelType } from '../../models/ContactModel';
import { defaultAvatar } from '../../helpers/defaultAvatar';
import { useHistory, useParams } from 'react-router';
import { GetEditContact } from '../../api/GetEditContact';
import { PostEditContact } from '../../api/PostEditContact';
import { PostAddContact } from '../../api/PostAddContact';
import SubmitButton from '../../components/submitButton/SubmitButton';

const AddContact = () => {
    const { id }: any = useParams();
    const [ isToggleMenu, setIsToggleMenu ] = useState(false);
    const [ editInput, setEditInput] = useState(
        {} as ContactDetailModelType
        );
    const [photo, setPhoto] = useState({} as PostPhotoModelType);
    const history = useHistory();


    useEffect(()=>{

    },[id])



    const toggleMenu = () => {
        setIsToggleMenu(!isToggleMenu);
    }

    const handleChange = (e:any) => {
        e.preventDefault();
        const { value,  name} = e.target;
        setEditInput((multipleInput) => ({
            ...multipleInput,
            [name]: value,
        }));
        console.log(value, 'apani2')
    } 

    const changePhoto = (e: any) => {
        const file = e.target.files[0];
        if (e.target.files.length) {
          setPhoto({
            preview: URL.createObjectURL(file),
            raw: file,
          });
        }
      };

      const handleSubmit = (e:any) => {
          e.preventDefault();
          PostAddContact(editInput, photo, editInput.id).then((result) => {
              if(result) {
                  alert('sukses')
                  history.push('/')
              }
              console.log(result, editInput.id, 'apani3')
          })
      }

    return (
        <div className="contact-home">
            <Menubar
                isToggleMenu={isToggleMenu}
                toggleMenu={toggleMenu}
            />
            <div className="contact-main">
                <div className="header">
                    <span className="title">Add Contact Page</span>
                    <div className="line"/>
                </div>
                <div className="contact-edit">
                    <div className='photo-container'>
                        <img src={defaultAvatar(photo.preview)} alt='avatar' />
                        <label htmlFor='file-input' className='change-profile-photo'>
                        <span>Ganti foto profil</span>
                        <input
                            id='file-input'
                            name='file'
                            type='file'
                            onChange={changePhoto}
                        />
                        </label>
                    </div>
                    <div className="input-field">
                        <span className="label">First Name</span>
                        <input 
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            value={editInput.firstName}
                        />
                    </div>
                    <div className="input-field">
                        <span className="label">Last Name</span>
                        <input 
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={editInput.lastName}
                        />
                    </div>
                    <div className="input-field">
                        <span className="label">Age</span>
                        <input 
                            type="number"
                            name="age"
                            onChange={handleChange}
                            value={editInput.age}
                            className="number"
                        />
                    </div>
                </div>
                <SubmitButton handleSubmit={handleSubmit} value="Submit" />
            </div>
        </div>
    )
}

export default AddContact;