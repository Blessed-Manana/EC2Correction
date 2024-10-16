import express from 'express'

const app =  express()
const port = 8001

app.use(express.json())

app.get('/users', (req, res)=>{
    res.send(200).json([{name: 'Nimo', surname: 'Simz'}, {name: 'Fabulas', surname: 'Mcfannel'}])
})

app.listen(port, ()=>{
    console.log(`Hi you server is running on http://localhost:${port}`)
})