import Link from 'next/link';

export default function CategoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">カテゴリページ</h1>
      <div className="space-y-4">
        <p className="text-lg">パス: /products/category</p>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">ナビゲーション</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/products" className="text-blue-600 hover:underline">
                製品一覧に戻る
              </Link>
            </li>
            <li>
              <Link href="/products/category/subcategory" className="text-blue-600 hover:underline">
                サブカテゴリページへ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}