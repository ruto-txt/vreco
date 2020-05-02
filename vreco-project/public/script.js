function panelInit(){
    var panel = document.getElementById('panel')
    let child
    for(var i=0; i<9; i++){
        child = document.createElement('div');
        child.className = 'child cp_btn';
        child.addEventListener('click',transitionSelType,false);
        child.num=i;

        child.appendChild(document.createElement('div'))
        child.children[0].textContent = i + '番';
        // TODO::DBから読み取る文字列を代入してアレする
        // クリックしたら書き換えられるようになんやかんややる(transitionSelTypeで)

        panel.appendChild(child);
    }
}

function transitionSelType(){
    alert('クリックされました')
}

panelInit();
