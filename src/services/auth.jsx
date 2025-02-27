export const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
export const storeUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

export const registerUser = (user) => {
  const users = getUsers();
  users.push(user);
  storeUsers(users);
};

export const validateUser = (email, password) => 
  getUsers().find(u => u.email === email && u.password === password);

export const updatePassword = (email, newPassword) => {
  const users = getUsers();
  const userIndex = users.findIndex(u => u.email === email);
  if (userIndex === -1) return false;
  users[userIndex].password = newPassword;
  storeUsers(users);
  return true;
};