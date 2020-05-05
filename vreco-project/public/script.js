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


function inputsInit(questions){
    var src = questions;
    var form = document.getElementById('mainform');//追加先のform

    var divEl = document.createElement('div');
    divEl.className = 'form-group'

    var tmpInputEl = document.createElement('input');
    tmpInputEl.type = 'radio';
    tmpInputEl.name = 'mental';
    tmpInputEl.form='mainform';
tmpInputEl.value='てすとｗ'

    var tmpLabelEl = document.createElement('label');
    tmpLabelEl.textContent = 'わろたｗｗ'
    form.appendChild(tmpInputEl);
    form.appendChild(tmpLabelEl);
}