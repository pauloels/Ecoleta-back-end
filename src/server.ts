import express from 'express';
import cors from 'cors';
import path from 'path'
import routes from './routes';
import {errors} from 'celebrate'

const app = express()

app.use(cors())

app.use(express.json());

app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(3333)





/**
 * const users = [
    'paulo',
    'flaviane',
    'cleiton',
    'Robson'
]

app.get('/users', (request, response) => {
    
// no query vc pode colocar mais de um search ele vai retornar um array assim para retirar esse tipo de erro vamos burlar o js colocando string
    const search = String(request.query.search)

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers)
})

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user)
})  

app.post('/users', (request, response) => {
    const data = request.body

    const user = {
        name: data.name,
        email: data.email
    }

    
    return response.json(user);
})
 */