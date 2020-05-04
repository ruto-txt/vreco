document.regist.submit.addEventListener('click',kurikku);
function kurikku(){
    var name = document.regist.name.value;
    var furigana = document.regist.furigana.value;
    var url = document.regist.url.value;
    var hash = document.regist.hash.value;

    console.log(name,furigana,url,hash);
}
