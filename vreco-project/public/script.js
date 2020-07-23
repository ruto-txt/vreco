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
            var li = document.createElement('li');//番号つきリストに加える要素を生成
            li.id = key;//liアイテムにアクセスするためのidは,formのnameプロパティと同じものにしてみよう
            var parentDivEl = document.createElement('div');
            
            // TODO:elementにIDを大問名で追加する。後のエラーチェックでクラスを追加するのに使おうと思っている
            parentDivEl.className = 'form-group';
        
            var questionSentenceEl = document.createElement('p');
            questionSentenceEl.textContent = qSentence[key];//設計ルールで設問文は同じkeyを使うようになっている
            parentDivEl.appendChild(questionSentenceEl);
            li.appendChild(parentDivEl);
            ol.appendChild(li);

            let i = 1;
            var rowDiv = document.createElement('div');
            rowDiv.className='form-row';
            for (const sub_key in tmp_obj) {//選択肢のループ
                if (tmp_obj.hasOwnProperty(sub_key)) {
                    let colDiv =document.createElement('div');
                    colDiv.className='col-sm-2';
                    
                    const sub_element = tmp_obj[sub_key].label;
                    var inputEl = document.createElement('input');
                    inputEl.type = 'radio';
                    inputEl.id=sub_key;
                    inputEl.name = key;//name属性には親要素と同じ内容を書き込む
                    inputEl.value = sub_element;
                    inputEl.required = true;

                    var inputlb = document.createElement('label');
                    inputlb.htmlFor = sub_key;
                    inputlb.textContent = sub_element;
                    inputlb.name = key;

                    /* グリッドlayout用のDivに収めてからの格納に変更
                    parentDivEl.appendChild(inputEl);
                    parentDivEl.appendChild(inputlb);
                    */
                   colDiv.appendChild(inputEl);
                   colDiv.appendChild(inputlb);
                   rowDiv.appendChild(colDiv);
                    if (i%3==0) {
                        // 三の倍数でrowクラスを持つdiv要素を追加
                        parentDivEl.appendChild(rowDiv);
                        var rowDiv = document.createElement('div');
                        rowDiv.className='form-row';
                        i=0
                    };
                    i++;

                    ol.insertBefore(li,document.getElementById('url-adrress'));
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
    const form = document.forms[0];
    let vname = form.name.value;
    let url = form.url.value;

    //questions.jsにて定義したオブジェクトからキー名を取得
    const inputIndex = Object.keys(choices);
    //name属性に使用してるため実用可能

    let anserArr = [];
    for (let i = 0; i < inputIndex.length; i++) {
        var exist = false;
        form[inputIndex[i]].forEach(element => {
            if(element.checked){
                anserArr.push(element.id);
                exist=true;
            }
        });
    }

    var anserObj={name:vname,url:url,keys:anserArr};
    anserObj.text=conversionTweetText(anserObj)
    return anserObj;
}



/*
*　取り込んだ内容を文面に変換するメソッド（コールバックで）
*　src = [Vの名前、URL、選択されているvalue]
*　最終的な文面→　……？？？
*/
function conversionTweetText(anserObj){
    const vname = anserObj.name;
    const vnameText = vname?"私の推しは" + vname +"です。\n":""
    var anserTextArr=[];

    //choicesはquestion.jsで宣言したオブジェクト
    const choicesKeys = Object.keys(choices);
    anserObj.keys.forEach((element,index) => {
        anserTextArr.push(choices[choicesKeys[index]][element].text)
    });
    const Twt = vnameText + anserTextArr[0] + anserTextArr[1] + anserTextArr[2] + anserTextArr[3] + "するのが魅力です。たまに" + anserTextArr[4] + "要素がある。\n\n"

    return Twt;
}


/*
* formsの内容をもとに、httpqueryの内容を上書きします
*/
function updateTweetbutton(){
    const anserObj = acquireForm();
    var tmp = document.getElementById('tweetbutton')
    const url = anserObj.url?anserObj.url:"http://vreco-542cc.firebaseapp.com"
    let encodedUrl = encodeURIComponent(url);
    tmp.href = "https://twitter.com/share?url=" + encodedUrl + "&text=" + encodeURIComponent(anserObj.text);

    document.getElementById('preview').textContent=anserObj.text;
}


/**
 * formsのすべての要素が埋まってるかどうかを確認する
 */
function updateCheck(){
    const form = document.forms[0];
    const inputIndex = Object.keys(choices);//questions.jsにて定義したオブジェクトからキー名を取得
    //name属性に使用してるため実用可能

    var inputExists=inputIndex.slice().fill(false);

    for (let i = 0; i < inputIndex.length; i++) {
        //form要素はhtmlのためイテレータで参照するしかない
        //choicesのキーを利用してinput要素の塊を仕分け、それぞれの塊についてチェックがあるかどうかを確認する
        form[inputIndex[i]].forEach(element => {
            if(element.checked){//「その要素がチェックされているかどうか」しか分からないため、全てについて検証する
                inputExists[i]=true;
            }
        })
    };

    //それぞれのブロックの検証結果を収めた配列
    //ひとつでもfalseがあれば、メソッドを実行しない
    var finalyBool = true;
    inputExists.forEach(bool=>{if(!bool){
        console.log(bool);
        finalyBool=false;
    }});
    finalyBool&&updateTweetbutton();
}


/*
*　読み込み完了時にメソッド点火
*　choices,questionSentenceはquestion.jsで宣言したオブジェクト
*/
inputsInit(choices,questionSentence);

//formを操作するたびにtweetのソースを上書きするイベントリスナ追加
document.forms[0].addEventListener("change",updateCheck)