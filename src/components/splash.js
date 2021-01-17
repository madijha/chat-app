import axios from "axios";

export const getUserDetails = (userid) => {
    const form = new FormData();
    form.append('userid', userid);
    return axios.post('http://localhost/di/user_getUserDetails.php', form);
};