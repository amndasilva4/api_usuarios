const express = require('express');
const res = require('express');
const app =express ();
const port = 3000;

app.use(express.json());

let usuarios =[];

app.get(`/usuarios`,(req,res) =>{
    res.json(usuarios);
})
app.post(`/usuarios`,(req,res)=>{
    const{nome,email}=req.body;
    if(!nome ||!email){
        return res.status(400).json({Error:`nome e email sãp obrigatorios`});
    }
    const novoUsuario={id: usuarios.length+1,nome,email};
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});app.listen (port,()=>{
    console.log(`servidor rodando em http://localhost:${port}`);
});