document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLocaleLowerCase()); 
});


//Quando clicar no botão vai executar essa função
document.querySelector('.composer button').addEventListener('click',()=>{
    //coletar o que foi digitado no campo de formulário
    let song = document.querySelector('#input').value;
    //verifica se o campo não tiver em branco...
    if(song !== ''){
      //transforma cada letra em um item do array
      let soungArray = song.split('');
     // console.log(soungArray);
     playComposition(soungArray); //cria a função
    }

}); 

playSound=(sound)=>{
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);   //Selecionar a div das teclas
    //se o elemento de audio for encontrado....
    if(audioElement){
        //zerar o tempo do audio para não esperar ir até o final se pressionar novamente a tecla
        audioElement.currentTime = 0;
        audioElement.play(); //funcao disponivel na tag audio
    }


if(keyElement){
    keyElement.classList.add('active');  //adiciona a classe activeem volta da letra pressionada
    //add a classe, espera um pouco e remove a classe
    setTimeout(()=>{
        keyElement.classList.remove('active');
    },300);
}

}

playComposition=(soungArray)=>{
  let wait = 0;
    //loop no array
    //executar todas as letras uma de cadas vez
    for(let songitem of soungArray){
    //gera um intervalo entre itens, setando intervalo com tempos diferentes
    setTimeout(()=>{
        playSound(`key${songitem}`);
    },wait);
    wait += 250;

}
}

// function playSound(sound){
//     let audioElement = document.querySelector(`#s_${sound}`);
//     if(audioElement){
//         audioElement.play();
//      }
// }