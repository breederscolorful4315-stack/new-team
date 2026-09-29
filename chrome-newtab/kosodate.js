var JOBS=[
["園・保育","保育士","毎日十数人の2〜5歳を見ている。家では見えない顔と、朝の別れ際を知っている"],
["園・保育","幼稚園教諭","入園・行事・就学前。親が一番焦る時期を横で見ている"],
["園・保育","認定こども園・園長","何百組の親子の「最初の集団生活」を見てきた"],
["園・保育","ベビーシッター・家事支援","家の中に入って見ている。親が人に言えない困りごと"],
["園・保育","学童保育の指導員","放課後の小学生。学校と家のあいだの素の姿"],
["学校・習いごと","小学校教師","低学年と高学年で、親に伝えたいことがまるで違う"],
["学校・習いごと","中学校教師","反抗期・部活・高校受験。親と子が一番すれ違う3年間"],
["学校・習いごと","高校教師","進路と自立。親の手を離れていく最後の時期"],
["学校・習いごと","塾講師・家庭教師","勉強できる子の家で、親が言っていること・言っていないこと"],
["学校・習いごと","習いごと・スポーツの指導者","続く子とやめる子。親の関わり方の差"],
["医療・専門職","小児科の看護師・スタッフ","熱・けが・予防接種。親が夜中に検索していること"],
["医療・専門職","保健師・子育て支援センター","健診で親が一番よく口にする心配ごと"],
["医療・専門職","臨床心理士・公認心理師","親子の面接で、親が本当に困っていること"],
["医療・専門職","言語聴覚士・作業療法士","ことば・手先・からだの育ち。待つか、相談するかの境目"],
["医療・専門職","管理栄養士・食育の仕事","偏食・少食・食べムラ。毎日の食卓の話"],
["医療・専門職","放課後等デイサービス・療育","特性のある子の毎日と、家でできる工夫"],
["家庭・当事者","2人以上を育てた母親","上の子の失敗が、下の子で生きた。その順番"],
["家庭・当事者","子育て中の父親","父親の側から見た家事・育児。父親向けの本は少ない"],
["家庭・当事者","ワーキングマザー・共働き家庭","時間がない家の回し方。保育園・学童・朝の30分"],
["家庭・当事者","ひとり親","1人で回す家の、手の抜きどころと頼り先"],
["家庭・当事者","子育てを終えた親（18歳以上の子）","振り返ってみて、本当に大事だったこと・どうでもよかったこと"],
["家庭・当事者","祖父母（孫育て）","口を出さずに手を貸す距離感。今と昔の違い"],
["家庭・当事者","双子・年子の親","同時に2人。一般の育児書が合わない部分"],
["家庭・当事者","転勤・海外での子育て経験者","環境が変わるたびに、子どもに起きたこと"]
];
var AGES=["2〜3歳","4〜6歳（幼児）","小学1〜3年","小学4〜6年","中学生","高校生（〜18歳）"];
var THEMES=[
{a:0,n:"イヤイヤ期の毎日の乗り切り方",sub:"一番検索される時期。親が最初に折れる",kw:"イヤイヤ期 2歳 対応"},
{a:0,n:"トイレトレーニングの始め方と焦らない進め方",sub:"周りと比べて焦る親が買う",kw:"トイトレ 2歳 3歳 進め方"},
{a:0,n:"ことばが遅いかも？と思ったとき",sub:"健診前後に読まれる本",kw:"言葉 遅い 2歳 相談"},
{a:1,n:"入園前後の準備と朝の別れ方",sub:"泣いて離れない朝の本",kw:"入園 準備 登園しぶり"},
{a:1,n:"叱り方・ほめ方の基本",sub:"毎日の声かけが本になる",kw:"叱り方 幼児 ほめ方"},
{a:1,n:"小学校入学までに家でしておくこと",sub:"年長の親が必ず探す",kw:"入学準備 年長 家庭"},
{a:2,n:"宿題・音読を毎日続ける家のしくみ",sub:"低学年の夕方の戦い",kw:"宿題 低学年 習慣"},
{a:2,n:"友だちトラブルに親はどこまで入るか",sub:"学校に言うか迷う親へ",kw:"友達 トラブル 小学生 親"},
{a:2,n:"習いごとの選び方とやめどき",sub:"続かない、やめたいと言われたとき",kw:"習い事 選び方 やめる"},
{a:3,n:"スマホ・ゲームの家庭ルール",sub:"最初の1台を渡す前に読まれる",kw:"スマホ ルール 小学生 ゲーム"},
{a:3,n:"中学受験するか・しないかの決め方",sub:"小3〜小4の親が買う",kw:"中学受験 決め方 迷う"},
{a:3,n:"思春期の入り口　からだと心の変化",sub:"性教育を含む。親が言い出せない話",kw:"思春期 小学生 性教育 親"},
{a:4,n:"反抗期の子との会話のしかた",sub:"口をきかなくなった子の親へ",kw:"反抗期 中学生 接し方"},
{a:4,n:"部活と勉強の両立を親が支える方法",sub:"中1の夏に読まれる",kw:"部活 勉強 両立 中学生"},
{a:4,n:"高校受験で親がしていいこと・しないこと",sub:"中2中3の親が買う",kw:"高校受験 親 サポート"},
{a:5,n:"進路・大学選びに親はどう関わるか",sub:"口を出しすぎて揉める前に",kw:"進路 高校生 親 関わり方"},
{a:5,n:"お金の話と自立の準備",sub:"一人暮らし・アルバイト・お小遣い",kw:"高校生 お金 自立 教育"},
{a:5,n:"18歳で手を離すまでに伝えておくこと",sub:"子育ての最後の本。卒業する親へ",kw:"子離れ 18歳 親 伝える"}
];
var RULES=[
{id:"hype",sev:"r",label:"煽り",re:/(?:必ず|誰でも|絶対|完全版|神本|神メソッド|月収|放置|スマホだけで|稼げる)/g},
{id:"promise",sev:"r",label:"約束・断定",re:/(?:頭が良くなる|頭がよくなる|天才|IQ|ＩＱ|東大|治る|治す|完治|劇的|魔法の|[0-9０-９一二三四五六七八九十]+(?:日|週間|ヶ月|か月)で(?:トイトレ|おむつ|オムツ|卒業|解決|改善|完了|できる|変わる|言うことを聞く)|100%|１００％)/g},
{id:"roma",sev:"r",label:"ローマ字の記号",re:/(?:[A-Za-z][A-Za-z0-9 \-]*[.,()（）．，])/g},
{id:"url",sev:"r",label:"ロゴ・URL",re:/(?:https?:\/\/|www\.|\.com|\.co\.jp|ロゴ)/gi},
{id:"ident",sev:"y",label:"子ども・園・学校が特定されそう",re:/(?:[一-龥ぁ-んァ-ヶ]{1,6}(?:保育園|幼稚園|こども園|小学校|中学校|高等学校)|[一-龥ぁ-んァ-ヶ]{1,4}(?:くん|ちゃん)|実名|本名|うちの長男|うちの長女)/g},
{id:"medical",sev:"y",label:"診断・薬・発達",re:/(?:診断|服薬|薬|発達障害|発達の遅れ|ADHD|ASD|自閉|うつ|アレルギー|HSP|グレーゾーン)/g},
{id:"blame",sev:"y",label:"責める・比べる言葉",re:/(?:母親失格|父親失格|愛情不足|親のせい|育て方が悪い|甘やかし|わがまま|普通の子|できない子|〇〇ちゃんは)/g},
{id:"safety",sev:"y",label:"安全に関わる言葉",re:/(?:叩く|たたく|体罰|お尻ペンペン|閉じ込め|放っておく|一人で留守番)/g},
{id:"rights",sev:"y",label:"権利・他人の名前っぽい",re:/(?:著作権者でない|他人の経験|実在の)/g},
{id:"cover",sev:"y",label:"表紙に入れてはいけないもの",re:/(?:QR|二次元|顔写真|アイコン|子どもの写真)/g}
];
var CHK8=[
["Claude のメモリと過去チャットの参照をOFFにした","個人設定（Claudeへの指示）も空。切らないと再現できない"],
["1冊は1つのチャットで最後まで進めた","貼る1〜4は前の返事が前提。途中で新しいチャットにしない"],
["押したのはマイク（音声入力）。音声モードは使っていない","音声モードは会話になる。工程が飛ぶ"],
["貼る3の「補った箇所」を確認した","言っていない経験が載っていたら消す"],
["子ども・家庭・園・学校が特定できる情報を消した","名前、園名、学校名、地域、年度、珍しい出来事の組み合わせ。自分の子の話でも、本人が読んで嫌がる形はNG"],
["病気・発達・アレルギー・事故の話を断定していない","医療職でなければ「かかりつけ医・健診で確認を」で止める。年齢の目安は「個人差がある」を添える"],
["親や子どもを責める・比べる書き方になっていない","「母親失格」「普通の子は」と読める文が無いか。叩く・体罰を肯定していないか。読むのは疲れている親"],
["タイトルのフリガナはカタカナ／ローマ字に括弧・ピリオド・コンマが無い","日本語タイトルだと必須。この3つは使えない"],
["表紙は題名と著者名だけ","子どもの写真、ロゴ、URL、実在の人名を入れない"],
["プレビューアーで本として開いて見た","見出しの崩れと変な改行"]
];
var CHK10=[
["KDPセレクトにチェックした","読み放題に載る。15冊積む前提なら入れる"],
["出版地域はすべての地域（全世界）","13カ国。翻訳はしない"],
["権利は「私は著作権者であり」","喋った自分の経験ならこれ"],
["事例は本人・保護者の同意を取ったか、特定できない形に作り替えた","保育士・教師・医療職など守秘義務のある職種は、職場の規程も確認。自分の子なら、大きくなって読んでも困らない形か"],
["露骨な性的表現は「いいえ」",""],
["主なマーケットプレイスは Amazon.co.jp","ここで決めた価格が他12カ国の基準"],
["ロイヤリティは70%。電子は1,200円","250〜1,650の外だと70%が選べない"],
["紙は1,500円。電子は紙より20%以上安い","紙1,500の80%＝1,200が電子の上限。紙は999を割ると50%"],
["押す前の3点：誤字／権利／価格","タイトルは出版後に直せない"],
["「Kindle 本を出版」は自分で押す","審査は最大72時間。初月の収入はゼロで見ておく。KENPは翌月15日頃に確定"]
];
var PER=26734;
var $=function(s){return document.querySelector(s)};
var jsel=$("#job"), tsel=$("#theme"), jfree=$("#jobfree");
(function(){
  var g="",og=null;
  JOBS.forEach(function(j,i){
    if(j[0]!==g){g=j[0];og=document.createElement("optgroup");og.label=g;jsel.appendChild(og);}
    var o=document.createElement("option");o.value=i;o.textContent=j[1];og.appendChild(o);
  });
  var ga=-1,tg=null;
  THEMES.forEach(function(t,i){
    if(t.a!==ga){ga=t.a;tg=document.createElement("optgroup");tg.label=AGES[t.a];tsel.appendChild(tg);}
    var o=document.createElement("option");o.value=i;o.textContent=(i+1)+". "+t.n;tg.appendChild(o);
  });
})();
function J(){return jfree.value.trim()?jfree.value.trim():JOBS[jsel.value][1]}
function D(){var f=jfree.value.trim(); return f?f+"として見てきた子育ての内側。外からは見えない":JOBS[jsel.value][2]}
function TH(){return THEMES[tsel.value]}
function AG(){return AGES[TH().a]}
function yen(n){return Math.round(n).toLocaleString("ja-JP")}
function pad2(n){return n<10?"0"+n:""+n}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function eFromWant(w){return Math.max(250, Math.min(1650, Math.round((w+1)/0.7)))}
function eNet(p){return Math.round(p*0.7 - 1)}
document.querySelectorAll(".tab").forEach(function(t){t.onclick=function(){go(t.dataset.t)}});
document.addEventListener("click",function(e){var b=e.target.closest("button[data-go]"); if(b) go(b.dataset.go)});
function go(n){
  document.querySelectorAll(".tab").forEach(function(x){x.classList.toggle("on",x.dataset.t===n)});
  document.querySelectorAll(".panel").forEach(function(x){x.classList.toggle("on",x.id==="t"+n)});
  window.scrollTo({top:0,behavior:"smooth"});
}
function P1(){
  return "あなたは、子育てに関わってきた無名の個人が、自分の経験だけを元に Kindle 本を出すのを支援する編集者です。\n\n"+
  "【前提】\n"+
  "私は文章を書いた経験がありません。本を出した実績もありません。\n"+
  "自分では「専門家と名乗れるほどの経験はない」と思っています。\n"+
  "子育てとの関わり方（立場）は「"+J()+"」です。いま作る1冊は、子どもの年齢「"+AG()+"」、仮の軸は「"+TH().n+"」です。"+D()+"。\n"+
  "読む人の多くは、いま「"+AG()+"」の子どもを育てていて、毎日の中で困っている保護者です。\n\n"+
  "【やること】\n"+
  "私に質問をしてください。\n"+
  "目的は、私が「当たり前すぎて価値がないと思っている経験」を、外から見つけ出すことです。\n\n"+
  "【質問の条件】\n"+
  "・1回に10問以内。番号を振ってください。\n"+
  "・答えが一言で済む形にしてください。長い説明を求めないでください。\n"+
  "・資格・肩書き・成功例の数は聞かないでください。\n"+
  "・代わりに、次のようなことを聞いてください：\n"+
  "  この年齢の子に関わって何年か／これまで関わった子どもや家庭のおおよその数（自分の子なら人数と年齢差）／\n"+
  "  この年齢の親が一番よく口にする心配ごと／親がこの時期にやってしまいがちなこと／\n"+
  "  子どもが次の段階に進む前によく見えるサイン／家と園・学校で子どもの様子が違うところ／\n"+
  "  自分が考え方を変えたきっかけ／周りから一番よく聞かれる質問／\n"+
  "  人に説明したときに「知らなかった」と言われたこと／今ならやらないと思うこと\n\n"+
  "【禁止】\n"+
  "・子ども・家庭・園・学校の実名や、地域・年度など個人の特定につながる詳細を聞くこと\n"+
  "・「あなたの強みは何ですか」のような、私が答えられない抽象的な質問\n"+
  "・励まし、称賛、前置き。質問だけを出してください。";
}
function P2(){
  return "私の答えを踏まえて、子育てをテーマにした Kindle 本のネタ候補を3つ出してください。\n"+
  "私の立場は「"+J()+"」。子どもの年齢は「"+AG()+"」。いま作る1冊の軸は「"+TH().n+"」。\n\n"+
  "【各候補に必ず付けること】\n"+
  "1. 本のタイトル案（日本語・20文字前後）\n"+
  "2. 誰が読むのか（1行。子どもの年齢・学年、読む人の立場、いま何に困っているかを含めること）\n"+
  "3. その人が、これを読まないとどう困るのか（1行）\n"+
  "4. なぜ私がこれを書けるのか（私の答えの中から、根拠を1つ引用すること）\n"+
  "5. その人が Amazon の検索窓に打つと思われる言葉を3つ（年齢を表す言葉を1つ入れること）\n\n"+
  "【選ぶ基準】\n"+
  "・「私が詳しいこと」ではなく「読む人がいま困っていること」を軸にしてください\n"+
  "・「頭が良くなる」「〇日でできるようになる」「叱らなくても言うことを聞く」のような約束が必要になるテーマは外してください\n"+
  "・すでに専門家が何冊も出している一般論は外し、私の立場からしか見えない部分を優先してください\n"+
  "・年齢の幅は広げすぎず、「"+AG()+"」の親がそのまま使える内容にしてください\n"+
  "・私の経験の中で、年数がいちばん長いものを優先してください\n\n"+
  "【最後に】\n"+
  "3つのうち、どれを最初の1冊にすべきか、理由を2行で書いてください。\n"+
  "そして選んだ1冊の章立てを、8章分、各章のタイトルだけ出してください。";
}
function P3(){
  return "いま私が話した内容を、本の原稿の形に整えてください。\n"+
  "私の立場は「"+J()+"」。子どもの年齢は「"+AG()+"」。いま作る1冊は「"+TH().n+"」。\n\n"+
  "【条件】\n"+
  "・話し言葉を書き言葉に直してください。「えーと」「あの」「まあ」は消してください。\n"+
  "・内容を足さないでください。私が言っていないことを書かないでください。\n"+
  "・私が言い間違えた箇所は、前後から判断して直してください。\n"+
  "・1段落は3〜4行にしてください。\n"+
  "・見出しを2〜3個入れてください。\n"+
  "・数字が出てきた箇所は、そのままの数字を残してください。\n"+
  "・敬体（です・ます）で統一してください。\n"+
  "・子どもや家庭の事例は、名前・園名・学校名・地域・年度を伏せ、「ある4歳の男の子」「ある中学2年生の女の子」のように一般化してください。\n"+
  "・病気・発達・アレルギー・事故予防について、私が言っていない断定を加えないでください。年齢の目安には「個人差があります」を添えてください。\n"+
  "・保護者や子どもを責めている・ほかの子と比べていると読める表現は、意味を変えずに言い換えてください。\n\n"+
  "【最後に必ず】\n"+
  "・私が言っていないのに補った箇所があれば、リストで報告してください。\n"+
  "・個人が特定されるおそれのある箇所があれば、リストで報告してください。\n"+
  "・子どもの安全に関わる記述（叩く、一人にする、誤飲、水まわり など）があれば、リストで報告してください。\n"+
  "・話が飛んでいて意味が通らない箇所があれば、\n"+
  "　「ここを補足で喋ってください」と指摘してください。";
}
function P4(){
  return "この原稿を Kindle で出版します。商品ページに使う要素を作ってください。\n"+
  "テーマは子育て。子どもの年齢は「"+AG()+"」。私の立場は「"+J()+"」。いま作る1冊は「"+TH().n+"」。\n\n"+
  "【出すもの】\n"+
  "1. 内容紹介（Amazon の商品説明に貼るもの・400字前後）\n"+
  "   ・冒頭2行で「何歳の子の親の、どの困りごとの本か」が分かるようにしてください\n"+
  "   ・煽らないでください。「必ず」「誰でも」「絶対」は使わないでください\n"+
  "   ・「頭が良くなる」「〇日でできる」「言うことを聞く」のような結果の約束はしないでください\n"+
  "   ・読む保護者を責める書き方、ほかの家と比べる書き方、不安をあおる書き方はしないでください\n"+
  "2. キーワードを7つ\n"+
  "   ・1つ50文字以内\n"+
  "   ・実際に Amazon の検索窓に打たれる言葉にしてください（年齢・学年を表す言葉を含めること）\n"+
  "   ・タイトルに入っている言葉と重複させないでください\n"+
  "3. カテゴリー候補を3つ\n"+
  "4. タイトル案を3つ（各20文字前後）。\n"+
  "   それぞれに、フリガナ（カタカナ）とローマ字表記を付けてください。\n"+
  "   ローマ字に、括弧・ピリオド・コンマは使わないでください。";
}
/* ===== 本ごとの記憶と、Obsidian vault への保存 ===== */
var BASE=["Kindle","子育て"];
var LSP="kosodate-kit:";
var V={h:null, ok:false, fsa:typeof window.showDirectoryPicker==="function", written:{}, busy:false};
var S=null, curKey=null, dirty=false, saveT=null, IDX={};
function lsGet(k){try{var v=localStorage.getItem(LSP+k);return v?JSON.parse(v):null}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(LSP+k,JSON.stringify(v))}catch(e){}}
function safe(s){return String(s).replace(/[\\\/:*?"<>|#^\[\]]/g,"").replace(/\s+/g," ").trim()}
function bookKey(i){return pad2(i+1)+"_"+safe(THEMES[i].n)}
function bookPath(key){return BASE.join("/")+"/"+key}
function now(){var d=new Date();return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate())+"T"+pad2(d.getHours())+":"+pad2(d.getMinutes())}
function today(){return now().slice(0,10)}
function newState(){return {v:1,role:"",u:0,parts:{a1:"",a2:"",a4:""},ch:{},chap:1,chk8:[],chk10:[],src:"",want:839,published:"",created:now(),updated:""}}
function chDone(st){var n=0;for(var i=1;i<=8;i++){if(st.ch[i]&&st.ch[i].trim())n++}return n}
function allOn(a,len){if(a.length<len)return false;for(var i=0;i<len;i++){if(!a[i])return false}return true}
function statusOf(st){
  if(st.published) return "出版済み";
  if(st===S&&st.src.trim()&&redCount===0&&allOn(st.chk8,CHK8.length)&&allOn(st.chk10,CHK10.length)) return "検品済み";
  if(st.parts.a4.trim()) return "商品ページ作成";
  var n=chDone(st); if(n) return "原稿中";
  if(st.parts.a2.trim()) return "章立て済み";
  if(st.parts.a1.trim()) return "質問中";
  return "未着手";
}
function summary(st){return {status:statusOf(st),ch:chDone(st),updated:st.updated||""}}

/* --- IndexedDB（選んだフォルダを覚えておく） --- */
function idb(){return new Promise(function(res,rej){try{var r=indexedDB.open("kosodate-kit",1);r.onupgradeneeded=function(){r.result.createObjectStore("h")};r.onsuccess=function(){res(r.result)};r.onerror=function(){rej(r.error)}}catch(e){rej(e)}})}
function idbSet(v){return idb().then(function(db){return new Promise(function(res){var t=db.transaction("h","readwrite");t.objectStore("h").put(v,"vault");t.oncomplete=res;t.onerror=res})}).catch(function(){})}
function idbGet(){return idb().then(function(db){return new Promise(function(res){var t=db.transaction("h","readonly");var q=t.objectStore("h").get("vault");q.onsuccess=function(){res(q.result||null)};q.onerror=function(){res(null)}})}).catch(function(){return null})}

/* --- ファイル操作 --- */
async function subDir(dir,parts,create){
  for(var i=0;i<parts.length;i++){
    try{dir=await dir.getDirectoryHandle(parts[i],{create:!!create})}catch(e){if(create)throw e;return null}
  }
  return dir;
}
async function readText(dir,name){try{var fh=await dir.getFileHandle(name);return await (await fh.getFile()).text()}catch(e){return null}}
async function writeText(dir,name,text){var fh=await dir.getFileHandle(name,{create:true});var w=await fh.createWritable();await w.write(text);await w.close()}
function stripMd(t){
  if(t==null) return "";
  t=t.replace(/\r\n/g,"\n").replace(/^---\n[\s\S]*?\n---\n/,"").replace(/^\s*#[^\n]*\n\n?/,"");
  return t.replace(/\n+$/,"");
}
function fmVal(v){
  if(typeof v==="number"||typeof v==="boolean") return String(v);
  if(v===""||v==null) return "";
  if(/^\d{4}-\d\d-\d\d(T\d\d:\d\d)?$/.test(v)) return v;
  return JSON.stringify(String(v));
}
function fm(o){
  var s="---\n";
  Object.keys(o).forEach(function(k){
    var v=o[k];
    if(Array.isArray(v)){s+=k+":\n";v.forEach(function(x){s+="  - "+x+"\n"})}
    else{var x=fmVal(v);s+=k+":"+(x?" "+x:"")+"\n"}
  });
  return s+"---\n";
}
function readFm(t,k){var m=t&&t.match(new RegExp("^"+k+":\\s*(.*)$","m"));if(!m)return "";var v=m[1].trim();if(v.charAt(0)==='"'){try{return JSON.parse(v)}catch(e){}}return v}
function link(key,file,label){return "[["+bookPath(key)+"/"+file+(label?"|"+label:"")+"]]"}

function partMd(title,part,extra,body){
  var o={type:"kindle-part",series:"子育て",book:curKey,part:part};
  for(var k in extra) o[k]=extra[k];
  o.role=S.role; o.tags=["kindle/子育て","kindle/"+part];
  return fm(o)+"\n# "+title+"\n\n"+body+"\n";
}
function buildFiles(){
  var i=+tsel.value, th=THEMES[i], f={}, st=summary(S), n=st.ch;
  if(S.parts.a1.trim()||V.written["01_質問と答え.md"]!=null) f["01_質問と答え.md"]=partMd("質問と答え","質問",{},S.parts.a1);
  if(S.parts.a2.trim()||V.written["02_ネタと章立て.md"]!=null) f["02_ネタと章立て.md"]=partMd("ネタと章立て","章立て",{},S.parts.a2);
  for(var c=1;c<=8;c++){
    var nm="03_原稿/第"+c+"章.md";
    if((S.ch[c]&&S.ch[c].trim())||V.written[nm]!=null) f[nm]=partMd("第"+c+"章","原稿",{chapter:c},S.ch[c]||"");
  }
  if(S.parts.a4.trim()||V.written["04_商品ページ.md"]!=null) f["04_商品ページ.md"]=partMd("商品ページ","商品ページ",{},S.parts.a4);
  var hasChk=S.chk8.some(Boolean)||S.chk10.some(Boolean);
  if(S.src.trim()||hasChk||V.written["05_検品結果.md"]!=null){
    var body="- 赤："+redCount+"箇所\n";
    lastRed.forEach(function(h){body+="  - "+h.label+"「"+h.txt+"」\n"});
    body+="- 判定："+(statusOf(S)==="検品済み"||S.published?"押していい":"まだ押すな")+"\n\n## 目でやる"+CHK8.length+"個\n";
    CHK8.forEach(function(a,j){body+="- ["+(S.chk8[j]?"x":" ")+"] "+a[0]+"\n"});
    body+="\n## 規約と公開のゲート\n";
    CHK10.forEach(function(a,j){body+="- ["+(S.chk10[j]?"x":" ")+"] "+a[0]+"\n"});
    body+="\n## 貼った文\n\n"+S.src;
    f["05_検品結果.md"]=partMd("検品結果","検品",{red:redCount},body);
  }
  var p=eFromWant(S.want);
  var head=fm({type:"kindle-book",series:"子育て",book_no:i+1,age:AGES[th.a],theme:th.n,role:S.role,status:st.status,
    chapters_done:n,price_ebook:p,price_print:1500,published:S.published||"",created:S.created,updated:S.updated||now(),
    tags:["kindle/子育て","kindle/book"]});
  var b="\n# "+pad2(i+1)+" "+th.n+"\n\n> 年齢："+AGES[th.a]+" ／ 立場："+S.role+" ／ 状態："+st.status+"（原稿 "+n+"/8章）\n> 検索語："+th.kw+"\n\n## ファイル\n";
  b+="- "+(S.parts.a1.trim()?"✅":"⬜")+" "+link(curKey,"01_質問と答え","質問と答え")+"\n";
  b+="- "+(S.parts.a2.trim()?"✅":"⬜")+" "+link(curKey,"02_ネタと章立て","ネタと章立て")+"\n";
  b+="- 原稿：";
  var cl=[];for(var c2=1;c2<=8;c2++){cl.push((S.ch[c2]&&S.ch[c2].trim()?"✅":"⬜")+link(curKey,"03_原稿/第"+c2+"章","第"+c2+"章"))}
  b+=cl.join(" ")+"\n";
  b+="- "+(S.parts.a4.trim()?"✅":"⬜")+" "+link(curKey,"04_商品ページ","商品ページ")+"\n";
  b+="- "+(S.src.trim()?"✅":"⬜")+" "+link(curKey,"05_検品結果","検品結果")+"\n";
  b+="\n## 価格\n- 電子 "+yen(p)+"円（手取り "+yen(eNet(p))+"円）／紙 1,500円\n";
  var mem={v:1,role:S.role,u:S.u,chap:S.chap,chk8:S.chk8,chk10:S.chk10,want:S.want,published:S.published,created:S.created};
  b+="\n## キットの記憶（編集しないでください）\n\n```kit-state\n"+JSON.stringify(mem).replace(/`/g,"\\u0060")+"\n```\n";
  f["00_進み具合.md"]=head+b;
  return f;
}
function shelfMd(){
  var s=fm({type:"kindle-shelf",series:"子育て",updated:now(),tags:["kindle/子育て","kindle/shelf"]});
  s+="\n# 子育て Kindle の棚（2歳〜18歳）\n\n| # | 年齢 | 本 | 状態 | 原稿 | 更新 |\n|---|---|---|---|---|---|\n";
  THEMES.forEach(function(th,i){
    var k=bookKey(i), x=IDX[k];
    s+="| "+pad2(i+1)+" | "+AGES[th.a]+" | "+(x?"[["+bookPath(k)+"/00_進み具合\\|"+th.n+"]]":th.n)+" | "+(x?x.status:"未着手")+" | "+(x?x.ch+"/8":"")+" | "+(x&&x.updated?x.updated.replace("T"," "):"")+" |\n";
  });
  return s;
}
async function saveVault(){
  if(!V.ok||!V.h||V.busy) return false;
  V.busy=true;
  try{
    var dir=await subDir(V.h,BASE.concat([curKey]),true), files=buildFiles();
    for(var name in files){
      if(V.written[name]===files[name]) continue;
      var d=dir, nm=name;
      if(name.indexOf("/")>0){d=await subDir(dir,[name.split("/")[0]],true);nm=name.split("/")[1]}
      await writeText(d,nm,files[name]); V.written[name]=files[name];
    }
    IDX[curKey]=summary(S);
    await writeText(await subDir(V.h,BASE,true),"_棚.md",shelfMd());
    vstat("ok","保存しました "+now().slice(11)+"　"+V.h.name+"/"+bookPath(curKey));
    return true;
  }catch(e){
    try{console.warn("vault save failed",e)}catch(x){}
    V.ok=false; vstat("ng","vault に書けませんでした。「保存先を選ぶ」から もう一度つないでください。（"+(e&&e.name||"エラー")+"）");
    $("#vpick").textContent="vault に再接続";
    return false;
  }finally{V.busy=false}
}
async function loadFromVault(key,st){
  var dir=await subDir(V.h,BASE.concat([key]),false);
  if(!dir) return false;
  var head=await readText(dir,"00_進み具合.md"), got=false;
  if(head){
    var m=head.match(/```kit-state\n([\s\S]*?)\n```/);
    if(m){try{var mem=JSON.parse(m[1]);for(var k in mem) st[k]=mem[k];got=true}catch(e){}}
    var up=readFm(head,"updated"); if(up) st.updated=up;
    var pub=readFm(head,"published"); if(pub) st.published=pub;
  }
  var map={a1:"01_質問と答え.md",a2:"02_ネタと章立て.md",a4:"04_商品ページ.md"};
  for(var a in map){var t=await readText(dir,map[a]); if(t!=null){st.parts[a]=stripMd(t);V.written[map[a]]=t;got=true}}
  var cd=await subDir(dir,["03_原稿"],false);
  if(cd){for(var c=1;c<=8;c++){var ct=await readText(cd,"第"+c+"章.md"); if(ct!=null){st.ch[c]=stripMd(ct);V.written["03_原稿/第"+c+"章.md"]=ct;got=true}}}
  var r=await readText(dir,"05_検品結果.md");
  if(r!=null){var i=r.indexOf("\n## 貼った文\n\n"); st.src=i>=0?r.slice(i+10).replace(/\n+$/,""):""; V.written["05_検品結果.md"]=r; got=true}
  if(head) V.written["00_進み具合.md"]=head;
  return got;
}
async function scanIdx(){
  for(var i=0;i<THEMES.length;i++){
    var k=bookKey(i), dir=await subDir(V.h,BASE.concat([k]),false);
    if(!dir) continue;
    var h=await readText(dir,"00_進み具合.md");
    if(h) IDX[k]={status:readFm(h,"status")||"未着手",ch:+readFm(h,"chapters_done")||0,updated:readFm(h,"updated")};
  }
}
function vstat(cls,msg){var e=$("#vstat");e.className="vstat"+(cls?" "+cls:"");e.textContent=msg}
async function connect(h,gesture){
  if(!h||typeof h.getDirectoryHandle!=="function") return;
  try{
    var perm=h.queryPermission?await h.queryPermission({mode:"readwrite"}):"granted";
    if(perm!=="granted"&&gesture&&h.requestPermission) perm=await h.requestPermission({mode:"readwrite"});
    if(perm!=="granted"){
      V.h=h; $("#vpick").textContent="vault に再接続（"+h.name+"）";
      vstat("","前回の保存先「"+h.name+"」があります。ボタンを押して、編集を許可してください。");
      return;
    }
    V.h=h; V.ok=true; V.written={};
    $("#vpick").textContent="保存先を変える";
    if(h.name!=="jigyo-vault") vstat("","「"+h.name+"」につなぎました。jigyo-vault でなければ、選び直してください。");
    await scanIdx();
    var hadLocal=S&&(S.updated||"");
    var st=newState(); st.role=S?S.role:J();
    var got=await loadFromVault(curKey,st);
    if(got&&(!hadLocal||(st.updated||"")>=hadLocal)){S=st;lsSet(curKey,S);applyState()}
    else{dirty=true}
    await flush();
    if(V.ok) vstat("ok","接続中："+h.name+"/"+BASE.join("/")+"/　本ごとにフォルダを作って自動で保存します。");
    buildShelf();
  }catch(e){vstat("ng","つなげませんでした（"+(e&&e.name||"エラー")+"）。")}
}
$("#vpick").onclick=async function(){
  if(!V.fsa){say("このブラウザは直接保存に非対応です。PCの Chrome か Edge で開いてください");
    vstat("ng","このブラウザではフォルダに直接保存できません。PCの Chrome / Edge で開くか、各欄の「.mdで保存」を使ってください。");return}
  if(V.h&&!V.ok){await connect(V.h,true);return}
  try{
    var h=await window.showDirectoryPicker({id:"jigyo-vault",mode:"readwrite"});
    await idbSet(h); await connect(h,true);
  }catch(e){if(e&&e.name!=="AbortError") vstat("ng","選べませんでした（"+e.name+"）。")}
};
function downloadMd(name,text){
  var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type:"text/markdown"}));
  a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},500);
}
function touch(){
  if(!S) return;
  dirty=true; S.updated=now(); S.t=Date.now(); lsSet(curKey,S);
  if(!V.ok) IDX[curKey]=summary(S);
  clearTimeout(saveT); saveT=setTimeout(flush,1200);
}
async function flush(){
  clearTimeout(saveT);
  if(!dirty) return;
  dirty=false;
  IDX[curKey]=summary(S);
  if(V.ok) await saveVault();
  else if(!V.h) vstat("","未接続。いまは このブラウザの中にだけ 記憶しています（"+now().slice(11)+"）。");
  buildShelf();
}
async function switchBook(i){
  await flush();
  curKey=bookKey(i); V.written={};
  var st=lsGet(curKey)||newState();
  st.parts=st.parts||{a1:"",a2:"",a4:""}; st.ch=st.ch||{};
  if(V.ok){var vs=newState();var got=await loadFromVault(curKey,vs); if(got&&(vs.updated||"")>=(st.updated||"")) st=vs}
  if(!st.role) st.role=J();
  S=st; lsSet(curKey,S); lsSet("last",i);
  document.title="子育てキット "+pad2(i+1)+"｜"+THEMES[i].n;
  applyState();
}
function setRole(role){
  var idx=-1; JOBS.forEach(function(j,i){if(j[1]===role)idx=i});
  if(idx>=0){jsel.value=idx;jfree.value=""}else if(role){jfree.value=role}
}
function applyState(){
  setRole(S.role);
  $("#a1").value=S.parts.a1; $("#a2").value=S.parts.a2; $("#a4").value=S.parts.a4;
  buildChap(); $("#a3").value=S.ch[S.chap]||"";
  setChecks("#c8",S.chk8); setChecks("#c10",S.chk10);
  src.value=S.src; want.value=S.want;
  renderAll(); step1(); scan(); applyLocks();
}
function applyLocks(){
  var n=chDone(S);
  $("#c2").classList.toggle("locked",!(S.u>=1||S.parts.a1.trim()||S.parts.a2.trim()||n));
  $("#c3").classList.toggle("locked",!(S.u>=2||S.parts.a2.trim()||n));
  $("#c4").classList.toggle("locked",!(S.u>=3||n||S.parts.a4.trim()));
}
function buildChap(){
  var sel=$("#chap"); sel.innerHTML="";
  for(var c=1;c<=8;c++){var o=document.createElement("option");o.value=c;o.textContent="第"+c+"章"+(S.ch[c]&&S.ch[c].trim()?"　✓":"");sel.appendChild(o)}
  sel.value=S.chap; $("#chapLbl").textContent="→ 03_原稿/第"+S.chap+"章.md（"+chDone(S)+"/8章）";
}
["a1","a2","a4"].forEach(function(id){$("#"+id).addEventListener("input",function(){S.parts[id]=this.value;applyLocks();touch()})});
$("#a3").addEventListener("input",function(){
  var had=!!(S.ch[S.chap]&&S.ch[S.chap].trim()); S.ch[S.chap]=this.value;
  if(had!==!!this.value.trim()) buildChap();
  applyLocks(); touch();
});
$("#chap").onchange=function(){S.chap=+this.value;$("#a3").value=S.ch[S.chap]||"";buildChap();touch()};
$("#toCheck").onclick=function(){
  if(!S.parts.a4.trim()){say("先に貼る4の返事を貼ってください");return}
  src.value=S.parts.a4; S.src=src.value; scan(); touch(); go("3");
};
document.addEventListener("click",function(e){
  var b=e.target.closest("button[data-save]"); if(!b) return;
  if(V.ok){dirty=true;flush().then(function(){say("vault に保存しました")});return}
  if(V.fsa){say("先に「保存先（Obsidian vault）を選ぶ」を押してください");window.scrollTo({top:0,behavior:"smooth"});return}
  var f=buildFiles(), id=b.dataset.save;
  var name=id==="a1"?"01_質問と答え.md":id==="a2"?"02_ネタと章立て.md":id==="a4"?"04_商品ページ.md":"03_原稿/第"+S.chap+"章.md";
  if(!f[name]){say("まだ何も貼られていません");return}
  downloadMd(curKey+"_"+name.replace("03_原稿/",""),f[name]); say(".md をダウンロードしました");
});
$("#pubBtn").onclick=function(){
  if(S.published){say("出版済みとして記録されています（"+S.published+"）");return}
  S.published=today(); touch(); flush(); gate(); say("出版済みとして記録しました");
};

/* ===== 画面 ===== */
function buildShelf(){
  var sh=$("#shelf"); sh.innerHTML="";
  var cur=+tsel.value;
  var la=-1;
  THEMES.forEach(function(th,i){
    if(th.a!==la){la=th.a;var hd=document.createElement("div");hd.className="agehd";hd.textContent=AGES[th.a];sh.appendChild(hd);}
    var k=bookKey(i), x=IDX[k]||(lsGet(k)?summary(lsGet(k)):null);
    var stt=x?x.status:"未着手", cls=stt==="出版済み"?"done":stt==="未着手"?"":"go";
    var d=document.createElement("div");
    d.className="book"+(i===cur?" on":"");
    d.innerHTML='<div class="bn">'+pad2(i+1)+' 冊目　'+AGES[th.a]+'</div><div class="bt">'+th.n+'</div>'+
      '<div class="bk">'+th.kw+'</div><div class="bp"><span class="st '+cls+'">'+stt+(x&&x.ch&&stt!=="出版済み"?" "+x.ch+"/8":"")+'</span>'+(i===cur?"いま この本を作っています":th.sub)+'</div>';
    d.onclick=function(){tsel.value=i;switchBook(i);window.scrollTo({top:0,behavior:"smooth"});};
    sh.appendChild(d);
  });
}
function step1(){
  var w=+want.value, p=eFromWant(w), n=eNet(p);
  $("#wantLbl").textContent=yen(w)+"円";
  $("#raw").textContent=yen(Math.round((w+1)/0.7));
  $("#price").innerHTML=yen(p)+'<span class="u">円</span>';
  $("#net").innerHTML=yen(n)+'<span class="u">円</span>';
  var el=$("#band70");
  if(p<250||p>1650){
    el.className="verdict v-ng";
    el.innerHTML='70% が選べません。<span class="sm">価格帯は ¥250〜¥1,650。手取りを動かして中に戻してください。</span>';
  }else if(p>1200){
    el.className="verdict v-mid";
    el.innerHTML='紙1,500円の80%を超えています。<span class="sm">電子は紙より20%以上安くないと70%不可。売値は1,200円が上限です。</span>';
  }else{
    el.className="verdict v-ok";
    el.innerHTML='70% が選べる位置です。<span class="sm">電子'+yen(p)+'円。手取り '+yen(n)+'円。紙は1,500円・砕木で 488円80銭。</span>';
  }
}
function band(mo){
  if(mo<=1) return ["v-ok","約2週間ぶんの手作業です。","月5万なら2冊。月5冊なら1ヶ月かからず棚に並ぶ。1冊目の目標は並ぶこと。","1ヶ月"];
  if(mo<=3) return ["v-mid","3ヶ月です。","初月はゼロ。2ヶ月目で8〜18万。3ヶ月目に15冊で30〜40万。72時間とKENPの翌月15日がある。","3ヶ月"];
  return ["v-ng","3ヶ月では届きません。","目標を下げるか、1冊あたり月26,734円の内訳を先に見てください。15冊で401,012円が標準モデルです。","遠い"];
}
function step2(){
  var g=+goal.value;
  var books=Math.ceil(g/PER), mo=books/5;
  $("#goalLbl").textContent=(g>=10000?(Math.round(g/10000*10)/10)+"万円":yen(g)+"円");
  $("#needBooks").innerHTML=yen(books)+'<span class="u">冊</span>';
  var moTxt=(Math.round(mo*10)/10).toString();
  $("#needMo").innerHTML=moTxt+'<span class="u">ヶ月</span>';
  $("#perBook").innerHTML=yen(PER)+'<span class="u">円</span>';
  var v=band(mo), el=$("#verdict");
  el.className="verdict "+v[0];
  el.innerHTML=v[1]+'<span class="sm">'+v[2]+'</span>';
}
function costCalc(){
  var c=Math.max(0,+$("#cost").value||0), per=Math.round(c/5);
  $("#costPer").textContent=yen(per)+"円";
  $("#costRow").textContent=yen(c)+" ÷ 5 ＝ "+yen(per)+"円";
}
function buildForm(){
  var box=$("#titles"); box.innerHTML="";
  var ts=[
    AG().replace(/（.*）/,"")+"の子育て　"+TH().n,
    J()+"が見てきた"+TH().n,
    AG().replace(/（.*）/,"")+"の子の親が最初に読む本　"+J()+"の視点から"
  ];
  ts.forEach(function(t,i){
    var d=document.createElement("div"); d.className="ttl";
    d.innerHTML='<div class="n">案'+(i+1)+'</div><div class="t">'+esc(t)+'</div>';
    var b=document.createElement("button"); b.textContent="コピー";
    b.onclick=function(){copy(t,function(){say("タイトルをコピーしました")})};
    d.appendChild(b); box.appendChild(d);
  });
  $("#desc").textContent=AG().replace(/（.*）/,"")+"の子どもを育てていて、毎日「これでいいのかな」と迷っている保護者の方へ。"+
    J()+"として子どもと家族のそばにいた経験から、「"+TH().n+"」を、喋った言葉のまま本にしました。"+
    "「〇日でできるようになる」といった結果の約束や、ほかの家との比べっこは書いていません。成長には個人差があります。登場する事例は、個人が特定されないよう内容を変えています。"+
    "いま困っている順番で読めるように書いてあります。";
}
$("#check").oninput=function(){
  var v=this.value, f=$("#flag");
  if(!v.trim()){f.innerHTML="";f.className="";return}
  var hit=[];
  RULES.forEach(function(r){
    if(r.sev!=="r") return;
    var m=v.match(new RegExp(r.re.source,"g"+(r.re.ignoreCase?"i":"")));
    if(m) m.forEach(function(x){if(hit.indexOf(x)<0)hit.push(x)});
  });
  if(hit.length){f.className="flag bad";f.textContent="この言葉を外してください → "+hit.join(" / ");}
  else{f.className="flag good";f.textContent="危ない言葉は入っていません。あとは年齢（「〇歳」「小学〇年」など）と、読む人（親）の言葉が入っているかどうかです。";}
};
var want=$("#want"), goal=$("#goal");
want.oninput=function(){step1();if(S){S.want=+want.value;touch()}};
goal.oninput=function(){step2();lsSet("goal",+goal.value)};
$("#cost").oninput=function(){costCalc();lsSet("cost",+this.value)};
function buildChk(el,arr,barId,key){
  var ul=$(el);
  arr.forEach(function(a){
    var li=document.createElement("li");
    li.innerHTML='<label><input type="checkbox"><span class="wr"><span class="t">'+a[0]+'</span><span class="d">'+(a[1]||"")+'</span></span></label>';
    ul.appendChild(li);
  });
  ul.addEventListener("change",function(){
    if(S){S[key]=Array.prototype.map.call(ul.querySelectorAll("input"),function(x){return x.checked});}
    progress(el,barId);gate();touch();
  });
  progress(el,barId);
}
function setChecks(el,arr){
  Array.prototype.forEach.call($(el).querySelectorAll("input"),function(x,i){x.checked=!!(arr&&arr[i])});
}
function progress(el,barId){
  var b=$(el).querySelectorAll("input"), n=0;
  Array.prototype.forEach.call(b,function(x){if(x.checked)n++});
  $("#"+barId).style.width=(n/b.length*100)+"%";
  return n===b.length;
}
buildChk("#c8",CHK8,"bar1","chk8");
buildChk("#c10",CHK10,"bar2","chk10");
var src=$("#src"), out=$("#out"), chips=$("#chips"), redCount=0, lastRed=[];
function scan(){
  var t=src.value;
  if(!t.trim()){
    out.className="result empty"; out.textContent="貼ると、危ない箇所に色が付きます。赤は消す。黄色は目で見る。";
    chips.innerHTML='<span class="chip">まだ何も貼られていません</span>';
    redCount=0;lastRed=[];gate();return;
  }
  var hits=[];
  RULES.forEach(function(r){
    r.re.lastIndex=0;var m;
    while((m=r.re.exec(t))!==null){
      if(!m[0].length){r.re.lastIndex++;continue}
      hits.push({s:m.index,e:m.index+m[0].length,sev:r.sev,id:r.id,label:r.label,txt:m[0]});
    }
  });
  hits.sort(function(a,b){return a.s-b.s|| (a.sev==="r"?-1:1)});
  var keep=[],end=-1,counts={};
  hits.forEach(function(h){if(h.s>=end){keep.push(h);end=h.e;counts[h.id]=(counts[h.id]||0)+1}});
  redCount=0;lastRed=[];
  var html="",p=0;
  keep.forEach(function(h){
    html+=esc(t.slice(p,h.s))+'<mark class="'+h.sev+'" title="'+h.label+'">'+esc(h.txt)+'</mark>';
    p=h.e; if(h.sev==="r"){redCount++;lastRed.push(h)}
  });
  html+=esc(t.slice(p));
  out.className="result"; out.innerHTML=html;
  var cs="", reds=RULES.filter(function(r){return r.sev==="r"&&counts[r.id]}), yls=RULES.filter(function(r){return r.sev==="y"&&counts[r.id]});
  if(!reds.length&&!yls.length) cs='<span class="chip" style="background:rgba(58,208,127,.12);border-color:rgba(58,208,127,.4);color:#8ef0bb">検出なし</span>';
  else{
    reds.forEach(function(r){cs+='<span class="chip red">'+r.label+' '+counts[r.id]+'</span>'});
    yls.forEach(function(r){cs+='<span class="chip yl">'+r.label+' '+counts[r.id]+'</span>'});
  }
  chips.innerHTML=cs; gate();
}
src.addEventListener("input",function(){scan();if(S){S.src=src.value;touch()}});
$("#clear").onclick=function(){src.value="";scan();if(S){S.src="";touch()}src.focus()};
$("#redact").onclick=function(){
  var t=src.value;
  if(!t.trim()){say("先に本文を貼ってください");return}
  lastRed.slice().sort(function(a,b){return b.s-a.s}).forEach(function(h){t=t.slice(0,h.s)+"〇〇〇"+t.slice(h.e)});
  copy(t,function(){say(redCount?redCount+"箇所を伏字にしてコピーしました":"赤はありませんでした")});
};
function gate(){
  var a=progress("#c8","bar1"), b=progress("#c10","bar2"), g=$("#gate");
  var pasted=src.value.trim().length>0;
  if(a&&b&&redCount===0&&pasted){
    g.className="gate yes"; g.querySelector(".g1").textContent=S&&S.published?"出版済み（"+S.published+"）":"押していい";
    $("#gmsg").textContent="KDPの「Kindle 本を出版」。赤がゼロです。押すのは自分。誤字／権利／価格、そして事例の匿名化（自分の子も）を最後にもう一度。押したら下のボタンで記録。";
  }else{
    g.className="gate no"; g.querySelector(".g1").textContent="まだ押すな";
    var r=[];
    if(!pasted) r.push("本文をまだ貼っていません");
    if(redCount>0) r.push("赤が"+redCount+"箇所 残っています");
    if(!a) r.push("目でやる"+CHK8.length+"個が終わっていません");
    if(!b) r.push("規約のゲートが終わっていません");
    $("#gmsg").textContent=r.join("／");
  }
}
var toast=$("#toast");
function say(m){toast.textContent=m;toast.classList.add("on");setTimeout(function(){toast.classList.remove("on")},1800)}
function copy(t,cb){
  function fb(){var a=document.createElement("textarea");a.value=t;a.style.position="fixed";a.style.opacity="0";
    document.body.appendChild(a);a.select();
    try{document.execCommand("copy");cb()}catch(e){say("長押しで選択してください")}
    document.body.removeChild(a)}
  if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(cb,fb)}else{fb()}
}
document.addEventListener("click",function(e){
  var b=e.target.closest("button"); if(!b) return;
  if(b.dataset.c){
    var id=b.dataset.c;
    copy($("#"+id).textContent,function(){
      say("コピーしました"); b.classList.add("copied"); var o=b.textContent; b.textContent="コピー済み";
      setTimeout(function(){b.classList.remove("copied");b.textContent=o},2200);
      var u={p1:1,p2:2,p3:3}[id];
      if(u&&S&&S.u<u){S.u=u;applyLocks();touch()}
    });
  }
  if(b.dataset.v){
    copy($("#"+b.dataset.v).textContent.split("\n").slice(0,2).join("\n"), function(){say("頭の2行だけ。ここを声で入れてください")});
  }
});
function renderAll(){
  $("#ro").innerHTML='いまの1冊：<b>'+esc(J())+'</b> ／ <b>'+AG()+'</b> ／ '+TH().n+'。月5冊。1冊目は棚に並ぶこと。<br>'+esc(D())+
    '<br>保存先：<b>'+(V.h?esc(V.h.name):"（vault 未選択）")+'/'+esc(bookPath(curKey||bookKey(+tsel.value)))+'/</b>';
  $("#p1").textContent=P1(); $("#p2").textContent=P2(); $("#p3").textContent=P3(); $("#p4").textContent=P4();
  buildShelf(); buildForm();
}
function roleChanged(){if(S){S.role=J();touch()}renderAll()}
jsel.onchange=function(){jfree.value="";roleChanged()};
jfree.oninput=roleChanged;
tsel.onchange=function(){switchBook(+tsel.value)};
window.addEventListener("beforeunload",function(){if(dirty&&S)lsSet(curKey,S)});
document.addEventListener("visibilitychange",function(){if(document.hidden)flush();else resync()});
/* 別のタブ（新規タブ・固定タブ）で進めた分を、戻ってきたときに取り込む */
function resync(){
  if(!S||dirty) return;
  var st=lsGet(curKey);
  if(st&&(st.t||0)>(S.t||0)){st.parts=st.parts||{a1:"",a2:"",a4:""};st.ch=st.ch||{};S=st;V.written={};applyState()}
}
(function init(){
  var g=lsGet("goal"), c=lsGet("cost");
  if(g) goal.value=g; if(c!=null) $("#cost").value=c;
  var last=lsGet("last"); if(last!=null&&THEMES[last]) tsel.value=last;
  step2(); costCalc();
  switchBook(+tsel.value).then(function(){
    if(!V.fsa){vstat("","このブラウザはフォルダへの直接保存に非対応。各欄の「いま保存」で .md をダウンロードします。");$("#vpick").textContent="直接保存について";return}
    idbGet().then(function(h){if(h) connect(h,false)});
  });
})();
