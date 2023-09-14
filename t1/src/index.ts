// TODO: Define the interface User with username, email, and optional bio

// TODO: Create a user object using the defined interface. Add all properties
// TODO: Create another user object using the defined interface. Don't add bio

interface User {
  username: string;
  email: string;
  bio?: string;
}

const user: User = {
  username: 'John',
  email: 'john.doe@metropolia.fi',
  bio: 'I am a student at Metropolia UAS',
}

const user2: User = {
  username: 'Jane',
  email: 'jane.doe@metropolia.fi',
  bio: '',
}

// Function to display user information
  // TODO: console log all properties of a user separately. Example: console.log(user.email)

function displayUserInfo(user: User): void {
  console.log(user.username);
  console.log(user.email);
  console.log(user.bio);
}

// Display user information
displayUserInfo(user);