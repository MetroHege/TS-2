"use strict";
// TODO: Define the interface User with username, email, and optional bio
const user = {
    username: 'John',
    email: 'john.doe@metropolia.fi',
    bio: 'I am a student at Metropolia UAS',
};
const user2 = {
    username: 'Jane',
    email: 'jane.doe@metropolia.fi',
    bio: '',
};
// Function to display user information
// TODO: console log all properties of a user separately. Example: console.log(user.email)
function displayUserInfo(user) {
    console.log(user.username);
    console.log(user.email);
    console.log(user.bio);
}
// Display user information
displayUserInfo(user);
