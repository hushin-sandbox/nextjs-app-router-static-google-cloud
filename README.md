# Next.js App Router Static Export for Google Cloud

Google Cloud での Next.js App Router static export 検証用プロジェクトです。

## 検証目的

- Google Cloud での Next.js App Router static export の動作確認
- Cloud Storage + Cloud CDN 構成での hosting 検証
- 階層の深いルーティング（スラッシュ区切り）での動作確認

## プロジェクト構成

### Static Export 設定

`next.config.ts` を参照

## 開発

### 開発サーバー起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアクセス

### ビルド・エクスポート

```bash
npm run build
```

静的ファイルは `out/` フォルダに出力されます。
