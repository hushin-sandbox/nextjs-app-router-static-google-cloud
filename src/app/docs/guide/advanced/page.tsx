export default function AdvancedGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">上級ガイド</h1>
      <div className="space-y-4">
        <p className="text-lg">パス: /docs/guide/advanced</p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">4階層の深いルート</h2>
          <p>このページは4階層の深いルーティング構造を持っています：</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>docs（ドキュメント）</li>
            <li>guide（ガイド）</li>
            <li>advanced（上級）</li>
          </ol>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Static Export での検証ポイント</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Cloud StorageでHTMLファイルが正しく配置されるか</li>
            <li>Cloud CDNでルーティングが正常に動作するか</li>
            <li>スラッシュ区切りの深い階層でアクセスできるか</li>
          </ul>
        </div>
      </div>
    </div>
  );
}