function panelInit(){
    var panel = document.getElementById('panel')
    let child
    for(var i=0; i<9; i++){
        child = document.createElement('div');
        child.className = 'child cp_btn';
        child.addEventListener('click',transitionSelType,false);
        child.num=i;

        child.appendChild(document.createElement('div'));
        child.children[0].textContent = i + '番';
        // TODO::文字列を代入してアレする
        // クリックしたら書き換えられるようになんやかんややる(transitionSelTypeで)

        panel.appendChild(child);
    }
}

function transitionSelType(){
    alert('クリックされました');
    document.getElementById('Q2ans').textContent = "Q2の答案一覧";
}



function inputsInit(questions,qSentence){
    var form = document.getElementById('mainform');//追加先のformを取得する
    var liParEl = document.createElement('li');//番号つきリストに加える要素を生成

    for (const key in questions) {//設問のループ
        if (questions.hasOwnProperty(key)) {
            const tmp_obj = questions[key];

            // 設問ブロックを包むdivを生成
            var divEl = document.createElement('div');
            divEl.className = 'form-group';

            var divEl = document.createElement('div');
            //設問の文言をどうにかして仕込む
            //TODO::文言を読み取って何かの要素に追加するメソッド

            for (const sub_key in tmp_obj) {//選択肢のループ
                if (tmp_obj.hasOwnProperty(sub_key)) {
                    const sub_element = tmp_obj[sub_key];
                    console.log(sub_key +' : ' +sub_element);

                    //TODO::inputラジオボタンを選択肢としてdivに追加
                    //inputとlabelがセットになって追加する


                }
            }

        }
    }

    liParEl.appendChild(divEl);
    form.appendChild(liParEl);

//     var tmpLabelEl = document.createElement('label');
//     tmpLabelEl.textContent = 'わろたｗｗ'

//     var tmpInputEl = document.createElement('input');
//     tmpInputEl.type = 'radio';
//     tmpInputEl.name = 'mental';
//     tmpInputEl.form='mainform';
// tmpInputEl.value='てすとｗ'

//     form.appendChild(tmpLabelEl);
//     form.appendChild(tmpInputEl);
}
