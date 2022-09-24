// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');


const express = require('express')
const app = express()
const PORT = 8000


app.listen(PORT,()=>{
    console.log('Server is up and running on port} ')

})

const createUser = () => {
    return {
        _id:faker.datatype.uuid(),
        first_name:faker.name.firstName(),
        last_name:faker.name.lastName(),
        email:faker.internet.email(),
        password:faker.internet.password(),
        phone_number:faker.phone.number()

    }

}

const createCompany = () => {
    return {
        _id:faker.datatype.uuid(),
        name:faker.name.findName(),
        address: {
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            country:faker.address.country(),
        }
    }
}

app.get('/api/users/new', (req,res)=>{
    const user = createUser()
    res.json(user)
})

app.get('/api/companies/new', (req,res)=>{
    const company = createCompany()
    res.json(company)
})

app.get('/api/user/company', (req,res)=>{
    const profileUser = createUser()
    const profileCompany = createCompany()
    const profile = {
        User: profileUser,
        Company: profileCompany,
    }
    res.json(profile)
})

