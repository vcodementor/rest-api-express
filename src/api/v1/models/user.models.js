import db from '../../../database/db.js';

export const fetchUser = (id) => {
    try {
        const user = db?.users?.filter(user => user?.id === id)[0]
        return user
    } catch (err) {
        console.log('Error', err)
    }
}

export const fetchUsers = () => {
    try {
        return db?.users
    } catch (err) {
        console.log('Error', err)
    }
}

export const editUser = (id, data) => {
    try {
        const index = db.users.findIndex(user => user.id === id)

        if (index === -1) throw new Error('User not found')
        else {
            db.users[index] = data
            return db.users[index]
        }        
    } catch (err) {
        console.log('Error', err)
    }
}

export const addUser = (data) => {
    try {  
        const newUser = { id: db.users.length + 1, ...data }
        db.users.push(newUser)
        return newUser

    } catch (err) {
        console.log('Error', err)
    }
}

export const removeUser = (id) => {
    try {
        const index = db.users.findIndex(user => user.id === id)

        if (index === -1) throw new Error('User not found')
        else {
            db.users.splice(index, 1)
            return db.users
        }
    } catch (error) {
        
    }
}