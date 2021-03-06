# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## Unreleased

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## v10.0.0 - 2019-07-18

### Changed

- パッケージスコープを変更

### Removed

- 注文照会キーを削除

## v9.0.0 - 2019-07-12

### Added

- プロジェクトインターフェースを追加

### Removed

- パフォーマンスインターフェースから券種情報を削除
- 仮予約インターフェースから冗長な属性を削除

## v8.0.0 - 2019-07-09

### Removed

- パフォーマンスインターフェースから座席情報を削除

## v7.0.0 - 2019-07-08

### Removed

- 映画作品インターフェースを削除
- 座席セクションインターフェースからcodeを削除(branchCodeへ移行)
- 座席インターフェースからcodeを削除(branchCodeへ移行)

## v6.0.0 - 2019-07-03

### Changed

- パフォーマンス検索条件のChevre化

### Removed

- 注文取引結果からeventReservationsを削除(order.acceptedOffersへ移行)
- 仮予約インターフェースからrate_limit_unit_in_secondsを削除
- パフォーマンスインターフェースから非推奨属性を削除

## v5.0.0 - 2019-06-28

### Changed

- 予約の入場以外の全属性をChevre化
- 券種インターフェースをChevre化

## v4.0.0 - 2019-06-24

### Changed

- update @chevre/factory

### Removed

- 券種からキャンセルチャージ属性を削除
- 予約インターフェースから不要な属性を削除
- 予約検索条件インターフェースから不要な属性を削除

## v3.3.0 - 2019-06-19

### Changed

- パフォーマンスインターフェースを拡張

## v3.2.0 - 2019-06-18

### Changed

- パフォーマンスインターフェースを拡張

## v3.1.1 - 2019-06-17

### Changed

- 予約検索条件強化

## v3.1.0 - 2019-06-17

### Changed

- 予約検索条件強化

## v3.0.0 - 2019-06-14

### Changed

- 予約検索条件を拡張
- 予約に追加特性を追加
- 仮予約インターフェースを拡張

### Removed

- 在庫インターフェースを削除

## v2.0.1 - 2019-06-11

### Changed

- 券種のchargeをpriceSpecificationに置換

## v2.0.0 - 2019-06-10

### Added

- イベント予約集計タスクを追加

### Changed

- パフォーマンス検索条件調整
- イベント予約検索条件調整
- パフォーマンス検索結果調整
- パフォーマンスインターフェースをChevre化に向けて補強
- イベント集計にオファーごとの集計を追加

### Removed

- パフォーマンスデータから不要な項目を削除
- 券種から、説明、レート制限単位属性を削除

## v1.0.1 - 2019-04-18

### Changed

- 予約インターフェースをChevreを継承するように拡張
- install @chevre/factory@1.0.0-alpha.88
- install @cinerino/factory@1.0.0-alpha.126
- 人物インターフェースをCinerino継承

## v1.0.0 - 2018-12-22

### Added

- TriggerWebhookタスクを追加

### Changed

- [Cinerino](https://github.com/cinerino/factory)化に向けて注文インターフェースを調整
- 注文検索条件を追加
- 取引検索条件を追加

## v0.2.0 - 2018-11-27

### Added

- 注文取引レポート作成タスクを追加。
- 注文返品取引レポート作成タスクを追加。
- 注文レポート更新タスクを追加。

## v0.1.1 - 2018-04-17

### Changed

- パフォーマンスの拡張属性に、販売ステータス最終更新時の予約データリストを追加。

## v0.1.0 - 2018-03-22

### Added

- 決済方法に手売りを追加。

### Fixed

- typescriptのコンパイルターゲットをes6からes5に変更。

## v0.0.1 - 2018-02-14
### Changed
- 予約スキーマに注文取引主体属性を追加。

## v0.0.0 - 2018-01-17
### Added
- ファーストリリース。
