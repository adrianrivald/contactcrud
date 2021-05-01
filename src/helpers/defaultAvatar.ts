import avatarIcon from '../assets/images/avatar.svg';

export const defaultAvatar = (param: any) => {
  if (
    param === null ||
    param === undefined ||
    param === '' ||
    param === 'empty' ||
    param === 'N/A'
  ) {
    return avatarIcon;
  } else {
    return param;
  }
};
