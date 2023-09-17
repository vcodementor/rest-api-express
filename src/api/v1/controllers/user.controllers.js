import { 
  fetchUser, 
  fetchUsers, 
  editUser,
  addUser,
  removeUser 
} from '../models/user.models'

export const getUsers = (req, res, next) => {
  // fetchUsers().then(users => {
  //   if(users && users.length){
  //     res.json(users);
  //   } else {
  //     res.status(404).send();
  //   }
  // }).catch(next);
  res.json({'status' : 'success','method' : 'create','data': 'All'});
};

export const getUser = (req, res, next) => {
  const id = req.params.userId;
  //   fetchUser(id).then(user => {
  //     if(user && user.length){
  //       res.json(user)
  //     } else {
  //       res.status(404).send();
  //     }
  //   }).catch(next);
  res.json({'status' : 'success','method' : 'create','data': id});
};

export const createUser = (req, res, next) => {
  const newUser = req.body;
  // addUser(newUser).then( user =>{
  //   if (user) {
  //     res.json(user)
  //   } else {
  //     res.status(404).send();
  //   }
  // }).catch(next); 
  res.json({'status' : 'success','method' : 'create','data': res.json(user)});
};

export const updateUser = (req, res, next) => {
  const updateUser = req.body;
  // editUser(id).then(user => {
  //   if (user) {
  //     Object.assign(user, updateUser);
  //     user.save().then(user => res.json(user)).catch(next);
  //   }else {
  //     res.status(404).send();
  //   }
  // }).catch(next);
  res.json({'status' : 'success','method' : 'create','data': res.json(user)});
};

export const deleteUser = (req, res, next) => {
  const id = req.params.userId;
    // removeUser(id).then(user => {
    //   if (user) {
    //     user.destroy().then(res.status(200).send()).catch(next);
    //   }else {
    //     res.status(404).send();
    //   }
    // }).catch(next);
  res.json({'status' : 'success','method' : 'create','data': id});
};