/*
*　input要素を羅列する関数の宣言
*　仮変数choicesにラジオボタンの内容が格納され、仮関数qSentenceに設問文が格納されます
*/
function inputsInit(choices,qSentence){
    var ol = document.getElementById('mainform');//追加先を取得する

    for (const key in choices) {//設問のループ
        if (choices.hasOwnProperty(key)) {
            const tmp_obj = choices[key];
            
            // 設問ブロックを包むdivを生成
            var liParEl = document.createElement('li');//番号つきリストに加える要素を生成
            var divEl = document.createElement('div');
            divEl.className = 'form-group';
        
            var tmpEl = document.createElement('p');
            tmpEl.textContent = qSentence[key];//設計ルールで設問文は同じkeyを使うようになっている
            divEl.appendChild(tmpEl);
            liParEl.appendChild(divEl);
            ol.appendChild(liParEl);

            let i = 1;
            for (const sub_key in tmp_obj) {//選択肢のループ
                if (tmp_obj.hasOwnProperty(sub_key)) {
                    const sub_element = tmp_obj[sub_key];
                    var inputEl = document.createElement('input');
                    // inputEl.className = 'form-check-input'　//TODO::CSSクラスを追記
                    inputEl.type = 'radio';
                    inputEl.id=sub_key;
                    inputEl.name = key;//name属性には親要素と同じ内容を書き込む
                    inputEl.value = sub_element;

                    var inputlb = document.createElement('label');
                    // inputlb.className="form-check-label" //TODO::CSSクラスを追記
                    inputlb.for = sub_key;
                    inputlb.textContent = sub_element;


                    divEl.appendChild(inputEl);
                    divEl.appendChild(inputlb);
                    if (i%3==0) {
                        divEl.appendChild(document.createElement('br'));
                        // 三の倍数でbr要素を追加
                        i=0
                    };
                    i++;

                    ol.insertBefore(liParEl,document.getElementById('url-adrress'));
                    //追加内容を、input(type=url)要素と入れ替える。urlが最下部になるように。
                }
            }
        }
    }

}



/*
*　formの内容をJSに取り込むメソッド
*　formオブジェクトを仮変数に入れます
*　返り値：回答内容を格納した配列[]
*/
function acquireForm(){
    var form = document.forms[0];
    var vname = form.name.value;
    var url = form.url.value;
    var inputArr = Object.keys(choices);
    //questions.jsにて定義したオブジェクトからキー名を取得
    //name属性に使用してるため実用可能
    //仕様を変更する場合は、elements全てforループに巻き込んでvalueを取得していく形に書き換え
    var anserArr=[vname,url];

    for (let i = 0; i < inputArr.length; i++) {
        form[inputArr[i]].forEach(element => {
            if(element.checked){
                anserArr.push(element.value);
            }
        });
    }

    console.log(vname,anserArr,url);
    return anserArr;
}



/*
*　取り込んだ内容を文面に変換するメソッド（コールバックで）
*/

/*
*　文面をtweetタグへ変換し、tweetボタンを生成・上書きするメソッド
*/


var result = new Promise(function(resolve){

});

/*
*　読み込み完了時にメソッド点火
*　choices,questionSentenceはquestion.jsで宣言したオブジェクト
*/



inputsInit(choices,questionSentence);
// acquireForm();
