import db from '../../../database/db.js';
import {saveToJsonDB } from '../../../utils/utils.js';

export const fetchUser = (id) => {
    try {
        const user = db?.users?.filter(user => user?.id === id)[0]
        return user
    } catch (err) {
        throw error;
    }
}

export const fetchUsers = () => {
    try {
        return db?.users
    } catch (err) {
        throw error;
    }
}

export const addUser = (data) => {
    try {  
        const newUser = { id: db.users.length + 1, ...data }
        db.users.push(newUser)
        saveToJsonDB(db);
        return newUser

    } catch (err) {
        throw error;
    }
}

export const editUser = (id, data) => {
    try {
        const index = db.users.findIndex(user => user.id === id)

        if (index === -1) throw new Error('User not found')
        else {
            db.users[index] = data
            saveToJsonDB(db);
            return db.users[index]
        }        
    } catch (err) {
        throw error;
    }
}

export const removeUser = (id) => {
    try {
        const index = db.users.findIndex(user => user.id === id)

        if (index === -1) throw new Error('User not found')
        else {
            db.users.splice(index, 1)
            saveToJsonDB(db);
            return db.users
        }
    } catch (error) {
        throw error;
    }
}