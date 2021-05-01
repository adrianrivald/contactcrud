export type ContactDetailModelType = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    photo: string;
}

export type ContactModelType = {
    message: string;
    data: ContactDetailModelType[];
}

export type PostPhotoModelType = {
    raw: string;
    preview: string;
  };