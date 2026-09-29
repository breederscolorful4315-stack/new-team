var JOBS=[
["夫として","結婚5年目までの夫","新婚の失敗がまだ新しい。これから結婚する男に一番近い"],
["夫として","結婚10〜20年の夫","山と谷を一通り越えた。続けるための習慣を持っている"],
["夫として","結婚30年以上の夫","長く続いた理由を、本人だけが言葉にできる"],
["夫として","共働き家庭の夫","家事と仕事の線引き。言われる前に動く順番"],
["夫として","家事・育児メインの夫","妻が外で働く家。男が家を回す内側"],
["夫として","単身赴任中・経験者の夫","離れていても続く夫婦の段取り"],
["夫として","子育て中の父親","子どもが生まれて変わった夫婦の形"],
["夫として","子どもが巣立った夫","二人に戻ったあとの過ごし方"],
["夫として","妻の実家と同居・近居の夫","義実家との距離の取り方。外からは見えない"],
["夫として","親の介護をしている夫","介護と夫婦を同時に回す段取り"],
["やり直し・転機","再婚した男性","一度目と二度目で何を変えたか"],
["やり直し・転機","離婚を経験した男性","終わった理由を、次の男に渡せる"],
["やり直し・転機","夫婦の危機を乗り越えた男性","別れかけたところから戻った順番"],
["やり直し・転機","晩婚（40代以降で結婚）の男性","一人の時間が長かった男の結婚"],
["やり直し・転機","年の差婚の男性","世代の違いとの付き合い方"],
["やり直し・転機","国際結婚の男性","言葉と文化の違いを越える日常"],
["支える仕事","結婚相談所カウンセラー（男性担当）","うまくいく男と、いかない男の差を毎日見ている"],
["支える仕事","仲人","何十組もの結婚の、最初の1年を知っている"],
["支える仕事","夫婦カウンセラー","夫が相談室で最初に言う言葉を知っている"],
["支える仕事","FP（家計・住宅）","夫婦のお金の揉めどころを数字で見ている"],
["支える仕事","ブライダル業界","結婚式の準備で見える夫婦の素顔"],
["支える仕事","男性向けコーチ・講師","男が変わるときの順番を知っている"]
];
var THEMES=[
{n:"妻の話の聞き方",sub:"解決より先にやること。一番検索される悩み",kw:"夫婦 会話 聞き方 夫"},
{n:"「ありがとう」と「ごめん」の言い方",sub:"言えない男のための本",kw:"夫婦 感謝 謝り方"},
{n:"家事の分担　言われる前に動く順番",sub:"共働きの夫が買う",kw:"家事分担 夫 やること"},
{n:"夫婦喧嘩の終わらせ方",sub:"こじらせる前に読まれる本",kw:"夫婦喧嘩 仲直り 夫"},
{n:"お金の話　小遣いと家計の決め方",sub:"揉める前に決めておくこと",kw:"夫婦 お金 小遣い 家計"},
{n:"妻の実家・自分の実家との距離",sub:"板挟みの夫の本",kw:"義実家 付き合い方 夫"},
{n:"子どもが生まれてからの夫婦",sub:"産後に夫ができること",kw:"産後 夫婦 夫 できること"},
{n:"仕事と家庭の線の引き方",sub:"帰ってからの30分が本になる",kw:"仕事 家庭 両立 夫"},
{n:"記念日と小さな贈り物",sub:"高いものより覚えていること",kw:"記念日 妻 プレゼント"},
{n:"すれ違いが続いたときの向き合い方",sub:"会話が減った夫婦の本",kw:"夫婦 すれ違い 会話 減った"},
{n:"定年後の夫婦",sub:"家にいる時間が増えたら",kw:"定年後 夫婦 過ごし方"},
{n:"夫婦の危機で最初にやること",sub:"別れ話が出たその日から",kw:"夫婦の危機 離婚 話し合い"},
{n:"再婚でうまくいった理由",sub:"二度目の男が読む本",kw:"再婚 男性 うまくいく"},
{n:"結婚前に知っておきたかったこと",sub:"これから結婚する男へ",kw:"結婚前 男性 知っておくこと"},
{n:"男の自分時間の守り方",sub:"趣味と一人の時間を失わない",kw:"夫 自分の時間 趣味"}
];
var RULES=[
{id:"hype",sev:"r",label:"煽り",re:/(?:必ず|誰でも|絶対|完全版|神本|神メソッド|月収|放置|スマホだけで|稼げる)/g},
{id:"promise",sev:"r",label:"約束・操作",re:/(?:モテる|モテ術|落とす|劇的|復縁確実|離婚しない方法|[0-9０-９一二三四五六七八九十]+(?:日|週間|ヶ月|か月)で[^。！!\n]{0,8}?(?:結婚|復縁|仲直り|解決|変わる)|100%|１００％|言いなり|調教|服従|黙らせ|支配する)/g},
{id:"roma",sev:"r",label:"ローマ字の記号",re:/(?:[A-Za-z][A-Za-z0-9 \-]*[.,()（）．，])/g},
{id:"url",sev:"r",label:"ロゴ・URL",re:/(?:https?:\/\/|www\.|\.com|\.co\.jp|ロゴ)/gi},
{id:"ident",sev:"y",label:"妻・家族が特定されそう",re:/(?:実名|本名|勤務先|会社名|[一-龥ァ-ヶ]{1,8}(?:株式会社|商事|銀行|市役所|病院)|[一-龥ぁ-んァ-ヶ]{1,4}ちゃん)/g},
{id:"gender",sev:"y",label:"決めつけ",re:/(?:女は|女って|女なんて|女というのは|女性はみんな|女性は皆|男なら|男のくせに|嫁は|ヨメ)/g},
{id:"legal",sev:"y",label:"法律・お金",re:/(?:親権|慰謝料|財産分与|養育費|調停|年金分割|税金|相続)/g},
{id:"sex",sev:"y",label:"性・浮気の話題",re:/(?:セックス|性生活|夜の営み|浮気|不倫)/g},
{id:"rights",sev:"y",label:"権利・他人の名前っぽい",re:/(?:著作権者でない|他人の経験|実在の)/g},
{id:"cover",sev:"y",label:"表紙に入れてはいけないもの",re:/(?:QR|二次元|顔写真|アイコン)/g}
];
var CHK8=[
["Claude のメモリと過去チャットの参照をOFFにした","個人設定（Claudeへの指示）も空。切らないと再現できない"],
["1冊は1つのチャットで最後まで進めた","貼る1〜4は前の返事が前提。途中で新しいチャットにしない"],
["押したのはマイク（音声入力）。音声モードは使っていない","音声モードは会話になる。工程が飛ぶ"],
["貼る3の「補った箇所」を確認した","言っていない経験が載っていたら消す"],
["妻・元妻・家族・相手が特定できる情報を消した","名前、勤務先、地域、珍しい出来事の組み合わせ。本人が読んで分かる形はNG"],
["法律・お金の話を断定していない","離婚・親権・財産分与・税金は「専門家に確認を」で止める"],
["女性や妻を見下す・決めつける書き方になっていない","「女は〜」の一般化、相手を操る言い回しは外す。妻が手に取ることもある"],
["タイトルのフリガナはカタカナ／ローマ字に括弧・ピリオド・コンマが無い","日本語タイトルだと必須。この3つは使えない"],
["表紙は題名と著者名だけ","夫婦や家族の実写、ロゴ、URL、実在の人名を入れない"],
["プレビューアーで本として開いて見た","見出しの崩れと変な改行"]
];
var CHK10=[
["KDPセレクトにチェックした","読み放題に載る。15冊積む前提なら入れる"],
["出版地域はすべての地域（全世界）","13カ国。翻訳はしない"],
["権利は「私は著作権者であり」","喋った自分の経験ならこれ"],
["妻や家族の話は、本人の了解を取ったか、特定できない形に作り替えた","出版後に家族が読んでも困らないか"],
["露骨な性的表現は「いいえ」","夫婦の性の話は露骨に書かない。書くなら一般論まで"],
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
  THEMES.forEach(function(t,i){var o=document.createElement("option");o.value=i;o.textContent=(i+1)+". "+t.n;tsel.appendChild(o)});
})();
function J(){return jfree.value.trim()?jfree.value.trim():JOBS[jsel.value][1]}
function D(){var f=jfree.value.trim(); return f?f+"として過ごしてきた結婚の内側。外からは見えない":JOBS[jsel.value][2]}
function TH(){return THEMES[tsel.value]}
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
  return "あなたは、無名の男性が、自分の結婚生活の経験だけを元に Kindle 本を出すのを支援する編集者です。\n\n"+
  "【前提】\n"+
  "私は文章を書いた経験がありません。本を出した実績もありません。\n"+
  "自分では「人に教えられるほどの結婚生活ではない」と思っています。\n"+
  "結婚での私の立場は「"+J()+"」です。いま作る1冊の仮の軸は「"+TH().n+"」です。"+D()+"。\n"+
  "シリーズ名は「結婚の流儀　男の幸せの極意（男性専用）」。読む人は、結婚生活に悩んでいる男性、またはこれから結婚する男性です。\n\n"+
  "【やること】\n"+
  "私に質問をしてください。\n"+
  "目的は、私が「当たり前すぎて価値がないと思っている経験」を、外から見つけ出すことです。\n\n"+
  "【質問の条件】\n"+
  "・1回に10問以内。番号を振ってください。\n"+
  "・答えが一言で済む形にしてください。長い説明を求めないでください。\n"+
  "・資格・肩書き・成功例の数は聞かないでください。\n"+
  "・代わりに、次のようなことを聞いてください：\n"+
  "  結婚して何年か（仕事なら何年関わってきたか）／結婚してから一番変えた習慣／\n"+
  "  妻に言われて一番効いた一言／夫婦喧嘩のあと自分がやること／\n"+
  "  家事や育児で最初にできなかったこと／お金・実家・仕事で揉めたときの落とし所／\n"+
  "  周りの男性から一番よく聞かれる相談／若い頃の自分に言いたいこと／\n"+
  "  「うちはこうしている」と話すと驚かれること\n\n"+
  "【禁止】\n"+
  "・妻・元妻・家族・相手の実名や、勤務先・地域など個人の特定につながる詳細を聞くこと\n"+
  "・「あなたの強みは何ですか」のような、私が答えられない抽象的な質問\n"+
  "・励まし、称賛、前置き。質問だけを出してください。";
}
function P2(){
  return "私の答えを踏まえて、男性向けの結婚の本（シリーズ「結婚の流儀　男の幸せの極意」）のネタ候補を3つ出してください。\n"+
  "私の立場は「"+J()+"」。いま作る1冊の軸は「"+TH().n+"」。\n\n"+
  "【各候補に必ず付けること】\n"+
  "1. 本のタイトル案（日本語・20文字前後）\n"+
  "2. 誰が読むのか（1行。年齢、結婚して何年目か、いまの状況を含めること）\n"+
  "3. その人が、これを読まないとどう困るのか（1行）\n"+
  "4. なぜ私がこれを書けるのか（私の答えの中から、根拠を1つ引用すること）\n"+
  "5. その人が Amazon の検索窓に打つと思われる言葉を3つ\n\n"+
  "【選ぶ基準】\n"+
  "・「私が詳しいこと」ではなく「読む男性がいま困っていること」を軸にしてください\n"+
  "・「必ずうまくいく」「妻を思い通りにする」「モテる」のような約束や操作が必要になるテーマは外してください\n"+
  "・妻や女性を悪者にしないテーマを選んでください\n"+
  "・私の経験の中で、年数がいちばん長いものを優先してください\n\n"+
  "【最後に】\n"+
  "3つのうち、どれを最初の1冊にすべきか、理由を2行で書いてください。\n"+
  "そして選んだ1冊の章立てを、8章分、各章のタイトルだけ出してください。";
}
function P3(){
  return "いま私が話した内容を、本の原稿の形に整えてください。\n"+
  "私の立場は「"+J()+"」。いま作る1冊は「"+TH().n+"」。読む人は男性です。\n\n"+
  "【条件】\n"+
  "・話し言葉を書き言葉に直してください。「えーと」「あの」「まあ」は消してください。\n"+
  "・内容を足さないでください。私が言っていないことを書かないでください。\n"+
  "・私が言い間違えた箇所は、前後から判断して直してください。\n"+
  "・1段落は3〜4行にしてください。\n"+
  "・見出しを2〜3個入れてください。\n"+
  "・数字が出てきた箇所は、そのままの数字を残してください。\n"+
  "・敬体（です・ます）で統一してください。\n"+
  "・妻や家族、相談者の事例は、名前・勤務先・地域・時期を伏せ、「結婚12年目のある夫婦」のように一般化してください。\n"+
  "・法律（離婚・親権・財産分与）やお金、健康について、私が言っていない断定を加えないでください。\n"+
  "・女性全体を決めつける表現や、妻を見下していると読める表現は、意味を変えずに言い換えてください。\n"+
  "・性に関わる話は露骨に書かないでください。\n\n"+
  "【最後に必ず】\n"+
  "・私が言っていないのに補った箇所があれば、リストで報告してください。\n"+
  "・妻や家族が特定されるおそれのある箇所があれば、リストで報告してください。\n"+
  "・話が飛んでいて意味が通らない箇所があれば、\n"+
  "　「ここを補足で喋ってください」と指摘してください。";
}
function P4(){
  return "この原稿を Kindle で出版します。商品ページに使う要素を作ってください。\n"+
  "シリーズは「結婚の流儀　男の幸せの極意（男性専用）」。私の立場は「"+J()+"」。いま作る1冊は「"+TH().n+"」。\n\n"+
  "【出すもの】\n"+
  "1. 内容紹介（Amazon の商品説明に貼るもの・400字前後）\n"+
  "   ・冒頭2行で「どんな男性の、どの困りごとの本か」が分かるようにしてください\n"+
  "   ・煽らないでください。「必ず」「誰でも」「絶対」は使わないでください\n"+
  "   ・「〇日で妻が変わる」「モテる」「言いなりに」のような約束や操作をうたわないでください\n"+
  "   ・読む男性を責める書き方、不安をあおる書き方、女性を悪者にする書き方はしないでください\n"+
  "2. キーワードを7つ\n"+
  "   ・1つ50文字以内\n"+
  "   ・実際に Amazon の検索窓に打たれる言葉にしてください\n"+
  "   ・タイトルに入っている言葉と重複させないでください\n"+
  "3. カテゴリー候補を3つ\n"+
  "4. タイトル案を3つ（各20文字前後）。\n"+
  "   それぞれに、フリガナ（カタカナ）とローマ字表記を付けてください。\n"+
  "   ローマ字に、括弧・ピリオド・コンマは使わないでください。";
}
/* ===== 本ごとの記憶と、Obsidian vault への保存 ===== */
var BASE=["Kindle","結婚の流儀"];
var LSP="kekkon-kit:";
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
function idb(){return new Promise(function(res,rej){try{var r=indexedDB.open("kekkon-kit",1);r.onupgradeneeded=function(){r.result.createObjectStore("h")};r.onsuccess=function(){res(r.result)};r.onerror=function(){rej(r.error)}}catch(e){rej(e)}})}
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
  var o={type:"kindle-part",series:"結婚の流儀",book:curKey,part:part};
  for(var k in extra) o[k]=extra[k];
  o.role=S.role; o.tags=["kindle/結婚の流儀","kindle/"+part];
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
  var head=fm({type:"kindle-book",series:"結婚の流儀",book_no:i+1,theme:th.n,role:S.role,status:st.status,
    chapters_done:n,price_ebook:p,price_print:1500,published:S.published||"",created:S.created,updated:S.updated||now(),
    tags:["kindle/結婚の流儀","kindle/book"]});
  var b="\n# "+pad2(i+1)+" "+th.n+"\n\n> 立場："+S.role+" ／ 状態："+st.status+"（原稿 "+n+"/8章）\n> 検索語："+th.kw+"\n\n## ファイル\n";
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
  var s=fm({type:"kindle-shelf",series:"結婚の流儀",updated:now(),tags:["kindle/結婚の流儀","kindle/shelf"]});
  s+="\n# 結婚の流儀 Kindle の棚\n\n| # | 本 | 状態 | 原稿 | 更新 |\n|---|---|---|---|---|\n";
  THEMES.forEach(function(th,i){
    var k=bookKey(i), x=IDX[k];
    s+="| "+pad2(i+1)+" | "+(x?"[["+bookPath(k)+"/00_進み具合\\|"+th.n+"]]":th.n)+" | "+(x?x.status:"未着手")+" | "+(x?x.ch+"/8":"")+" | "+(x&&x.updated?x.updated.replace("T"," "):"")+" |\n";
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
  S=st; lsSet(curKey,S);
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
  THEMES.forEach(function(th,i){
    var k=bookKey(i), x=IDX[k]||(lsGet(k)?summary(lsGet(k)):null);
    var stt=x?x.status:"未着手", cls=stt==="出版済み"?"done":stt==="未着手"?"":"go";
    var d=document.createElement("div");
    d.className="book"+(i===cur?" on":"");
    d.innerHTML='<div class="bn">'+pad2(i+1)+' 冊目</div><div class="bt">'+th.n+'</div>'+
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
    "結婚の流儀　"+TH().n,
    "男の幸せの極意　"+TH().n,
    J()+"が見つけた"+TH().n
  ];
  ts.forEach(function(t,i){
    var d=document.createElement("div"); d.className="ttl";
    d.innerHTML='<div class="n">案'+(i+1)+'</div><div class="t">'+esc(t)+'</div>';
    var b=document.createElement("button"); b.textContent="コピー";
    b.onclick=function(){copy(t,function(){say("タイトルをコピーしました")})};
    d.appendChild(b); box.appendChild(d);
  });
  $("#desc").textContent="結婚生活で、どうすればいいか分からなくなっている男性へ。"+
    J()+"として過ごしてきた経験から、「"+TH().n+"」を、喋った言葉のまま本にしました。"+
    "「必ずうまくいく」方法や、相手を思い通りにする話は書いていません。登場する夫婦の話は、個人が特定されないよう内容を変えています。"+
    "夫として、明日からできる順番で書いてあります。";
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
  else{f.className="flag good";f.textContent="危ない言葉は入っていません。あとは「夫婦」「夫」「結婚」など、読む男性が検索する言葉が入っているかどうかです。";}
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
    $("#gmsg").textContent="KDPの「Kindle 本を出版」。赤がゼロです。押すのは自分。誤字／権利／価格、そして妻や家族の匿名化を最後にもう一度。押したら下のボタンで記録。";
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
  $("#ro").innerHTML='いまの1冊：<b>'+esc(J())+'</b> ／ '+TH().n+'。月5冊。1冊目は棚に並ぶこと。<br>'+esc(D())+
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
  step2(); costCalc();
  switchBook(+tsel.value).then(function(){
    if(!V.fsa){vstat("","このブラウザはフォルダへの直接保存に非対応。各欄の「いま保存」で .md をダウンロードします。");$("#vpick").textContent="直接保存について";return}
    idbGet().then(function(h){if(h) connect(h,false)});
  });
})();
