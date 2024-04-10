import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserProm = signUpUser(firstName, lastName);
  const uploadPhotoProm = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserProm, uploadPhotoProm]).then((results) => {
    const res = [];
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        res.push({ status: result.status, value: result.value });
      } else {
        res.push({ status: result.status, value: `${result.reason}` });
      }
    });
    return res;
  });
}
