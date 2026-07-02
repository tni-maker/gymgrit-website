# GymGrit Digital Standard

## Common / 04_Development_Guide.md

Version: 1.0  
対象: ジムグリットが制作・プロデュースするWebサイトおよび関連デジタルプロダクト  
位置付け: 開発標準 / Development Guide

---

# 0. About this Document

## 0.1 目的

本ドキュメントは、GDSで定義された情報構造、UI、Component、Patternを、保守性と品質を保ちながらWebサイトとして実装するための共通開発標準を定義する。

対象読者は、開発者、Codex、AI、およびWordPress実装者である。担当者が変わっても、同じ仕様から同等の構造、動作、性能、更新性を再現できる状態をつくることを目的とする。

## 0.2 Development Guideの責務

本ドキュメントが定義するのは「どう実装し、どう検証し、どう安全に公開・保守するか」である。

- 開発構成と技術選定
- WordPressテーマとTemplateの標準
- Front-endとComponentの開発ルール
- Asset、画像、性能、技術的SEOの管理
- AIとGitを含む開発手順
- 品質保証、公開、保守の基準

## 0.3 Design Systemとの違い

`03_Design_System.md` は、UIを「どう見せるか」を定義する。本ドキュメントは、そのUIを「どう再現し、動かし、維持するか」を定義する。

色、余白、Typography、写真表現、Componentの見た目、Patternの情報順序は本ドキュメントで再定義しない。実装時はDesign Systemを参照し、Project固有の指定がある場合はProject仕様を優先する。

コンテンツの内容、ブランド判断、検索戦略も本ドキュメントの対象外とする。ここでは、それらを正しく出力・管理するための技術だけを扱う。

---

# 1. Development Philosophy

## 1.1 保守性

変更箇所と影響範囲を予測できる構造をつくる。一つのファイルや関数に責務を集中させず、名称、配置、依存関係から役割が理解できる状態を保つ。

## 1.2 再利用性

同じ役割のUIや処理をページごとに複製しない。Design SystemのComponentとPatternを再利用可能な単位へ分け、Project内で一貫して使用する。

## 1.3 拡張性

新しいページ、投稿タイプ、Component、ブランドを追加しても、既存部分の大幅な変更を必要としない構造を目指す。将来の可能性だけを理由に過剰な抽象化は行わず、実際に確認された拡張要求に対応する。

## 1.4 可読性

短さより、意図と責務が明確であることを優先する。命名、ファイル分割、コメント、変更履歴を通じて、別の担当者が安全に引き継げる状態をつくる。

## 1.5 パフォーマンス

表示速度と操作応答は付加価値ではなく、基本品質として扱う。画像、書体、外部サービス、Style、Scriptの追加には性能上の費用があることを前提とする。

## 1.6 SEO

検索戦略ではなく、検索エンジンがページを正しく取得、理解、正規化できる技術基盤を整える。技術設定がコンテンツの価値を妨げない状態を保つ。

## 1.7 アクセシビリティ

アクセシビリティを公開前の修正項目にせず、構造、Component、操作、Formの設計段階から組み込む。原則として[WCAG 2.2](https://www.w3.org/TR/WCAG22/)のAA水準を基準にする。

## 1.8 AIとの協調

AIは速度を高める手段であり、仕様決定者ではない。AIが生成または変更した成果物も、人が作成したものと同じレビュー、検証、承認を通す。

---

# 2. Project Architecture

GDSは、全案件に共通する標準と、案件固有の仕様・成果物を分離する。

```text
GymGrit_Digital_Standard/
├── 00_PROJECT.md
├── README.md
├── CHANGELOG.md
├── Common/
│   ├── 01_Web_Strategy.md
│   ├── 02_Design_Principles.md
│   ├── 03_Design_System.md
│   ├── 04_Development_Guide.md
│   ├── 05_Content_Guide.md
│   ├── 06_SEO_Guide.md
│   └── 07_Review_Checklist.md
└── Projects/
    └── Project_Name/
        ├── PROJECT_SPEC.md
        ├── CONTENT.md
        ├── assets/
        ├── design/
        └── theme/
```

## 2.1 レイヤーの責務

| レイヤー | 責務 |
| --- | --- |
| Common | 複数案件で再利用できる標準を管理する |
| Projects | 案件固有の目的、仕様、例外、素材、成果物を管理する |
| WordPress Theme | 公開画面、Template、Component、機能の実装を管理する |
| Assets | 画像、SVG、動画、Font、PDFなどの素材を管理する |
| Components | 再利用するUI単位を管理する |
| Templates | ページ種別や用途ごとの画面構造を管理する |

Themeは対象Projectの配下で管理し、案件固有の処理やTemplateをCommonへ置かない。Commonへ追加するのは、実案件で有効性と再利用性が確認され、承認された標準だけとする。

---

# 3. Technology Stack

## 3.1 基本構成

| 技術 | 役割 | 基本方針 |
| --- | --- | --- |
| WordPress | コンテンツ管理と公開基盤 | Projectごとの専用Themeを前提とし、管理者が安全に更新できる構成にする |
| HTML | 文書構造と意味 | Semanticな要素を優先し、見た目の都合で構造を歪めない |
| CSS | 表示とResponsive対応 | Design TokenとComponent単位で整理し、影響範囲を予測可能にする |
| JavaScript | 操作と状態変化 | 必要な機能に限定し、なくても主要情報と基本操作が成立するようにする |
| PHP | WordPress Theme、Template、データ処理 | WordPress標準に従い、表示、取得、共通処理の責務を分ける |
| Git | 変更、Review、Releaseの履歴管理 | 小さく説明可能な変更単位で記録し、承認を経て統合する |
| Figma | 承認済みUIとDesign Systemの参照 | 見た目と状態の確認元とし、仕様上の判断はGDSとProject仕様に従う |

## 3.2 技術選定ルール

- WordPress、PHP、主要Pluginは、サポート中の安定版を使用する。
- 利用VersionはProject仕様または環境定義に記録し、本番環境と検証環境を揃える。
- 標準機能と小さな独自処理で解決できる場合、LibraryやPluginを追加しない。
- 依存を追加する場合は、目的、保守状況、License、容量、性能、アクセシビリティ、セキュリティ、代替手段を確認する。
- 同じ役割を持つLibraryやPluginを重複させない。
- 更新停止や脆弱性のある依存は採用せず、既存利用時は置換計画を作る。
- 技術の新しさではなく、Projectの要件、長期保守、運用者の扱いやすさを優先する。

---

# 4. Directory Structure

以下を、WordPress Themeの推奨構成とする。案件規模に応じて省略できるが、同じ責務を無秩序に複数箇所へ置かない。

```text
theme/
├── style.css
├── functions.php
├── index.php
├── front-page.php
├── page.php
├── single.php
├── archive.php
├── search.php
├── 404.php
├── header.php
├── footer.php
├── assets/
│   ├── css/
│   ├── js/
│   ├── img/
│   ├── svg/
│   ├── fonts/
│   ├── video/
│   └── pdf/
├── templates/
├── template-parts/
│   ├── global/
│   ├── components/
│   ├── sections/
│   └── content/
├── inc/
│   ├── setup/
│   ├── assets/
│   ├── functions/
│   ├── post-types/
│   ├── acf/
│   ├── seo/
│   ├── security/
│   └── performance/
├── acf-json/
├── languages/
└── tests/
```

## 4.1 配置ルール

- Theme直下には、WordPressが判定する主要Templateと入口となるファイルを置く。
- `functions.php` は初期化と各機能の読み込みに限定する。
- 再利用する表示単位は `template-parts/` に置き、役割で分類する。
- 固定ページ用Templateは `templates/` に置き、Project内で管理する。
- 共通処理、設定、データ取得、登録処理は `inc/` に分離する。
- ACFのフィールド定義はVersion管理できる形式で `acf-json/` などに保持する。
- 元素材と公開用Assetを区別し、Themeへ不要な原寸素材や作業ファイルを含めない。
- 自動生成物を管理対象に含めるかはProjectで明記し、担当者ごとに判断を変えない。

---

# 5. WordPress Development Standard

## 5.1 Theme化の前提

すべてのProjectは、WordPress Themeとして継続運用できる状態を前提とする。管理画面で更新する情報と、Themeが担う表示・機能を分離し、本文へ表示構造を直接埋め込む運用を避ける。

WordPress本体や外部Pluginのファイルを直接変更しない。案件固有の変更はThemeまたはProjectで管理する専用機能へ閉じ込める。

## 5.2 Template選択

- 固定ページは、管理画面で割り当てる固定ページTemplateを優先する。
- ページ表示はTemplateの選択によって制御し、slug文字列を条件にした分岐へ依存しない。
- `page-{slug}` のようなslug依存Templateを、案件の主要ページ表示方式として使用しない。
- slugを変更しても、割り当て済みTemplateとページ表示が壊れない構成にする。
- 投稿、Archive、検索、404などは、WordPressのTemplate Hierarchyに沿って責務を分ける。
- Project固有Templateは対象ProjectのTheme内で管理し、Commonへ追加しない。
- Template名と用途を管理画面上で判別できるようにし、用途の重複するTemplateを増やさない。

Templateの判定と優先順位は、[WordPress公式Template Hierarchy](https://developer.wordpress.org/themes/templates/template-hierarchy/)を基準に確認する。

## 5.3 ACF

- [ACF](https://www.advancedcustomfields.com/resources/getting-started-with-acf/)の利用を標準とし、更新者が扱う構造化データをFieldとして定義する。
- Field Groupは、Template、投稿タイプ、Taxonomyなど明確な対象へ関連付ける。
- Field名、Field Key、型、必須・任意、初期値、返却形式、説明を一貫して管理する。
- Field定義をVersion管理し、環境間で差異が生じないようにする。
- 表示に必要な値が未入力の場合の扱いを決め、警告や崩れを起こさない。
- 自由入力領域へ、更新者が表示構造そのものを記述しなければならない設計を避ける。
- ACFのEdition、License、依存機能はProject開始時に確認する。

## 5.4 `functions.php` と共通処理

- `functions.php` を機能の集積場所にせず、初期化と分割ファイルの読み込みに限定する。
- Theme設定、Asset読込、投稿タイプ、ACF、SEO、Security、Performanceなどは責務ごとに分離する。
- 複数Templateで使う処理は共通化し、同じ処理を複製しない。
- 汎用処理とProject固有処理を区別し、名称と配置から判別できるようにする。
- Globalな状態や暗黙の依存を増やさず、入力と出力が追跡できる構造にする。

## 5.5 Templateの責務

- Templateは画面全体の構造とComponentの組み合わせを担当する。
- `template-parts` は、一つの表示上の責務を担当する。
- データ取得、整形、表示、外部連携を一つのTemplateへ集中させない。
- Componentへ渡すデータの形を揃え、ACFの保存構造と表示構造を過度に結合しない。
- Loopや条件分岐を複雑化させず、必要な処理は名前を持つ共通処理へ分ける。
- 空データ、0件、画像なし、長い文字列、エラー時を正常な状態として扱う。

## 5.6 Security

- 入力値は用途に応じて検証・無害化し、出力時は文脈に応じて安全に扱う。
- 更新、送信、管理操作には、権限と正当な要求であることの確認を行う。
- Secret、認証情報、個人情報、環境固有値をRepositoryへ保存しない。
- 管理者権限を必要最小限にし、不要な機能、Account、Pluginを残さない。
- WordPress本体、Theme、PluginのSecurity Updateを継続して適用できる構成にする。

---

# 6. Front-end Development Rules

## 6.1 Semantic HTML

- Header、Navigation、Main、Section、Article、Aside、Footerなど、内容の意味に合う構造を使う。
- 見出しは文書構造に沿って順序を保ち、見た目のためだけに階層を変更しない。
- Linkは移動、Buttonは操作に使用し、外見だけで役割を入れ替えない。
- List、Table、Quote、Formは、意味に合う要素として表現する。

## 6.2 CSS設計

- Design SystemのTokenを基準とし、同じ値と役割をページごとに再定義しない。
- 基礎、Layout、Component、Utility、Project固有調整の層を分ける。
- ComponentのStyleは影響範囲を限定し、別ページや管理画面へ意図せず波及させない。
- 詳細度の競争や過度な上書きを避け、読み込み順と責務で解決する。
- ページ固有Styleは必要最小限にし、再利用可能になった時点でComponentへ移す。
- 未使用、重複、旧仕様のStyleを残さない。

## 6.3 JavaScript

- JavaScriptは、操作、状態変化、非同期処理など、必要な機能に限定する。
- Browserの標準機能で成立する場合は、外部Libraryを追加しない。
- Scriptが利用できない場合でも、主要情報の閲覧と基本行動が失われないようにする。
- 初期表示を妨げる処理、全ページで不要な処理、重複したEvent処理を避ける。
- DOM構造、表示文言、slugへの壊れやすい依存を避け、役割を示すHookを使う。
- Error、再実行、連続操作、通信中、完了の各状態を扱う。

## 6.4 Progressive Enhancement

主要な情報と基本機能を最も単純な構造で成立させ、その上に操作性や演出を追加する。追加機能が失敗しても、ページ全体を利用不能にしない。

## 6.5 Responsive

- Smartphone、Tablet、Desktopのすべてを前提に開発する。
- Desktop完成後の縮小ではなく、情報順序、画像、Table、Navigation、Formを各表示幅で検証する。
- 固定幅や固定高に依存せず、文字拡大、内容量、言語差に耐える構造にする。
- Breakpointは端末名ではなく、内容とLayoutが成立しなくなる位置を基準にする。

## 6.6 Accessible Markup

- Nativeな意味と操作を優先し、補助属性はNative要素で表現できない場合に限定する。
- すべての操作をKeyboardで実行でき、Focusの移動と現在位置を確認できるようにする。
- FormはLabel、必須・任意、説明、Error、完了状態を関連付ける。
- 画像の代替情報、動画の字幕、状態通知、言語指定を適切に出力する。
- 自動再生、強い点滅、操作を奪う動き、解除できない時間制限を避ける。

---

# 7. Component Development Rules

Design Systemで定義したButton、Card、Hero、FAQ、CTAなどを、Templateから再利用できるComponentとして実装する。

## 7.1 基本原則

- 一つのComponentは、一つの主要な責務を持つ。
- Componentは特定ページやslugを知らず、渡されたデータと明示された状態で表示する。
- データ取得と表示を分離し、異なるTemplateから同じComponentを利用できるようにする。
- 見た目のVariationはDesign SystemまたはProject仕様に存在するものだけに限定する。
- Component内から別の広い領域へ副作用を与えない。
- Required Data、Optional Data、状態、Variation、依存Assetを説明できる状態にする。

## 7.2 Componentごとの基準

| Component | 開発上の基準 |
| --- | --- |
| Button | Linkと操作の役割を区別し、状態とFocusを一貫して扱う |
| Card | データ構造、画像比率、Link範囲を揃え、内容量の差に耐える |
| Hero | Templateから主情報を受け取り、ページ固有の取得処理を内包しない |
| FAQ | 開閉前後の状態、Keyboard操作、見出しと回答の関係を保つ |
| CTA | 行動先と種類を明示し、同じComponent内で無制限にVariationを増やさない |

## 7.3 変更ルール

- Component変更前に、利用箇所と影響する状態を確認する。
- Project固有の例外を共通Componentへ直接混ぜず、明示的なVariationまたはProject側の構成で扱う。
- 同じUIの複製を発見した場合は、差異の理由を確認してから統合する。
- 見た目、Responsive、Keyboard、空データ、長文、Error状態をComponent単位で確認する。

---

# 8. Asset Management

## 8.1 管理対象

画像、SVG、動画、Font、PDF、Icon、音声、およびそれらの元素材と公開用データをAssetとして管理する。

## 8.2 命名ルール

- 英小文字、数字、ハイフンを基本とし、空白、全角文字、曖昧な連番を避ける。
- 内容と用途が分かる名称にし、`final`、`new`、`修正版`のような状態依存名を使わない。
- 同じAssetのVariationは、対象、用途、比率、サイズなど必要な差異を名前で判別できるようにする。
- ファイル拡張子を変えただけの重複や、使用先不明の複製を残さない。

## 8.3 配置と管理

- 公開用AssetはThemeの種類別Directoryへ置き、元データはProjectの素材領域で管理する。
- 使用していないAssetをThemeへ含めない。
- 外部素材は、Source URL、Creator、取得日、License、加工内容、使用Projectを記録する。
- SVGは出所と内容を確認し、不要情報や危険な要素を除いてから使用する。
- FontはLicense、Format、Weight、文字範囲を確認し、必要な種類だけ配信する。
- 動画は容量、Poster、字幕、再生方法、音声の有無を定義する。
- PDFは内容、Version、更新日、容量を管理し、古い版へのLinkを残さない。

---

# 9. Image Management

## 9.1 素材の優先順位

画像は次の順で選定する。

1. 実案件で撮影された写真
2. 承認済みのブランド写真
3. Projectの目的に適合するPixabay素材
4. Projectの目的に適合するPexels素材
5. その他、Licenseと品質を確認できる素材

人物写真を優先し、日本市場で自然に見える日本人素材を第一候補とする。写真の見た目に関する判断は `03_Design_System.md` のPhotography Systemに従う。

## 9.2 Stock素材

- PixabayとPexelsは、実案件写真またはブランド写真で必要な内容を補えない場合に利用する。
- 利用時点の[Pixabay公式License](https://pixabay.com/service/license-summary/)または[Pexels公式License](https://www.pexels.com/license/)と利用規約を確認し、Source URL、Creator、取得日を記録する。
- 人物、商標、施設、作品、商品が写る場合は、商用利用、肖像、権利、誤認のRiskを個別に確認する。
- 写真内の人物がサービスを推奨・利用していると誤認させる使い方をしない。
- 同じStock素材の多用、過度に演出された人物、海外市場の文脈が強い写真を避ける。
- Stock感を隠すための過度な加工は行わず、適合しない素材は採用しない。

## 9.3 最適化

- 表示寸法を大きく超える画像を配信しない。
- 用途と画面密度に応じた複数サイズを用意し、表示環境に適した画像を配信する。
- 写真はWebPを推奨形式とし、品質と容量を目視で確認する。必要に応じて互換形式も保持する。
- WidthとHeightに相当する領域を事前に確保し、画像読込によるLayout Shiftを防ぐ。
- 画面外の画像はLazy Loadを基本とする。
- HeroやLCP候補など初期表示に必要な画像へ、機械的にLazy Loadを適用しない。
- 代替Textは画像の役割に応じて設定し、装飾画像へ重複した説明を持たせない。
- 不要な位置情報とMetadataを除き、公開前に画質、向き、色、Cropを確認する。

---

# 10. Performance Standard

## 10.1 計測基準

Performanceは、公開前のLab計測と、公開後の実利用Dataの両方で確認する。LighthouseのScoreだけで合否を判断しない。

代表的な主要ページをMobile条件で複数回計測し、極端な一回値ではなく安定した結果を用いる。計測条件、対象URL、日時、環境を記録する。

## 10.2 Lighthouse目標

| Category | 公開時目標 |
| --- | --- |
| Performance | 90以上 |
| Accessibility | 95以上 |
| Best Practices | 95以上 |
| SEO | 95以上 |

外部Serviceや業務要件によって未達となる場合は、原因、影響、代替策、承認をProjectへ記録する。Scoreを上げるために必要な機能や情報を損なってはならない。

## 10.3 Core Web Vitals

GDS v1.0では、75パーセンタイルのMobileとDesktop双方で、次をGoodの目標とする。

| Metric | 目標 | 対象品質 |
| --- | --- | --- |
| LCP | 2.5秒以内 | 読込性能 |
| INP | 200ミリ秒以内 | 操作応答性 |
| CLS | 0.1以下 | 視覚的安定性 |

Core Web Vitalsは更新される可能性があるため、評価時は[Web Vitals公式資料](https://web.dev/articles/vitals)の現行定義も確認する。

## 10.4 最適化ルール

- 画像を適切な形式、寸法、品質に最適化する。
- 不要なJavaScript、CSS、Font、Plugin、外部Tagを削除する。
- Scriptは必要なページだけで読み込み、Main Threadを長時間占有する処理を避ける。
- CSSは重複と未使用を減らし、初期表示を妨げる読込を最小化する。
- FontのFamilyとWeightを絞り、必要な表示を妨げない読込方法を選ぶ。
- Browser Cache、Page Cache、Server Cache、CDNは環境に応じて使い分け、更新時の無効化方法を定義する。
- 外部埋込と計測Tagは目的、Owner、容量、発火条件を記録し、不要になった時点で削除する。
- Projectごとに画像、Script、CSS、Font、外部通信のPerformance Budgetを定め、変更による悪化をReviewする。

---

# 11. Technical SEO Standard

本章は、検索エンジンがページを取得・理解するための技術出力だけを扱う。Keyword、検索意図、記事企画、内部導線などの戦略は `06_SEO_Guide.md` で管理する。

## 11.1 Metadata

- 各index対象ページに、重複しないTitleと適切なMeta Descriptionを出力する。
- Projectで承認された値を使用し、Theme内へ案件固有文言を重複して固定しない。
- OGPのTitle、Description、URL、Image、Typeをページ内容と一致させる。
- SNS表示に必要な追加MetadataはProject要件に応じて一元管理する。
- 複数のPluginやThemeから同じMetadataを重複出力しない。

## 11.2 IndexとURLの正規化

- index対象と除外対象をProject仕様に従って出力する。
- Canonicalは絶対URLで一貫して出力し、重複URLを代表URLへ統合する。
- Canonical、内部Link、Redirect、XML Sitemapで異なる代表URLを示さない。
- `robots.txt` をindex除外の代用にせず、必要なPage Resourceの取得を妨げない。
- Status Codeを内容に合わせ、存在しないページが成功扱いにならないようにする。
- URL変更時は適切な恒久Redirectを設定し、Redirect ChainとLoopを作らない。

Canonicalの指定と重複URLの統合は、[Google Search Centralの公式資料](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)も参照する。

## 11.3 Structured DataとBreadcrumb

- Schemaはページ上で確認できる事実だけを表し、ページ種別に合うTypeを使用する。
- Required Property、URL、画像、日付、組織情報の整合を検証する。
- Breadcrumbは画面上の階層と構造化された階層を一致させる。
- 構造化Dataは検証ToolでErrorを確認し、Warningも必要性を判断する。

対応TypeとPropertyは、[Google Search CentralのStructured Data公式資料](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)で確認する。

## 11.4 XML Sitemap

- XML Sitemapには、Canonicalでindex可能な公開URLだけを含める。
- 非公開、重複、Redirect、Error URLを含めない。
- 新規公開、削除、URL変更が正しく反映されることを確認する。
- Sitemapの生成責務を一つにし、重複したSitemapを作らない。

対象URLと検証方法は、[Google Search CentralのSitemap公式資料](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)も参照する。

## 11.5 出力品質

- PageごとにLanguage、Heading、Image Alternative、Link、Paginationなど必要な構造を正しく出力する。
- Search、Archive、404、添付ページなど、通常ページ以外のindex方針もProjectで確認する。
- 公開前にCanonical、robots、Sitemap、Structured Data、OGPを実際の公開予定URLで検証する。

---

# 12. AI / Codex Development Rules

## 12.1 優先順位

AIとCodexは、次の順で判断する。

1. 対象Projectの承認済み仕様
2. Common Standard
3. 承認済みFigma、Content、既存Asset
4. 既存実装のうち、上位仕様と整合するもの
5. AIまたは実装者の判断

上位資料と下位資料が矛盾する場合は、上位を優先し、差異を報告する。

## 12.2 必須ルール

- 仕様書をCodeより優先する。
- 明示的な依頼や承認なしに仕様を変更しない。
- 対象作業のためにCommonを書き換えない。Commonの改善は提案として分離し、承認後に行う。
- Project固有の判断と例外はProject側へ記録し、Commonへ混ぜない。
- Design、Content、SEO、Developmentの責務を同じファイルへ混在させない。
- 不明点を都合よく推測しない。既存資料とFilesを確認し、結果を変える不明点は質問またはBlockerとして明示する。
- 指示されていない依存、Plugin、Library、機能を勝手に追加しない。
- 既存の変更と承認済み成果物を尊重し、作業範囲外の変更を行わない。
- Secret、個人情報、認証情報をPrompt、Comment、Log、Repositoryへ含めない。

## 12.3 提案とRefactoring

- 品質、保守性、性能、安全性を高める改善提案を歓迎する。
- 提案と承認済み作業を区別し、提案を無断で仕様化しない。
- 小規模なRefactoringは、外部動作を維持し、検証できる範囲で行う。
- 大規模な構造変更、依存変更、Data移行、広範囲のRefactoringは、目的、範囲、Risk、移行方法を提案してから着手する。
- 一度に関係のない変更を混ぜず、Review可能な差分に分ける。

## 12.4 Commentと報告

- Commentは処理の読み替えではなく、判断理由、制約、回避できない例外を分かりやすく説明する。
- 古くなったCommentを残さず、Codeと同時に更新する。
- 作業完了時は、変更Files、変更理由、検証内容、未解決事項、影響範囲を報告する。
- 検証していない内容を「確認済み」と表現しない。

---

# 13. Git Workflow

## 13.1 Branch

| Branch | 役割 |
| --- | --- |
| `main` | 公開可能な安定版。直接作業しない |
| `develop` | 次回Releaseへ向けた統合先 |
| `feature/*` | 機能追加、修正、改善ごとの作業Branch |
| `release/*` | 公開前の最終調整。必要なProjectで使用する |
| `hotfix/*` | 本番の緊急修正。修正後は必要なBranchへ反映する |

## 13.2 Commit

- 一つのCommitに一つの説明可能な目的を持たせる。
- 変更内容だけでなく、目的が分かるMessageにする。
- Format変更、生成物、機能変更を無関係に混ぜない。
- Secret、大容量の元素材、不要な生成物をCommitしない。
- Commit前に差分と対象Fileを確認する。

## 13.3 Pull Request

- `feature/*` から `develop` への統合はPull Requestを基本とする。
- Pull Requestには、目的、主な変更、対象画面、検証方法、Screenshot、影響範囲、残課題を記載する。
- Design変更、Data変更、Dependency変更、Migrationの有無を明示する。
- Review指摘への対応は、修正内容または対応しない理由を記録する。
- 必須Checkと少なくとも一名のReviewを完了してからMergeする。

## 13.4 MergeとRelease

- Conflictを解消した担当者は、解消後の動作を再確認する。
- Projectで定めたMerge方式を一貫して使用し、不要な履歴を増やさない。
- `develop` から `main` への統合はRelease承認後に行う。
- 公開版はTagまたはRelease記録で識別し、Theme VersionとCHANGELOGを対応させる。
- 緊急時を除き、本番環境だけで直接変更しない。

---

# 14. Quality Assurance

Review依頼前に、開発担当者が自己確認を完了する。自動Checkだけでなく、実際の表示、操作、更新も確認する。

| Area | 確認内容 |
| --- | --- |
| Design | 承認済みFigma、Design System、Project仕様との差異、Component状態、画像Crop |
| Responsive | Smartphone、Tablet、Desktop、文字拡大、長文、横Overflow、表示順 |
| WordPress | Template選択、ACF入力、未入力、一覧0件、更新Preview、管理者以外の権限 |
| Function | Navigation、Accordion、Modal、検索、Pagination、外部Link、Download |
| Form | 必須・任意、検証、Error、Keyboard、送信、二重送信、Mail到達、完了画面、Spam対策 |
| Accessibility | Semantic構造、見出し、Label、代替Text、Focus、Keyboard、Contrast、状態通知 |
| Performance | Lighthouse、Core Web Vitals候補、画像、Font、不要Asset、外部通信、Cache |
| Technical SEO | Title、Meta、OGP、Canonical、robots、Schema、Breadcrumb、Sitemap、Status Code |
| Link | Internal Link、External Link、Anchor、Redirect、Broken Link、404 |
| Browser | Project対象の主要Browserと実機または同等環境 |
| Security | 権限、入力、出力、Secret、依存、Debug表示、管理画面露出 |

重大度は、公開を止める問題、公開前に直す問題、改善候補に分ける。未修正で公開する項目は、理由、影響、回避策、承認者を記録する。

---

# 15. Release Process

## 15.1 公開前

- [ ] 対象Commit、Branch、Version、公開範囲が確定している
- [ ] ReviewとQuality Assuranceが完了している
- [ ] 本番FilesとDatabaseのBackupを取得し、復元方法を確認している
- [ ] Rollbackの条件、担当者、手順が明確である
- [ ] WordPress、PHP、Theme、Pluginの対応Versionを確認している
- [ ] 本番用URL、環境設定、Secret、Mail設定が正しい
- [ ] Staging専用のindex制御、Basic認証、Debug表示を本番へ残していない
- [ ] Title、Meta、OGP、Canonical、Schema、Breadcrumb、Sitemap、robotsを確認している
- [ ] Formの送信、Mail到達、Error、完了、Spam対策を確認している
- [ ] 404、Redirect、Broken Link、旧URLを確認している
- [ ] 計測Tag、Consent、Event、管理権限を確認している
- [ ] Lighthouseと主要画面のResponsive確認を完了している

## 15.2 公開

- 公開作業中の変更を凍結し、担当者と開始時刻を共有する。
- Data移行がある場合は、Files公開との順序と整合を管理する。
- Cacheを必要な範囲で削除し、全体を無条件に停止しない。
- 公開直後にHome、主要Landing Page、投稿、Form、404、管理画面をSmoke Testする。
- Error Log、監視、外部通信、計測の異常を確認する。

## 15.3 公開後

- 主要URLのStatus、Metadata、OGP、Sitemap、robots、Formを本番環境で再確認する。
- PerformanceとErrorを確認し、公開前からの重大な悪化がないことを確認する。
- Release Version、日時、担当者、変更内容、検証結果を記録する。
- 重大な問題がある場合は場当たり的な修正を重ねず、Rollback基準に従う。

---

# 16. Maintenance Rules

## 16.1 Version管理

- WordPress本体、Theme、Plugin、PHP、主要DependencyのVersionを記録する。
- Updateは検証環境でBackup、互換性、表示、Form、Performanceを確認してから本番へ適用する。
- 自動更新の対象と手動承認が必要な対象をProjectで定める。
- Support終了またはSecurity RiskのあるVersionを放置しない。

## 16.2 CHANGELOG

- ReleaseごとにVersion、日付、変更内容、影響範囲、Migration、既知の問題を `CHANGELOG.md` へ記録する。
- 利用者に影響する変更と、内部整理だけの変更を区別する。
- 緊急修正も後から追跡できるように記録する。

## 16.3 ProjectとCommon

- 案件固有の変更、例外、運用方法はProject側を更新する。
- Commonは個別案件の都合で直接変更しない。
- 複数案件で再利用でき、実案件で有効性が確認された改善だけを、ReviewとVersion更新を経てCommonへ追加する。
- Common変更時は、既存Projectへの影響と移行の必要性を確認する。

## 16.4 後方互換性

- 公開済みURL、保存済みACF Data、Template選択、Componentの入力形式を無断で破壊しない。
- 廃止する機能には、移行先、移行期間、対象、Rollback方法を定める。
- 互換性を保てない変更はMajorな変更として扱い、事前承認とMigrationを行う。
- 旧仕様のFallbackを残す場合は、終了条件と削除予定を記録する。

## 16.5 継続保守

- Backupの取得結果と復元可能性を定期的に確認する。
- Error Log、Security情報、稼働、Form到達、Core Web Vitalsを継続して確認する。
- 不要なPlugin、Account、Asset、Redirect、計測Tagを定期的に整理する。
- 障害対応では、事象、影響、原因、復旧、再発防止を記録する。
- 保守で得た知見はProjectへ残し、再利用条件を満たすものだけをCommonへ還元する。
