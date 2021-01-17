import axios from "axios";

export const checkEmail = (email) => {
    const form = new FormData();
    form.append('email', email);
    return axios.post('http://localhost/di/user_checkEmail.php', form);
};

export const inviteFriend = (chatDetails) => {
    const form = new FormData();
    form.append('message', chatDetails.message);
    form.append('senderid', chatDetails.senderId);
    form.append('sendername', chatDetails.senderName);
    form.append('receiverid', chatDetails.receiverId);
    form.append('receivername', chatDetails.receiverName);
    return axios.post('http://localhost/di/user_inviteFriend.php', form);
};

export const getAllChats = (userId) => {
    const form = new FormData();
    form.append('userid', userId);
    return axios.post('http://localhost/di/user_getChats.php', form);
};

export const getSingleChats = (sender, receiver) => {
    const form = new FormData();
    form.append('senderid', sender);
    form.append('receiverid', receiver);
    return axios.post('http://localhost/di/user_getSingleChats.php', form);
};
