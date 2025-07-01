import Link from 'next/link';

export default function BlogPostPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">2024年1月のブログ記事</h1>
      <div className="space-y-4">
        <p className="text-lg">パス: /blog/2024/01</p>
        <article className="prose max-w-none">
          <p>この記事は日付ベースの階層ルーティングのテスト用です。</p>
          <p>年（2024）→月（01）の構造でURLが構成されています。</p>
        </article>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">URL構造</h2>
          <code className="bg-gray-100 px-2 py-1 rounded">/blog/2024/01</code>
          <p className="mt-2">このような日付ベースのURLでもstatic exportが正常に動作することを確認できます。</p>
        </div>
        <Link href="/" className="text-blue-600 hover:underline">
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}