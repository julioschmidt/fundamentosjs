const fs = require('fs')
// fs.readFile('./arq1.txt', (error, resposta) => {
//   if(error ) {
//     console.error('Deu ruim***', error.stack)
//     return;
//   }
  
//   console.log('resposta', resposta.toString())
// })

fs.readFile('./arq1.txt', (errorArq1, respostaArq1) => {
  if(errorArq1) {
    console.error('Deu merda no 1', errorArq1)
    return;
  }
  fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
    if(errorArq2) {
      console.error('Deu merda no 2', errorArq2)
      return;
    }
    fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => {
      if(errorArq3) {
        console.error('Deu merda no 3', errorArq3)
        return;
      }
      const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`
      // console.log(conteudo)
      fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
        if(errorWrite) {
          console.error('Deu merda na gravação', errorWrite)
          return;
        }
        console.log('Arquivo salvo com sucesso!!')
      })
    })
  })
})