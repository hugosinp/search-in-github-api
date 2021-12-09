import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import axios from 'axios'

const api = Router()
const prisma = new PrismaClient()


/** GET /api/users ==> Retrieve all users in the local database */
api.get('/', async (_, response) => {

    const get = await prisma.user.findMany()

    response.json(get)
})


/** GET /api/users/:username ==> Get user by username */
api.get('/:username', async (request, response) => {

    const get = await prisma.user.findUnique({
        where: { 
            login: request.params.username,
        },
    })
    
    if(get){
        response.json(get)
    } else {
        getGitHubData(request, response)
    }
})


const getGitHubData = async (request, response) => {

    const res = response

    await axios.get(`https://api.github.com/users/${request.params.username}`)
    .then(async (data) => {
        try{
            const { id, login, node_id, avatar_url, html_url } = data.data

            const post = await prisma.user.create({
                data: {
                    id,
                    login,
                    node_id,
                    avatar_url,
                    html_url
                },
            })
    
            res.json(post)
        } catch(e){
            res.json(e)
            console.log(e)
        }
    }).catch(() => {
        console.log("User Not Found");
    })
}

export default api
