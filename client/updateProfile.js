import axios from 'axios';
import showAlert from './alerts';

const updateProfileData = async (data, type) => {
  try {
    const url = type === 'password' ? '/api/users/me/password' : '/api/users/me';
    const res = await axios.put(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    showAlert('success', res.data.message);
    setTimeout(() => {
      window.location.assign('/me');
    }, 500);
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};

export default updateProfileData;
