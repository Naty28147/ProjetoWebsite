// Requisita o módulo Express instalado para que possa ser utilizado na aplicação
const express = require('express')

// Cria uma instância da aplicação/Express
const app = express()

// Registra uma rota get(sinalizando leitura) apontando para a raiz '/'. Exemplo, exemplo.com/
// req: Request - Em resumo, corresponde as entradas, tudo aquilo que é enviado para o servidor 
// res: Response - Corresponde as saídas, tudo aquilo que é desejado enviar para o exterior
app.get('/', (req, res) => {
  // Envia uma string de resposta para a requisição realizada
  res.send('Olá mundo. Ir para sobre')
})

// Inicializa o servidor observando a porta 3000
app.listen(3000, () => {
  console.log('Server online')
})

// ...

app.get('/sobre', (req, res) => {
  res.send("Um simples tutorial de NodeJS")
})

// ...
