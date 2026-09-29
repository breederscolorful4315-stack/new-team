#!/usr/bin/env python3
"""喋って本キットを Chrome の新規タブ用の拡張機能（chrome-newtab/）に書き出す。
キット（*.html）を直したら、これを実行し直す：python3 build-newtab.py"""
import json, os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "chrome-newtab")
KITS = [  # (元ファイル, 出力名, 切り替えリンクの文字)
    ("kosodate-kindle-kit.html", "kosodate", "子育て版"),
    ("futoko-kindle-kit.html", "futoko", "不登校版"),
    ("kekkon-kindle-kit.html", "kekkon", "結婚の流儀"),
]
PIN_HELP = '''<details class="pin">
          <summary>新規タブで使う</summary>
          <div>Chrome で新しいタブを開くと、このキットが出ます（拡張機能「喋って本キット 新規タブ」）。<br>
          最後に作っていた本と、書きかけの欄はそのまま残ります。別のタブで進めた分は、タブに戻ったときに取り込みます。<br>
          検索は上のアドレスバーに打ってください。<br>
          <b>拡張機能のフォルダ（chrome-newtab）は動かさない・消さない。</b>動かすと読み込み直しと vault の再接続が要ります。</div>
        </details>'''

os.makedirs(OUT, exist_ok=True)
for src, name, _ in KITS:
    html = open(os.path.join(ROOT, src), encoding="utf-8").read()
    m = re.search(r"<script>\n?(.*?)</script>", html, re.S)
    assert m, src
    js = m.group(1)
    html = html[:m.start()] + '<script src="%s.js"></script>' % name + html[m.end():]
    # 拡張機能のページはインラインのスクリプトを実行できないので外に出す
    links = "".join('<a class="kitsw" href="%s.html">%s →</a>' % (n, l) for _, n, l in reversed(KITS) if n != name)
    html = re.sub(r'(<span class="badge">.*?</span>)', lambda m: m.group(1) + links, html, count=1)
    html = html.replace("</style>",
        ".kitsw{float:right;font-size:12.5px;font-weight:800;color:var(--acc);text-decoration:none;"
        "border:1px solid var(--acc);border-radius:100px;padding:3px 11px;margin:1px 0 0 6px}\n"
        ".kitsw:hover{background:var(--acc);color:#0c0e12}\n</style>", 1)
    html, n = re.subn(r'<details class="pin">.*?</details>', PIN_HELP, html, flags=re.S)
    if not n:  # 不登校版・結婚の流儀版には固定タブの説明が無いので、保存先の行の下に足す
        html = html.replace('''<div class="vstat" id="vstat">未接続。いまは このブラウザの中にだけ 記憶しています。</div>
        </div>''', '''<div class="vstat" id="vstat">未接続。いまは このブラウザの中にだけ 記憶しています。</div>
        </div>
        ''' + PIN_HELP, 1)
        html = html.replace("</style>",
            "details.pin{margin-top:12px;font-size:13px;color:var(--tx2)}\n"
            "details.pin summary{cursor:pointer;font-weight:800;color:var(--acc);list-style:none}\n"
            "details.pin div{margin-top:8px;line-height:1.85}\ndetails.pin b{color:var(--tx)}\n</style>", 1)
    open(os.path.join(OUT, name + ".html"), "w", encoding="utf-8").write(html)
    open(os.path.join(OUT, name + ".js"), "w", encoding="utf-8").write(js)

manifest = {
    "manifest_version": 3,
    "name": "喋って本キット 新規タブ",
    "version": "1.1.0",
    "description": "新しいタブを開くと、喋って本キット（子育て版・不登校版・結婚の流儀）が出ます。通信しません。",
    "chrome_url_overrides": {"newtab": "kosodate.html"},
}
if os.path.exists(os.path.join(OUT, "icon128.png")):
    manifest["icons"] = {"128": "icon128.png"}
open(os.path.join(OUT, "manifest.json"), "w", encoding="utf-8").write(
    json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
print("書き出しました →", OUT)
