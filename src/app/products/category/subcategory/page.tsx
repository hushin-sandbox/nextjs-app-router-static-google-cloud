export default function SubcategoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">サブカテゴリページ</h1>
      <div className="space-y-4">
        <p className="text-lg">パス: /products/category/subcategory</p>
        <p>このページは階層の深いルーティングのテスト用です。</p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">ルーティング情報</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>レベル1: products</li>
            <li>レベル2: category</li>
            <li>レベル3: subcategory</li>
          </ul>
        </div>
      </div>
    </div>
  );
}