# GymGrit Digital Standard (GDS)

**Version 1.0**

> Project Constitution for AI, designers, engineers, and marketers.

---

# Purpose

GymGrit Digital Standard（GDS）は、ジムグリットが制作・改善・運用するデジタルプロダクトに、一貫したブランド体験と品質をもたらすための共通基準である。

GDSの目的は、Webサイトや画面を作ることそのものではない。ブランドの思想、情報、デザイン、コンテンツ、検索体験、実装を一つの方針でつなぎ、担当者や使用する技術が変わっても、ジムグリットらしい判断を再現できる状態をつくることである。

すべての制作物は、ブランド価値を伝え、共感と信頼を育て、事業が長く続く理由をつくるために存在する。

---

# Philosophy

## 続く理由をデザインする会社。

ジムグリットは、表面的な制作物を提供するだけの会社ではない。事業、ブランド、人、体験をつなぎ、選ばれ続ける理由を設計する。

GDSは、次の考え方をすべての判断の土台とする。

- **Brand Experience** — 制作の目的は、ブランドへの共感と信頼を育てる体験を設計することである。
- **Long-Term Value** — 短期的な反応や流行より、長期的なブランド価値を優先する。
- **Quiet Confidence** — 派手に主張せず、思想、実績、品質によって自然に信頼される状態を目指す。
- **People First** — 組織や技術の都合ではなく、利用する人、働く人、関わる人を起点に考える。
- **Information First** — 装飾や演出の前に、伝える情報、その優先順位、理解の流れを整える。

---

# Source of Truth

次の8文書を、GDS Version 1.0における唯一の設計基準とする。制作・改善・実装・レビューを始める前に、対象作業に関係する文書を必ず確認する。

| Document | Role |
| --- | --- |
| [`00_PROJECT.md`](./00_PROJECT.md) | プロジェクト全体の目的、思想、判断基準を定義する。 |
| [`01_WEB_STRATEGY.md`](./01_SPEC_v1_1_checked.md) | 何を作り、どの事業目標とユーザー体験を実現するかを定義する。 |
| [`02_DESIGN_PRINCIPLES.md`](./02_Design_Principles_v1.1.md) | なぜそのデザインを選ぶのか、その判断原則を定義する。 |
| [`03_DESIGN_SYSTEM.md`](./03_Design_System.md) | UIをどう見せるか、再利用可能な表現ルールを定義する。 |
| [`04_DEVELOPMENT_GUIDE.md`](./04_Development_Guide.md) | UIと機能をどう実装し、品質を維持するかを定義する。 |
| [`05_CONTENT_GUIDE.md`](./05_Content_Guide.md) | 何を、どの順番で、どのように伝えるかを定義する。 |
| [`06_SEO_GUIDE.md`](./06_SEO_Guide.md) | 検索ユーザーへ価値を届け、情報資産を育てる方針を定義する。 |
| [`07_REVIEW_CHECKLIST.md`](./07_Review_Checklist.md) | 成果物が公開可能な品質に達しているかを確認する。 |

文書間で内容が競合する場合は、責務が一致する文書を参照し、最終的な判断は `00_PROJECT.md` とユーザーの承認に従う。

---

# Fixed Documents

上記8文書は、GDS Version 1.0の完成版である。

Codex、ChatGPT、Claudeを含むAIは、明示的なユーザー承認なしに、次の行為をしてはならない。

- 内容を変更する
- 記述や章を削除する
- 定義済みの責務やルールを再定義する
- 文書の意図を独自解釈で置き換える
- 他の一般論を優先して仕様を上書きする

矛盾、改善余地、より良い方法を発見した場合の提案は歓迎する。ただし、提案と変更は分ける。変更は、対象、理由、影響範囲を示し、必ずユーザーの承認を得てから行う。

---

# Priority

制作時の判断は、次の優先順位に従う。

1. 今回のユーザー指示
2. GymGrit Digital Standard
3. 一般的なWeb制作のベストプラクティス

一般論、流行、ツールの推奨設定がGDSと異なる場合は、GDSを優先する。ユーザー指示とGDSに矛盾がある場合は、勝手に解釈せず、矛盾と影響を明らかにする。

---

# Role of AI

AIは、新しいルールを独自に作る存在ではなく、GDSを正確に読み、適切に適用し、品質を確認する協働者である。

AIは次の原則に従う。

- 作業前にREADMEと関係するSource of Truthを読む。
- 承認済み仕様と確認できる事実を、推測より優先する。
- 文書ごとの責務を混在させない。
- 不明点を独自仕様で埋めない。
- GDSに沿った改善案は、変更前に提案する。
- 大規模な変更は、目的と影響範囲を説明して承認を得る。
- 迷った場合はGDSへ戻り、ブランド体験への影響で判断する。

AIが生成した成果物も、人が制作した成果物と同じ基準でレビューする。

---

# Scope

GDSは、ジムグリットが制作、プロデュース、改善する次の対象へ適用する。

- Corporate Website
- Landing Page
- Brand Website
- Service Website
- Recruitment Site
- Campaign Page
- Future Digital Products

対象ごとに目的やブランド表現が異なる場合も、GDSの思想、責務分離、品質基準を共通の土台とする。固有の仕様はProject側で管理する。

---

# Existing Projects

既存サイトへGDSを適用する場合は、全面リニューアルを前提としない。

現在の資産、承認済み仕様、運用状況を尊重し、目的とのずれ、品質上の課題、GDSとの差分を特定したうえで、必要な範囲を段階的にRefactoringする。

- 有効な既存資産を残す。
- 見た目だけでなく、情報、体験、実装、運用の整合を確認する。
- 変更範囲と影響を明確にする。
- 一度に作り直すことより、継続的に適合度を高めることを優先する。

---

# Output Rules

成果物を提出するときは、次の項目を必ず報告する。

1. **適用したGDS** — 参照した文書と主要な基準
2. **改善内容** — 追加、変更、整理した内容
3. **改善理由** — どの課題を、なぜ改善したか
4. **期待効果** — ユーザー、ブランド、事業、運用への効果
5. **未対応事項** — 対応していない内容、残課題、確認が必要な事項

変更がない項目も省略せず、「なし」または「該当なし」と明記する。

---

# Version Management

GDSのVersionは、思想、責務、標準仕様の状態を共有するための識別子である。

- Versionの変更には、ユーザーの承認を必須とする。
- AIは独自判断でVersionを書き換えない。
- 承認された変更は、対象文書と `CHANGELOG.md` に記録する。
- Project固有の変更を、GDS本体のVersion変更として扱わない。
- 変更前に、関連文書と既存Projectへの影響を確認する。

---

# Git Workflow

GymGrit Webプロジェクトでは、以下のGit運用を標準とします。

## ブランチ構成

main
- 常に公開可能な状態を維持する。
- 直接編集しない。

feature/*
- 新機能・ページ追加・デザイン修正は必ず feature ブランチで作業する。

ブランチ命名規則

feature/home
feature/about
feature/services
feature/the-reset
feature/contact
feature/recruit
feature/blog

必要に応じて追加可能。

### Branch Types

`feature/*`
- 新機能・ページ追加

`fix/*`
- バグ修正

`docs/*`
- ドキュメント更新

`refactor/*`
- リファクタリング

`hotfix/*`
- 緊急修正

ブランチ命名例

- `feature/home`
- `feature/services`
- `feature/the-reset`
- `feature/company`
- `feature/contact`
- `docs/readme-update`
- `fix/mobile-menu`
- `refactor/header`

## 作業フロー

1. main から feature ブランチを作成する。
2. feature ブランチで実装する。
3. 実装完了後レビューを行う。
4. 問題なければ main にマージする。

## Pull Request Workflow

作業フロー

```text
main
↓
feature/*
↓
Pull Request
↓
Review
↓
Merge to main
↓
Deploy
```

レビューを経ずにmainへマージしない。

## AI Workflow

ChatGPT
・仕様設計
・情報設計
・デザインレビュー
・SEO
・プロンプト作成

CODEX
・README.md
・docs
・Design System
・Development Guide
を遵守して実装する。

CODEXは勝手な仕様変更を行わない。

仕様変更は必ずChatGPTとの設計後に実装する。

## AI Collaboration Workflow

GymGritではAIの役割を明確に分離する。

### User

最終意思決定者

### ChatGPT

・要件整理
・仕様設計
・情報設計
・UX設計
・SEO設計
・レビュー
・Codexへのプロンプト作成

### CODEX

・READMEとdocsを読み実装する
・仕様変更を行わない
・Design Systemを遵守する
・Development Guideを遵守する
・Review Checklistを自己確認する
・Git Workflowを遵守する

AIは独自判断で仕様変更を行わない。

不明点は必ずユーザーへ確認する。

## Commit Message

コミットメッセージは英語で簡潔に記述する。

コミットメッセージは Conventional Commits に準拠する。

`style:`
- UI調整

`perf:`
- パフォーマンス改善

`chore:`
- 環境設定・依存更新

例

feat: add services page
feat: redesign hero section
fix: mobile navigation
refactor: simplify layout
docs: update README
style: adjust button spacing
perf: improve image loading
chore: update dependencies

## Rules

- mainへ直接コミット禁止
- docsを最優先とする
- READMEを常に最新状態へ保つ
- デザインシステムに従う
- レビュー完了前はmainへマージしない

## Development Principle

GymGritでは

設計
実装
レビュー

を分離する。

設計はChatGPT

実装はCODEX

最終判断はユーザー

が行う。

CODEXは設計者ではなく実装者である。

ChatGPTは設計を行うが、ユーザー承認なしに仕様変更を決定しない。

迷った場合は実装を止め、ユーザーへ確認する。

---

# Final Principle

制作に迷ったら、デザインでも、コードでも、SEOでもなく、

> **「GymGritらしいブランド体験につながるか」**

を最優先に判断する。

GDSはルールを守るためだけの仕組みではない。ジムグリットらしい共感と信頼を、すべての接点で積み重ねるための共通言語である。
