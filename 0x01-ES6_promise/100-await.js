import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoP = await uploadPhoto();
    const userP = await createUser();

    return { photo: photoP, user: userP };
  } catch (error) {
    return { photo: null, user: null };
  }
}
