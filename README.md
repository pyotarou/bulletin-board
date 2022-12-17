# 掲示板アプリ
TechTrainで作成した掲示板アプリ

## 学習したこと
1. Node.jsのバージョン管理方法
   - nodebrew
2. axiosを利用してデータの送受信を行う
3. コンポーネント館でのURLパラメータの受け渡し
   - 渡す側：react-router-domのRouterコンポーネント内のpath部に、`:thread_id`を使う
   - 受け取り側：usePropsで受け取る
4. URLコンポーネントで渡せない値を別コンポーネントに渡す方法
   - useLocation
5. useEffectの依存配列
   - 数値に依存している場合は、数値を代入した変数を依存配列に入れるだけで良い
   - Array型の場合は、依存配列に同じ変数を入れてるは良くない
     - 再レンダリングの際にヒープ領域内の別アドレスにArrayが生成され、アドレス値が前回の変数が保存されていたものと異なるため、無限レンダリング地獄になる
   - [ここ](https://overreacted.io/ja/a-complete-guide-to-useeffect/)を参考にした