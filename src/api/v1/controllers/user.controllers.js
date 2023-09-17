import { 
  fetchUser, 
  fetchUsers, 
  editUser,
  addUser,
  removeUser 
} from '../models/user.models'

export const getUsers = (req, res, next) => {
  try {
    const resp = fetchUsers()
    res.status(200).json(resp).catch(next);
  } catch (err) {
    res.status(500).send(err)
  }
};

export const getUser = (req, res, next) => {
  const id = req.params.userId;
  try {
    const resp = fetchUser(parseInt(id))
    res.status(200).json(resp)
  } catch (err) {
    res.status(500).send(err)
  }
};

export const createUser = (req, res, next) => {
  const newUser = req.body;
  try {
    const resp = addUser(newUser)
    res.status(200).json(resp).catch(next);
  } catch (err) {
    res.status(500).send(err)
  }
};

export const updateUser = (req, res, next) => {
  const id = req.params.userId;
  const updateUser = req.body;
  try {
    const resp = editUser(parseInt(id), updateUser)
    res.status(200).json(resp).catch(next);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteUser = (req, res, next) => {
  const id = req.params.userId;
  try {
    const resp = removeUser(parseInt(id))
    res.status(200).json(resp).catch(next);
  } catch (err) {
    res.status(500).send(err)
  }
};