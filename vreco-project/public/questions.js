//設問文として書き込む内容。「内面の魅力」など。。。
var questionSentence={
    //questionsと同じキーで書き込んでください
    //フロントで見える質問番号に対応しているので、q1はありません。
    q2:'あなたの推しの最大の魅力を教えて下さい。',
    q3:'あたなの推しはどのようなキャラですか。',
    q4:'推しの魅力的な行動を教えてください。',
    q5:'おすすめの配信はどれですか？',
    q6:'他のVtuber、またはリスナーとの魅力的な関係があれば、教えてください。',
}

var choices = {
    //仮のキー名です。書き換えてください。ただし次のオブジェクトとキー名を合わせてください
    //inputタグのname属性として使用します
    q2 : {//内面の魅力、とかそんなん
        //選択肢のキー名はinputタグのid属性に使用します
        passion :"熱血",
        cool    :"冷静",
        shy     :"内気",
　　　　　optimis :"楽天的",
        friendly:"優しい",
        commonse:"常識的",
        funny   :"面白い",
        psitive :"ポジティブ",
        intel   :"知的",
        unique  :"ユニーク",
        notneat :"清楚",
        neatness:"清楚（真）",
        sensitive:"センシティブ",
        cheerful:"陽気",
        brave   :"勇敢",
        likegame:"ゲーム好き",
      },
    q3:{//配信傾向、とか
        youkya  :"陽キャ",
        inakya  :"陰キャ",
        idol    :"アイドル",
        entertai:"芸人",
        tusndere:"ツンデレ",
        yandere :"ヤンデレ",
        kuudere :"クーデレ",
        mama    :"ママ",
        rori    :"幼女",
        trap    :"男の娘",
        nothuman:"人外",
        commoner:"常識人",
        liver   :"ライバー",
        hsgirl  :"女子高生",
        man     :"男性",
        woman   :"女性",
        ugirl   :"女子大生",
        lady    :"大人の女性",
        gentle  :"大人の男性",
        boy     :"男子",
        girl    :"女子",
    },
    q4:{
        hard    :"一生懸命",
        likefun :"楽しそう",
        dosensi :"センシティブ",
        freedom :"自由奔放",
        supcom  :"意外と常識的",
        suppage :"意外と几帳面",
        dedicate:"献身的",
    },
    q5:{
        game    :"ゲーム実況",
        chat    :"雑談配信",
        song    :"歌配信",
        plan    :"企画配信",
        collabo :"コラボ配信",
        guerri  :"ゲリラ配信",
        horror  :"ホラー実況",
        enduran :"耐久配信",
        sleep   :"寝落ち配信",
        asmr    :"ASMR配信",
        liveact :"実写配信",
        nurse   :"介護配信",
    },
    q6:{
        teetee  :"てえてえ",
        family  :"家族",
        wrestl  :"プロレス",
        partner :"相棒",
        funserve:"ファンサービス",
        funjoin :"ファン参加企画",
    }
}
