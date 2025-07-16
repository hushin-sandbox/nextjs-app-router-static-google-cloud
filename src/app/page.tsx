'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const handleImageDownload = (imagePath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Google Cloud Static Export テスト
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">検証目的</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Google Cloud でのNext.js App Router static export検証</li>
            <li>Cloud Storage + Cloud CDN構成での動作確認</li>
            <li>階層の深いルーティングの動作確認</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">テストページ</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">製品系ページ</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/products/"
                  className="text-blue-600 hover:underline"
                >
                  /products/
                </Link>
              </li>
              <li>
                <Link
                  href="/products/category/"
                  className="text-blue-600 hover:underline"
                >
                  /products/category/
                </Link>
              </li>
              <li>
                <Link
                  href="/products/category/subcategory/"
                  className="text-blue-600 hover:underline"
                >
                  /products/category/subcategory/
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">画像ダウンロード</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/image1.png"
                  alt="Image 1"
                  width={200}
                  height={200}
                  className="mx-auto cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() =>
                    handleImageDownload('/image1.png', 'image1.png')
                  }
                />
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/foo/image2.png"
                  alt="Image 2"
                  width={200}
                  height={200}
                  className="mx-auto cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() =>
                    handleImageDownload('/foo/image2.png', 'image2.png')
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Static Export設定</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <code>output: &lsquo;export&rsquo;</code> - Static HTML
              Export有効化
            </li>
            <li>
              <code>trailingSlash: false</code> - URL末尾スラッシュ無効化
            </li>
            <li>
              <code>images.unoptimized: true</code> - 画像最適化無効化
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
