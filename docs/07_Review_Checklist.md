# GymGrit Website Review Checklist

Version: 1.0  
対象: GymGrit コーポレートサイト  
位置付け: 最終品質レビュー / Release Gate

---

# 0. About this Document

## 0.1 役割

本ドキュメントは、GymGrit コーポレートサイトの公開前に、各標準と承認済み仕様が実際のサイトへ反映されているかを横断的に確認するための最終レビュー基準である。

目的は次の3点である。

- **品質保証**: Strategy、Design、Content、Development、SEOの品質を横断して確認する。
- **公開判定**: 未解決の問題とRiskを可視化し、公開できる状態か判断する。
- **最終確認**: 公開環境、主要端末、Form、計測を含む最終動作を確認する。

本ドキュメントは制作手順ではなく、各Guideの内容を再定義するものでもない。判断基準の詳細は該当Guideを参照し、本書では「基準が満たされているか」だけを確認する。

## 0.2 記入ルール

- 確認済みで問題がない項目は `[x]`、未確認または未完了は `[ ]` とする。
- 対象外の項目は `N/A` とし、対象外である理由を記録する。
- 問題を発見した場合は、修正事項ID、対象URL、内容、担当者を「7. Sign-off」に記録する。
- 画面表示は印象だけで判断せず、対象URL、端末、Screenshot、計測結果など確認可能な証跡を残す。
- 承認済み仕様と異なる状態を、Reviewerの好みだけで不合格にしない。差異の根拠と承認有無を確認する。

## 0.3 重大度と公開判定

| 重大度 | 定義 | 公開判定 |
| --- | --- | --- |
| Blocker | 主要目的を達成できない、誤情報、送信不能、重大なSecurity・index問題など | 未解決では公開不可 |
| Major | 主要画面の崩れ、重要導線の不備、基準未達など、品質や信頼を大きく損なう | 原則として公開前に修正 |
| Minor | 限定的な表記、余白、軽微な表示差など、目的達成を妨げない問題 | 対応期限と担当者を記録して判断可能 |

公開可とする条件は、Blockerが0件であり、Majorが解消済みであることを原則とする。例外を残す場合は、理由、影響、回避策、対応期限、承認者を記録する。

---

# 1. Strategy Review

## 1.1 目的とターゲット

- [ ] サイトの主要目的が一文で説明でき、Homeと主要ページの構成に反映されている。
- [ ] 問い合わせ、相談、ブランド理解、採用など、主要目的と補助目的の優先順位が明確である。
- [ ] 想定する主要ターゲットが明確で、対象者に必要な情報と行動が用意されている。
- [ ] 初めて訪れたユーザーが、ジムグリットが何をする会社かを短時間で理解できる。
- [ ] 運営側が伝えたい順番ではなく、ユーザーが理解・比較・判断しやすい順番になっている。

## 1.2 ブランドと事業構造

- [ ] ジムグリットのブランドコンセプト、事業姿勢、提供価値が一貫して伝わる。
- [ ] Company、Brand、Service、Project、Contentの役割が混在していない。
- [ ] Serviceの分類と名称が実際の事業内容に合い、重複や抜けがない。
- [ ] Projectや実績が、完成物の紹介だけでなく、支援内容と信頼の根拠として機能している。
- [ ] 会社情報、代表者、所在地、連絡先など、企業の実在性を判断できる情報へ到達できる。

## 1.3 ページ構成と導線

- [ ] 各ページの役割が明確で、目的のないページや重複ページがない。
- [ ] Header、Footer、主要導線から、重要ページへ迷わず到達できる。
- [ ] 認知、理解、共感、信頼、比較、行動の流れが主要ページ内またはページ間で成立している。
- [ ] 関連するService、Project、Brand、Contentが適切につながっている。
- [ ] 各主要ページのCTAがページ目的に合い、行動先と行動後の結果が予測できる。
- [ ] 行き止まりになる主要ページがなく、次に取れる行動が提示されている。

## 1.4 Strategy Review記録

- 確認した主要ページ: 
- 根拠としたProject仕様: 
- 未解決事項ID: 
- 判定: [ ] Pass　[ ] Conditional Pass　[ ] Fail

---

# 2. Design Review

## 2.1 Design Principles

- [ ] Information First、Simplicity、Consistency、Authenticity、Longevityの原則に反する表現がない。
- [ ] 画面の派手さではなく、情報の理解、信頼、行動が優先されている。
- [ ] Quiet、Premium、Minimal、Human、Functional、Trustworthy、Timelessの印象がサイト全体で一貫している。
- [ ] 不要な装飾、過剰な演出、情報同士の競合が残っていない。
- [ ] 承認済みFigma、Design System、Project固有のDesign指定との差異が確認されている。

## 2.2 Layoutと余白

- [ ] 余白が情報のまとまりと区切りを明確にし、単なる空きや不足になっていない。
- [ ] 同じ階層の要素で、位置、幅、余白、画像比率が揃っている。
- [ ] Sectionごとの役割が視覚的に区別でき、異なる目的の情報が詰め込まれていない。
- [ ] Desktopでは情報が横へ広がりすぎず、広い余白が整理に使われている。
- [ ] Smartphoneでは読む順番と情報の優先順位が維持されている。

## 2.3 Typography

- [ ] Display、H1、H2、H3、Lead、Body、Small、Captionの階層を見た目から判別できる。
- [ ] 日本語本文の文字サイズ、行間、行長、段落間が読みやすい。
- [ ] 見出しの大きさや太さが乱立せず、ページ間で一貫している。
- [ ] 長文の中央揃え、小さすぎる注記、過度な英字使用など、読みにくい箇所がない。
- [ ] 文字拡大や長い見出しでも、重なり、欠落、不自然な改行が起きない。

## 2.4 Color

- [ ] Primary、Secondary、Accent、Neutral、Background、Surface、状態色が役割どおりに使われている。
- [ ] CTAや状態表示の色が、意味のない装飾へ流用されていない。
- [ ] 文字、Icon、Form、Focus、境界と背景のContrastが十分である。
- [ ] Error、Success、選択状態などを色だけで区別していない。
- [ ] 色数や強いAccentが過剰でなく、清潔感と信頼感を損なっていない。

## 2.5 PhotographyとIcon

- [ ] 写真が実際の事業、サービス、人物、体験の理解に役立っている。
- [ ] 実案件写真または承認済みブランド写真が優先されている。
- [ ] 人物、光、色温度、構図が日本市場に自然で、健康的かつ誠実に見える。
- [ ] 安価なStock感、過度な筋肉訴求、不自然な加工、内容と無関係な写真がない。
- [ ] Crop後も人物の表情、動作、サービスの文脈が失われていない。
- [ ] Iconの線、太さ、角、サイズが統一され、意味の補助として使われている。
- [ ] Iconだけに意味や操作を依存していない。

## 2.6 Component、CTA、Motion

- [ ] Button、Card、CTA、Badge、Accordion、Formなど、同じ役割のComponentが同じ見た目と挙動である。
- [ ] Primary CTAと補助行動の強弱が明確で、同じ強さのCTAが競合していない。
- [ ] CTAが内容理解の流れに沿って配置され、閲覧を妨げる反復になっていない。
- [ ] Hover、Focus、Error、Disabled、Loading、完了など必要な状態が確認できる。
- [ ] Motionが理解や状態変化を補助し、読む・選ぶ・操作する行為を妨げていない。
- [ ] 動きを抑える環境でも、情報と操作が失われない。

## 2.7 Design Review記録

- 確認環境・画面幅: 
- Figmaまたは承認Design: 
- 未解決事項ID: 
- 判定: [ ] Pass　[ ] Conditional Pass　[ ] Fail

---

# 3. Content Review

## 3.1 情報と構造

- [ ] 各ページの最初に、ユーザーが最も知りたい結論または価値が示されている。
- [ ] 情報の優先順位が明確で、重要情報が補足情報に埋もれていない。
- [ ] 見出しだけを読んでもページの概要と論理の流れを理解できる。
- [ ] 同じ内容の不必要な重複、矛盾、説明不足がない。
- [ ] Company、Brand、Service、Projectの呼称と説明がページ間で統一されている。
- [ ] 公開前の仮文言、Placeholder、内部向けMemo、未確定表記が残っていない。

## 3.2 文章品質

- [ ] 誤字、脱字、誤変換、不自然な句読点、表記揺れがない。
- [ ] 一文に複数の主張を詰め込まず、一文一義を基本としている。
- [ ] 専門用語、略語、業界用語は、対象ユーザーが理解できる表現または説明になっている。
- [ ] 主語と対象が曖昧でなく、「誰が・何を・どうするか」を誤解しない。
- [ ] 不必要に長い文章、同じ意味の反復、抽象的な美辞麗句が整理されている。
- [ ] 強い断定、煽り、比較優位、最上級表現に、確認できる根拠がある。

## 3.3 事実と信頼性

- [ ] 会社名、代表者名、所在地、電話番号、営業時間、URLなどの基本情報が正確である。
- [ ] Serviceの提供範囲、対象、条件、料金、相談方法が、承認済み情報と一致している。
- [ ] 数字には必要な単位、対象期間、基準、出典または確認元がある。
- [ ] 実績、成果、顧客の声、資格、受賞歴、掲載歴を確認できる根拠がある。
- [ ] 古い日付、終了済み情報、変更前の名称や条件が残っていない。
- [ ] 引用、写真、Logo、第三者素材について、使用許可と出典を確認している。
- [ ] Privacy Policy、Cookie、免責、利用条件など必要な法的情報が実態と一致している。

## 3.4 CTAとFAQ

- [ ] CTA文言から、クリック後に何が起きるかを予測できる。
- [ ] 同じ行動に異なる名称を使わず、問い合わせ、相談、資料請求などを一貫して表記している。
- [ ] CTAのLink先が文言と一致し、対象外または未完成ページへ遷移しない。
- [ ] FAQが実際の疑問や不安に答え、最初に結論を示している。
- [ ] FAQの回答がService説明、料金、Form、Policyなど他ページの記載と矛盾していない。
- [ ] 重要事項をFAQ内だけに隠していない。

## 3.5 Content Review記録

- 校正対象Version: 
- 事実確認者: 
- 未解決事項ID: 
- 判定: [ ] Pass　[ ] Conditional Pass　[ ] Fail

---

# 4. Development Review

## 4.1 WordPressとTemplate

- [ ] すべての対象ページが、意図したWordPress Templateで表示されている。
- [ ] 固定ページTemplateの選択が正しく、slug変更によって主要表示が壊れない。
- [ ] Home、固定ページ、投稿、Archive、検索、404のTemplate責務が混在していない。
- [ ] ACFのField、必須・任意、説明、表示先が、更新者に理解できる状態である。
- [ ] ACFの未入力、画像なし、一覧0件、長文でも、Errorや表示崩れが起きない。
- [ ] Preview、更新、公開、下書き、予約公開が対象コンテンツで正しく動作する。
- [ ] 管理画面から更新した内容が、意図した場所へ安全に反映される。

## 4.2 ComponentとCode品質

- [ ] Design SystemのButton、Card、Hero、FAQ、CTAなどが再利用可能なComponentとして一貫している。
- [ ] 同じUIや処理の不要な複製がなく、Project固有処理と共通処理が分離されている。
- [ ] `functions.php`、Template、共通処理に過度な責務集中がない。
- [ ] 特定のslug、表示文言、偶然のDOM構造に依存する壊れやすい処理がない。
- [ ] 不要なFile、Asset、Comment、Debug出力、無効な処理が残っていない。
- [ ] Browser Console、Network、Server Logに未対応のErrorがない。
- [ ] Secret、認証情報、個人情報、環境固有値が公開FileやRepositoryへ含まれていない。
- [ ] 変更箇所と影響範囲が説明でき、Review済みである。

## 4.3 Responsiveと表示

- [ ] Smartphone、Tablet、Desktopで、情報の順番と主要機能が維持されている。
- [ ] 横Scroll、要素の重なり、文字切れ、画像の変形、不自然な空白がない。
- [ ] Header、Navigation、Footer、Table、Form、Modal、Accordionが各画面幅で利用できる。
- [ ] 長いタイトル、長い英数字、件数増加、本文増加でもLayoutが破綻しない。
- [ ] PortraitとLandscapeの双方で、主要操作が画面外へ隠れない。
- [ ] 対象となる主要Browserで、重大な表示差や機能差がない。

## 4.4 Performanceと画像

- [ ] 主要ページが `04_Development_Guide.md` のLighthouse目標を満たしている。
- [ ] LCP、INP、CLSに明らかな問題がなく、計測結果または確認記録がある。
- [ ] 画像が表示用途に合う寸法、容量、形式で配信されている。
- [ ] 画面外画像はLazy Loadされ、HeroやLCP候補へ不適切に適用されていない。
- [ ] 画像読込前後で大きなLayout Shiftが起きない。
- [ ] 不要なJavaScript、CSS、Font、Plugin、外部通信が読み込まれていない。
- [ ] Cache有効時と無効時の双方で、古い表示や機能不全が起きない。

## 4.5 Accessibility

- [ ] 見出し、Landmark、List、Table、Formが意味に合う構造になっている。
- [ ] すべての主要操作をKeyboardだけで実行でき、Keyboard Trapがない。
- [ ] Focus位置が常に視認でき、表示要素に隠れない。
- [ ] FormのLabel、必須・任意、説明、Error、完了状態が関連付けられている。
- [ ] 意味のある画像に適切な代替Textがあり、装飾画像が冗長に読み上げられない。
- [ ] LinkとButtonの役割、Link先、状態が利用者に伝わる。
- [ ] 音声・動画に必要な字幕、代替情報、再生Controlがある。
- [ ] 自動再生、強い点滅、過度な動きがなく、動きを抑える設定が尊重されている。

## 4.6 Development Review記録

- 対象Build / Commit: 
- 検証環境: 
- Lighthouse記録: 
- 未解決事項ID: 
- 判定: [ ] Pass　[ ] Conditional Pass　[ ] Fail

---

# 5. SEO Review

技術的な出力基準は `04_Development_Guide.md` を参照する。本章では、公開対象サイトとして必要なSEO要素が揃い、内容と技術出力が一致しているかを確認する。

## 5.1 ページと検索意図

- [ ] index対象の各ページに明確な役割があり、同じ目的の重複ページがない。
- [ ] Home、About、Services、Projects、Brands、Column、News、Contactの必要性と公開状態が確認されている。
- [ ] 主要ページの内容が、想定する検索ユーザーの疑問とページ目的に対応している。
- [ ] Service、Project、Brand、Contentの関係が、ページ構成と内部Linkに反映されている。
- [ ] 公開価値のない空ページ、薄い仮ページ、重複Archiveがindex対象になっていない。

## 5.2 TitleとMeta情報

- [ ] index対象ページに固有のTitleがあり、ページ内容とブランド名が正確に伝わる。
- [ ] Meta Descriptionがページ内容と一致し、他ページと不必要に重複していない。
- [ ] TitleとDescriptionに仮文言、過度なKeyword反復、事実でない表現がない。
- [ ] OGPのTitle、Description、Image、URL、Typeがページ内容と一致している。
- [ ] ThemeとPluginから、Title、Meta、OGP、Canonicalが重複出力されていない。

## 5.3 構造と内部Link

- [ ] 各ページのH1が主題を示し、見出し階層が内容構造と一致している。
- [ ] Header、Footer、本文、関連Contentの内部Linkが、重要ページへの発見を助けている。
- [ ] Anchor TextからLink先の内容を予測でき、「こちら」だけのLinkが多用されていない。
- [ ] Breadcrumbが画面上の階層と一致し、Current Pageを正しく示している。
- [ ] FAQは実際の表示内容と一致し、構造化Dataを使う場合も内容の差異がない。
- [ ] Page、Article、Organizationなどの構造化Dataが、画面上で確認できる事実と一致している。

## 5.4 Indexと技術出力

- [ ] index対象・除外対象の一覧が確定し、実際のrobots指定と一致している。
- [ ] Canonicalが公開予定の正規URLを示し、内部Link、Redirect、Sitemapと矛盾していない。
- [ ] XML Sitemapに、公開・index対象の正規URLだけが含まれている。
- [ ] `robots.txt` が必要なPageやResourceの取得を妨げていない。
- [ ] 404、Redirect、検索結果、Archive、添付ページのindex方針が確認されている。
- [ ] Structured Dataの検証で、公開を妨げるErrorがない。

## 5.5 ブランド検索

- [ ] 「株式会社ジムグリット」「GymGrit」などの正式名称が、サイト内で一貫している。
- [ ] HomeのTitle、会社情報、Logo、Organization情報、SNS情報が同一組織として整合している。
- [ ] 旧名称、誤表記、別会社と混同する表現がない。
- [ ] ブランド名で検索したユーザーが求める会社概要、Service、実績、問い合わせへ到達できる。

## 5.6 SEO Review記録

- index対象URL一覧: 
- 検証Tool / 実施日: 
- 未解決事項ID: 
- 判定: [ ] Pass　[ ] Conditional Pass　[ ] Fail

---

# 6. Final Release Review

## 6.1 公開環境

- [ ] 公開対象のVersion、Commit、公開日時、担当者が確定している。
- [ ] Review対象と本番公開対象が同一である。
- [ ] 本番FileとDatabaseのBackupがあり、Rollback方法と担当者が明確である。
- [ ] 本番URL、HTTPS、Redirect、環境設定、Mail設定が正しい。
- [ ] Staging用のBasic認証、noindex、Debug表示、仮URLが本番に残っていない。
- [ ] WordPress本体、Theme、Plugin、PHPのVersionと互換性を確認している。
- [ ] 管理者Accountと権限が必要最小限で、不要なAccountがない。
- [ ] Cache削除と公開後の反映確認方法が決まっている。

## 6.2 Form

- [ ] すべてのFormで、正常送信、必須Error、入力形式Errorを確認している。
- [ ] 送信Buttonの連続操作で、意図しない二重送信が起きない。
- [ ] 送信完了画面または完了Messageが表示され、次の流れが分かる。
- [ ] 管理者通知と自動返信が、想定する宛先へ届く。
- [ ] From、Reply-To、件名、本文、文字化け、迷惑Mail判定を確認している。
- [ ] 個人情報同意、Privacy PolicyへのLink、Spam対策が機能している。
- [ ] 送信内容が管理画面、Mail、外部Serviceへ不必要に露出していない。

## 6.3 Link、404、Download

- [ ] 全ページの内部LinkにLink切れ、誤Link、仮Linkがない。
- [ ] 主要な外部Linkが正しく開き、意図しない環境やAccountへつながらない。
- [ ] 電話、Mail、地図、SNS、PDF、DownloadのLinkが対象端末で動作する。
- [ ] 存在しないURLが適切な404となり、Homeや主要ページへ戻れる。
- [ ] 旧URLと変更URLのRedirectが正しく、ChainやLoopがない。
- [ ] PDFやDownload Fileが最新版で、名称、容量、内容が正しい。

## 6.4 OGP、Favicon、計測

- [ ] Homeと主要ページのOGPを実際のPreviewで確認している。
- [ ] OGP Imageが正しい比率と内容で、仮画像や古いLogoになっていない。
- [ ] Faviconと端末用Iconが主要Browserと端末で正しく表示される。
- [ ] Google Analyticsの対象Propertyと計測IDが本番用である。
- [ ] Page Viewと主要Eventが一度だけ送信され、重複計測がない。
- [ ] 社内Access除外、Consent、Privacy上の設定がProject方針と一致している。
- [ ] Search Consoleの対象Property、Owner、公開Domainが正しい。
- [ ] XML Sitemapの送信先と公開後の送信担当者が確定している。

## 6.5 端末とBrowser

- [ ] Smartphone実機で、Home、主要Service、Project、Contact、Menu、Formを確認している。
- [ ] Desktopで、Home、主要Service、Project、Contact、Navigation、Formを確認している。
- [ ] Tabletまたは中間幅で、Layoutと操作に重大な問題がない。
- [ ] 対象となる主要Browserで、表示、Navigation、Form、Downloadを確認している。
- [ ] Portrait、Landscape、文字拡大、Keyboard操作で主要機能を利用できる。
- [ ] 実際の通信条件で、初期表示、画像、Form送信に致命的な遅延がない。

## 6.6 最終動作

- [ ] Header、Global Navigation、Footer、Logo、Breadcrumbが全ページで正しく動作する。
- [ ] Accordion、Modal、Slider、Menuなど、すべての操作Componentが動作する。
- [ ] Search、Archive、Pagination、絞り込みなど、採用した一覧機能が動作する。
- [ ] 外部Service、埋込、地図、動画、SNSが本番環境で表示される。
- [ ] Error Log、Browser Console、Networkに、公開を妨げるErrorがない。
- [ ] 公開直後に確認するURL、Form、計測、index状態と担当者が決まっている。
- [ ] BlockerとMajorが0件、または承認済み例外として記録されている。

## 6.7 Final Release Review記録

- 本番予定URL: 
- 対象Version / Commit: 
- 確認端末・Browser: 
- 公開予定日時: 
- 未解決事項ID: 
- 判定: [ ] Release Ready　[ ] Conditional　[ ] Not Ready

---

# 7. Sign-off

## 7.1 レビュー記録

| Review領域 | 担当者 | 確認日 | 判定 | 未解決事項ID | 署名・承認 |
| --- | --- | --- | --- | --- | --- |
| Strategy |  |  | [ ] Pass [ ] Conditional [ ] Fail |  |  |
| Design |  |  | [ ] Pass [ ] Conditional [ ] Fail |  |  |
| Content |  |  | [ ] Pass [ ] Conditional [ ] Fail |  |  |
| Development |  |  | [ ] Pass [ ] Conditional [ ] Fail |  |  |
| SEO |  |  | [ ] Pass [ ] Conditional [ ] Fail |  |  |
| Final Release |  |  | [ ] Ready [ ] Conditional [ ] Not Ready |  |  |

## 7.2 修正事項

| ID | 領域 | 重大度 | 対象URL・画面 | 修正事項 | 担当者 | 期限 | 状態 | 再確認者・日付 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Blocker / Major / Minor |  |  |  |  | Open / Fixed / Accepted |  |
|  |  | Blocker / Major / Minor |  |  |  |  | Open / Fixed / Accepted |  |
|  |  | Blocker / Major / Minor |  |  |  |  | Open / Fixed / Accepted |  |

## 7.3 例外承認

| 修正事項ID | 公開時に残す理由 | 影響範囲 | 回避策 | 対応期限 | 承認者 | 承認日 |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |

## 7.4 最終公開判定

- Review対象サイト: 
- Review対象URL: 
- Version / Commit: 
- 最終確認日: 
- 公開予定日: 
- 未解決Blocker件数: 
- 未解決Major件数: 
- 未解決Minor件数: 
- 公開可否: [ ] 公開可　[ ] 条件付き公開可　[ ] 公開不可
- 条件・修正期限: 
- 最終承認者: 
- 署名: 
