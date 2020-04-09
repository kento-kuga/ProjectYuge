## 1. はじめに

- サーバーの開発は、Rails5 で行う。
- フロント(UI)の開発は、React + Typescript で行う。
- フロントでの画面遷移は React Router を用いる。
- フロントとサーバー間の通信は axios で行う。
- CSS フレームワークは、Semantic UI React を用いる。

## 2. セットアップ方法

1. リポジトリをローカルにコピーする。

   - 以下のコマンドをプロジェクトフォルダ内で実行する。

     ```
     git clone https://github.com/kento-kuga/rails5-react-docker-boilerplate.git
     ```

2. DB を作成

   - プロジェクトフォルダ直下で以下のコマンドを実行し、DB を作成する。
     ```
     docker-compose run api rails db:create
     ```

3. ライブラリをインストール

   - プロジェクトフォルダ直下で以下のコマンドを実行し、js ライブラリをインストールする。
     ```
     docker-compose run front yarn
     ```

4. image をビルド

   - 以下のコマンドを実行し、front のイメージファイルを再ビルドする。
     ```
     docker-compose build
     ```

## 3. 環境の実行方法

- 開発時は、主に以下のコマンドを使用し。環境を立ち上げる。
- 基本的には、docker-compose up でコンテナを作成し、その後は docker-compose start、docker-compose stop コマンドでコンテナを開始/停止させる。

- 以下のコマンドを事項すると仮想開発環境(コンテナ)が作成され、自動的にサーバーが起動される。

  ```
  docker-copose up -d
  ```

  以下のアドレスにアクセスし、各コンテナが起動されているか確認する。

  - Rails サーバー

    ```
    http://localhost:3000/
    ```

  - React サーバー
    ```
    http://localhost:8000/
    ```

- 起動しているコンテナを停止するには、以下のコマンドを実行する。

  ```
  docker-compose stop
  ```

- 停止しているコンテナを開始するには、以下のコマンドを実行する。

  ```
  docker-compose start
  ```

- コンテナの起動状態を確認

  ```
  docker-compose ps
  ```

  - コンテナのステータスが「up」でなければ、コンテナは起動していない。

  * コンテナのログを確認
    コンテナのステータスが「up」になっていても、正常に起動していな場合がある。(コンテナの内部のサービスでエラーが発生しているなど。)  
    その際はログを確認する。

    ```
    docker-compose logs
    ```

* 環境を再セットアップしたい場合は、以下のコマンドを実行してから、リポジトリをクローンし直す。
  ```
  docker-compose down -v
  ```
