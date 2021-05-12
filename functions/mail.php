<?php

// 変数取得
$mailarea = htmlspecialchars($_POST['mailarea'], ENT_QUOTES);
$namearea = htmlspecialchars($_POST['namearea'], ENT_QUOTES);
$textboxarea = htmlspecialchars($_POST['textboxarea'], ENT_QUOTES);

header("Content-Type:text/html; charset=UTF-8");
mb_language("japanese");
mb_internal_encoding("utf-8");

$mail="info@startout.work";
$sub1="[自動返信] STARTOUTへのお問合せが完了しました";
$mail_to = $mailarea;

// メール本文
$messegeall .= "STARTOUTへのお問合せありがとうございます。\n";
$messegeall .= "今後とも、何卒、よろしくお願いいたします。\n";
$messegeall .= "\n";
$messegeall .= "─登録内容の確認─────────────────\n";
$messegeall .= "\n";
$messegeall .= "お名前：".$namearea."\n";
$messegeall .= "メールアドレス：".$mailarea."\n";
$messegeall .= "テキスト：\n";
$messegeall .= $textboxarea."\n";
$messegeall .= "\n";
$messegeall .= "─────────────────────────\n";
$messegeall .= "\n";
$messegeall .= "============================================\n";
$messegeall .= "このメールは自動送信です。\n";
$messegeall .= "お心当たりのない方は、お手数をおかけいたしますが、\n";
$messegeall .= "下記メールアドレスまでご連絡ください。\n";
$messegeall .= "============================================\n";
$messegeall .= "\n";
$messegeall .= "ログイン : https://startout.work/login.php\n";
$messegeall .= "\n";
$messegeall .= "━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$messegeall .= "　STARTOUT\n";
$messegeall .= "　本　社：〒143-0021\n";
$messegeall .= "　　　　　東京都大田区北馬込2-41-8\n";
$messegeall .= "　E-mail：info@startout.work\n";
$messegeall .= "━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$messegeall .= "　関連プロジェクト\n";
$messegeall .= "　◆グローバルな「デザイナー×エンジニア×起業家人材」を\n";
$messegeall .= "　　育成する「IT留学シェアハウス」セブ島\n";
$messegeall .= "　《WORKROOM》https://workroom.biz/\n";
$messegeall .= "━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
   
// メール送信
$success1=mb_send_mail($mail_to,$sub1,$messegeall,"From:".$mail);
$success2=mb_send_mail($mail,$sub1,$messegeall,"From:".$mail_to);

header('Content-type: application/json');
echo json_encode( "送信が完了しました！" );

?>