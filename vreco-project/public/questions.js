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
    q2:{//内面の魅力、とかそんなん
        //選択肢のキー名はinputタグのid属性に使用します
        passion :{label:"熱血",text:"熱血な"},
        cool    :{label:"冷静",text:"冷静な"},
        shy     :{label:"内気",text:"内気な"},
　　　　　optimis :{label:"楽天的",text:"楽天的な"},
        friendly:{label:"優しい",text:"優しい"},
        commonse:{label:"常識的",text:"常識的な"},
        funny   :{label:"面白い",text:"面白い"},
        psitive :{label:"ポジティブ",text:"ポジティブな"},
        intel   :{label:"知的",text:"知的な"},
        unique  :{label:"ユニーク",text:"ユニークな"},
        notneat :{label:"清楚",text:"清楚な"},
        neatness:{label:"清楚（真）",text:"清楚（真）な"},
        sensitive:{label:"センシティブ",text:"センシティブな"},
        cheerful:{label:"陽気",text:"陽気な"},
        brave   :{label:"勇敢",text:"勇敢な"},
        likegame:{label:"ゲーム好き",text:"ゲーム好きな"},
      },
    q3:{//配信傾向、とか
        youkya  :{label:"陽キャ",text:"陽キャが"},
        inakya  :{label:"陰キャ",text:"陰キャが"},
        idol    :{label:"アイドル",text:"アイドルが"},
        entertai:{label:"芸人",text:"芸人が"},
        tusndere:{label:"ツンデレ",text:"ツンデレが"},
        yandere :{label:"ヤンデレ",text:"ヤンデレが"},
        kuudere :{label:"クーデレ",text:"クーデレが"},
        mama    :{label:"ママ",text:"ママが"},
        rori    :{label:"幼女",text:"幼女が"},
        trap    :{label:"男の娘",text:"男の娘が"},
        nothuman:{label:"人外",text:"人外が"},
        commoner:{label:"常識人",text:"常識人が"},
        liver   :{label:"ライバー",text:"ライバーが"},
        hsgirl  :{label:"女子高生",text:"女子高生"},
        man     :{label:"男性",text:"男性が"},
        woman   :{label:"女性",text:"女性が"},
        ugirl   :{label:"女子大生",text:"女子大生が"},
        lady    :{label:"大人の女性",text:"大人の女性が"},
        gentle  :{label:"大人の男性",text:"大人の男性が"},
        boy     :{label:"男子",text:"男子が"},
        girl    :{label:"女子",text:"女子が"},
    },
    q4:{
        hard    :{label:"一生懸命",text:"一生懸命に"},
        likefun :{label:"楽しそう",text:"楽しそうに"},
        dosensi :{label:"センシティブ",text:"センシティブに"},
        freedom :{label:"自由奔放",text:"自由奔放に"},
        supcom  :{label:"意外と常識的",text:"意外と常識的に"},
        suppage :{label:"意外と几帳面",text:"意外と几帳面に"},
        dedicate:{label:"献身的",text:"献身的に"},
    },
    q5:{
        game    :{label:"ゲーム実況",text:"ゲーム実況"},
        chat    :{label:"雑談配信",text:"雑談配信"},
        song    :{label:"歌配信",text:"歌配信"},
        plan    :{label:"企画配信",text:"企画配信"},
        collabo :{label:"コラボ配信",text:"コラボ配信"},
        guerri  :{label:"ゲリラ配信",text:"ゲリラ配信"},
        horror  :{label:"ホラー実況",text:"ホラー実況"},
        enduran :{label:"耐久配信",text:"耐久配信"},
        sleep   :{label:"寝落ち配信",text:"寝落ち配信"},
        asmr    :{label:"ASMR配信",text:"ASMR配信"},
        liveact :{label:"実写配信",text:"実写配信"},
        nurse   :{label:"介護配信",text:"介護配信"},
    },
    q6:{
        teetee  :{label:"てえてえ",text:"てえてえ"},
        family  :{label:"家族",text:"家族"},
        wrestl  :{label:"プロレス",text:"プロレス"},
        partner :{label:"相棒",text:"相棒"},
        funserve:{label:"ファンサービス",text:"ファンサービス"},
        funjoin :{label:"ファン参加企画",text:"ファン参加企画"},
    }
}
