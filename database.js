const shortid = require("shortid");

let users = [
  {
    id: `${shortid.generate()}`,
    name: "Leonard",
    bio: "An experimental physicist at Caltech in Pasadena. Although Leonard has many geeky interests and hobbies, he was the most willing of the guys to try and socialize with other people. Leonard's interest in Penny brought her into the guys social group and helped bring Leonard, and indeed all of the guys, out of their shells. Leonard and Penny were married 2015 and, after a year of splitting time between apartments 4A and 4B, now live alone in 4A."
  },
  {
    id: `${shortid.generate()}`,
    name: "Sheldon",
    bio: "Theoretical physicist at Caltech who is married to neurobiologist Amy Farrah Fowler, with whom he now lives in Apartment 4B after years of sharing an apartment with his best friend and colleague, Leonard Hofstadter."
  },
  {
    id: `${shortid.generate()}`,
    name: "Penny",
    bio: "A pharmaceutical sales rep for Zangen Pharmaceuticals, who formerly worked as a waitress at the Cheesecake Factory. Originally from Omaha, Nebraska, Penny moved to California with dreams of becoming a Hollywood actress. In 2007, she moved into the apartment across the hall from Sheldon and Leonard. In 2015, she and Leonard married and now live together in Apartment 4A."
  },
  {
    id: `${shortid.generate()}`,
    name: "Amy",
    bio: "Dr. Amy Farrah Fowler, Ph.D. is a neurobiologist from Glendale, California, who is married to Dr. Sheldon Cooper. Amy met Sheldon Cooper after Howard and Raj created a fake dating profile for him, and Amy's profile was matched to his."
  }
];

function getUsers() {
  return users;
}

function getUserById(id) {
  return users.find(u => u.id === id);
}

function createUser(data) {
  const payload = {
    id: String(users.length + 1),
    ...data
  };

  users.push(payload);
  return payload;
}

function updateUser(id, data) {
  const index = users.findIndex(u => u.id === id);
  users[index] = {
    ...users[index],
    ...data
  };

  return users[index];
}

function deleteUser(id) {
  users = users.filter(u => u.id != id);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
