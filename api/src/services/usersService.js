const userStorage = require('./storage/usersStorage');

module.exports = {
  getAll: async () => {
    return await userStorage.getAll();
  },
  getById: async (id) => {
    return await userStorage.getById(id);
  },
  getFriends: async (id) => {
    const friendType = 1; // RelationTypes table
    return await userStorage.getFriends(id, friendType);
  },
  create: async (newData) => {
    const [newUserId] = await userStorage.create(newData);
    return newUserId;
  },
  updateById: async (updatedInfo, id) => {
    await userStorage.updateById(updatedInfo, id);
    return await userStorage.getById(id);
  },
  deleteById: async (id) => {
    return await userStorage.deleteById(id);
  },
};
