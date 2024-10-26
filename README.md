# このプログラムについて

今年実装した非同期通信の概念をざっくり理解するために作成しました。
仕組みとしては単純でcofirmボタンを押すとindex.phpからactivate.phpにpostし、activate.phpでPOST値をjson_encodeしてjavascriptの値として出力してindex.phpへ返しています。後はcanselボタンを押すと出力の切り替えができます。

# 動かし方

起動:docker compose -d
切断:docker compose down

で動かせます。
php,apache,mysqlで構成しています。
mysqlは使っていませんが今後DBと連携してなんか作るかもしれないです。
