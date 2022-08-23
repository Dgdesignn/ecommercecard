const card_titles = document.querySelectorAll('.dg-card__title')


card_titles.forEach(title=>cardTitleCustom(title))


//customizando o título do card
function cardTitleCustom(title){
    let title_content = title.textContent.trim(); 
    let isupper = isUpper(title_content)    

    if(isupper) {
        title.textContent = quantStrReturn(title_content, 60)
    }else{
        title.textContent = quantStrReturn(title_content, 78)
    }

}

//verifica se todas letras são maiuscula
function isUpper(str){
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

//retorna qauntidade de string desejada
function quantStrReturn(str,quantd){
    let srt_length = str.length
    return srt_length > quantd? str.substring(0, quantd)+'...' : str.substring(0, quantd);
}