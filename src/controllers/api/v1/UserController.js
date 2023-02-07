module.exports = class UserController{

  static getUsers = (req, res, next) => {
    // User.findAll().then(users => {
    //   res.json(users)
    // }).catch(next);
    res.send("{'status' : 'success','method' : 'create','data': 'All'}");
  };

  static getUser = (req, res, next) => {
    const id = req.params.userId;
    // findById(id).then(user => {
    //   if(user && user.length){
    //     res.json(user)
    //   } else {
    //     res.status(404).send();
    //   }
    // }).catch(next);
    res.send({'status' : 'success','method' : 'create','data': id});
  };

  static createUser = (req, res, next) => {
    const user = req.body;
    // User.create(req.body).then( u =>res.json(u))
    // .catch(next); 
    res.send({'status' : 'success','method' : 'create','data': res.json(user)});
  };

  static updateUser = (req, res, next) => {
    const user = req.body;
    // findById(id).then(user => {
    //   if (user) {
    //     Object.assign(user, newUser);
    //     user.save().then(user => res.json(user)).catch(next);
    //   }else {
    //     res.status(404).send();
    //   }
    // }).catch(next);
    res.send({'status' : 'success','method' : 'create','data': res.json(user)});
  };

  static deleteUser = (req, res, next) => {
    const id = req.params.userId;
    // findById(id).then(user => {
    //   if (user) {
    //     user.destroy().then(res.status(200).send()).catch(next);
    //   }else {
    //     res.status(404).send();
    //   }
    // }).catch(next);
    res.send({'status' : 'success','method' : 'create','data': id});
  };

}