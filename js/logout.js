import axios from 'axios';
import { showAlert } from './alerts';

const logout = async () => {
  try {
    const res = await axios.post('/api/users/logout', {});
    showAlert('success', 'Logged out successfully!');
    window.location.reload();
  } catch (error) {
    showAlert('error', 'Error logging out! Try again.');
  }
};

export default logout;
