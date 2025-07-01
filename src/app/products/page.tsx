import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">製品一覧</h1>
      <div className="space-y-4">
        <p className="text-lg">パス: /products</p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">ナビゲーション</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/products/category" className="text-blue-600 hover:underline">
                カテゴリページへ
              </Link>
            </li>
            <li>
              <Link href="/products/category/subcategory" className="text-blue-600 hover:underline">
                サブカテゴリページへ（深い階層）
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}