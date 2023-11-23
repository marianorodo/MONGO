import net from "node:net"
import dotenv from "dotenv"

dotenv.config()

const port=process.env.PORT ?? 2323 // esto cuando me olvido de definir en env el puerto, me lo toma autom


const serverTCP=net.createServer()

serverTCP.on("connection",(socket)=>{
    socket.on("data",()=>{

    })
    socket.on("cloes",()=>{
        console.log("client disconnected")
    })
    socket.on("error",()=>{
        console.log("client error")
    })

    console.log("client connected", new Date().toLocaleString())
})

serverTCP.listen(port,()=>{
    console.log("server is up ", port, new Date().toLocaleString())
})