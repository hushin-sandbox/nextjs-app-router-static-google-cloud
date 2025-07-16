# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Google CloudでのNext.js App Router Static Export検証用のサンドボックスプロジェクト。Cloud Storage + Cloud CDN構成での静的サイトホスティングの動作確認が目的。

## 技術スタック

- **Next.js 15.3.4** (App Router)
- **React 19.0.0**
- **TypeScript 5**
- **Tailwind CSS 4** (最新版)
- **Static Export特化設定** (`output: 'export'`)

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # 静的ファイル生成 (out/フォルダ)
npm run lint     # ESLintチェック
npm run start    # プロダクションサーバー起動
```

## アーキテクチャ

### Static Export設定
- `next.config.ts`で`output: 'export'`を設定

### ディレクトリ構造
- `src/app/` - App Routerベースのページ構造
- 深い階層ルーティングの検証用ページを含む
  - `/products/category/subcategory/`
- `out/` - ビルド後の静的ファイル出力先

### パス設定
- TypeScript path mapping: `@/*` → `./src/*`

## 重要な制約

1. **サーバーサイド機能なし**: API Routes、Server Actions等は使用不可
2. **画像最適化無効**: Next.js Image Optimizationは無効
3. **静的生成のみ**: 全ページが事前生成される

## デプロイ先

Google Cloud Storage + Cloud CDN構成を想定。`npm run build`で生成された`out/`フォルダの内容をCloud Storageにアップロード。
