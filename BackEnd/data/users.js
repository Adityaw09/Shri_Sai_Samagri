import bcrypt from 'bcryptjs'


const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ganesh',
        email: "ganesh@example.com",
        pasword: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Raju',
        email: "raju@example.com",
        password: bcrypt.hashSync('123456', 10),
    }
];

export default users;