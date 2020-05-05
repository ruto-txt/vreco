function inputsInit(choices,qSentence){
    var ol = document.getElementById('mainform');//追加先のformを取得する

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
                    // inputEl.className = 'form-check-input'
                    inputEl.type = 'radio';
                    inputEl.id=sub_key;
                    inputEl.name = key;//name属性には親要素と同じ内容を書き込む

                    var inputlb = document.createElement('label');
                    // inputlb.className="form-check-label"
                    inputlb.for = sub_key;
                    inputlb.textContent = sub_element;


                    divEl.appendChild(inputEl);
                    divEl.appendChild(inputlb);
                    if (i%3==0) {
                        divEl.appendChild(document.createElement('br'));
                        i=0
                    };
                    i++;
                }
            }
        }
    }

}

inputsInit(choices,questionSentence);
