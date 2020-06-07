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
                    
                    const sub_element = tmp_obj[sub_key];
                    var inputEl = document.createElement('input');
                    inputEl.type = 'radio';
                    inputEl.id=sub_key;
                    inputEl.name = key;//name属性には親要素と同じ内容を書き込む
                    inputEl.value = sub_element;

                    var inputlb = document.createElement('label');
                    inputlb.htmlFor = sub_key;
                    inputlb.textContent = sub_element;

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
        let exist = false;
        form[inputIndex[i]].forEach(element => {
            if(element.checked){
                anserArr.push(element.id);
                exist=true;
            }
        });
    }

    //TODO:anserArrをメソッドに投げて、tweetに使う文字列に変換する。
    //変換後の文字をreturnする

    var anserObj={name:vname,url:url,text:anserArr};
    return anserObj;
}



/*
*　取り込んだ内容を文面に変換するメソッド（コールバックで）
*　src = [Vの名前、URL、選択されているvalue]
*　最終的な文面→　……？？？
*/
function henkan(src){
    var vname = src[0];
    var url = src[1]?src[1]:null; //urlが入っていればそのデータを、入ってなければnullを変数に入れる
    var tmp1;
    return tmp;
}





/*
*　tweetボタンを生成・上書きするメソッド
*　tweetボタンにぶち込む文面を引数に入れてメソッドを呼び出す
*　参考url = https://qiita.com/lovesaemi/items/d4f296b6b1d5158d2fea
// 任意のタイミングで呼べば狙ったとおりのテキストのボタンつくれる
// 引数増やしていろいろやってもよいですね。
*
* anserObj = {name,url,anserArr=[],text,hashtags}
*/
function setTweetButton(anserObj){
    var tw = document.getElementById('tweet-area'); //既存のボタン消す
    while (tw.firstChild) tw.removeChild(tw.firstChild);


    // htmlでスクリプトを読んでるからtwttがエラーなく呼べる
    // オプションは公式よんで。
    // createShareButton(url,targetElement,options);
    twttr.widgets.createShareButton(
      "vreco-542cc.firebaseapp.com",//tweet本文に入るurlとは別のもの
      tw,//    document.getElementById('tweet-area')
      {
        size: "large", //ボタンはでかく
        text: anserObj.name + anserObj.text + " サンプルテキスト",//anserObj.text, // 狙ったテキスト
        hashtags: anserObj.hashtags?anserObj.hashtags:"", // ハッシュタグ
        url: anserObj.url//anserObj.url // URL
      }
    ).then(function(){
        let btn = document.createElement("Button");
        btn.type="button";
        btn.className="btn btn-outline-primary";
        btn.textContent="再生成";
        btn.addEventListener('click',setTweetButton(acquireForm()))
        tw.appendChild(btn);
    }
    );
}
//参考url http://westplain.sakuraweb.com/translate/twitter/Documentation/Twitter-for-Websites/Tweet-Button/JavaScript-Factory-Function.cgi
// http://westplain.sakuraweb.com/translate/twitter/Documentation/Twitter-for-Websites/Tweet-Button/Parameter-Reference.cgi


/*
* ラジオボタンの状態が変わるたびに呼び出され、httpqueryの内容を上書きする
*/
function updateTweetbutton(){
    const anserObj = acquireForm();
    var tmp = document.getElementById('tweetbutton')
    
    let url = encodeURIComponent("http://vreco-542cc.firebaseapp.com");
    tmp.href = "https://twitter.com/share?url=" + url + "&text=" + encodeURIComponent(anserObj.name + anserObj.text);

    document.getElementById('preview').textContent=anserObj.name + anserObj.text + "仮の文面を表示しています";
}



/*
*　読み込み完了時にメソッド点火
*　choices,questionSentenceはquestion.jsで宣言したオブジェクト
*/
inputsInit(choices,questionSentence);

//formを操作するたびにtweetのソースを上書きするイベントリスナ追加
document.forms[0].addEventListener("change",updateTweetbutton)