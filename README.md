## 1. はじめに

- サーバーの開発は、Rails5 で行う。
- フロント(UI)の開発は、React + Typescript で行う。
- フロントでの画面遷移は React Router を用いる。
- フロントとサーバー間の通信は axios で行う。
- CSS フレームワークは、Semantic UI React を用いる。

## 2. セットアップ方法

0. docker-toolbox を使用する際の注意

- toolbox を使用する場合は、「Docker Quicstart Terminal」を管理者権限で起動しなければならない。
- もし、管理者権限で起動する前に一度起動していた場合、エラーが発生し、起動できないため、以下のコマンドを Docker Quicstart Terminal 内で実行する。
  ```
  docker-machine stop
  exit
  ```

1. リポジトリをローカルにコピーする。

- windows と mac で改行コードが異なるため、そのままリポジトリをクローンすると、不具合が発生する。
- git と vscode で以下の設定を行い、対応する。

  - 以下のコマンドを実行し、git の設定を行う(windows のみ)。

    ```
    git config --global core.autocrlf input
    ```

  - vscode の設定を変更する。
    - メニュー「ファイル or Code」→ 基本設定 → 設定 を開く。
    - 設定の検索にて、「eol」と入力。
    - Files:Eol にて、「\n」を選択する。

- docker-toolbox の場合は、以下のディレクトリ下に作業フォルダを配置する。

  ```
  C:\Users\<username>\
  ```

- 以下のコマンドを任意の作業フォルダ内で実行する。

  ```
  git clone https://github.com/kento-kuga/ProjectYuge
  ```

2. ビルドする。

   - プロジェクトフォルダ直下で以下のコマンドを実行し、イメージをビルドする。
     ```
     docker-compose build --no-cache
     ```

3. DB を作成

   - プロジェクトフォルダ直下で以下のコマンドを実行し、DB を作成する。
     ```
     docker-compose run api rails db:create
     ```

4. ライブラリをインストール

   - プロジェクトフォルダ直下で以下のコマンドを実行し、js ライブラリをインストールする。

     ```
     docker-compose run front yarn
     ```

5. image をビルド

   - 以下のコマンドを実行し、front のイメージファイルを再ビルドする。
     ```
     docker-compose build
     ```

## 3. 環境の実行方法

- 開発時は、主に以下のコマンドを使用し、環境を立ち上げる。
- 基本的には、docker-compose up でコンテナを作成し、その後は docker-compose start、docker-compose stop コマンドでコンテナを開始/停止させる。

- 以下のコマンドを事項すると仮想開発環境(コンテナ)が作成され、自動的にサーバーが起動される。

  ```
  docker-compose up -d
  ```

  - 以下のアドレスにアクセスし、各コンテナが起動されているか確認する。

    - Rails サーバー

      ```
      http://localhost:3000/
      ```

    - React サーバー

      ```
      http://localhost:8000/
      ```

  - docker-toolbox を使用している場合は、localhost にアクセスできないため、以下の URL で確認する。(toolbox では仮想マシン上でコンテナを動作させているため。)

    - 仮想マシンの IP を調べる。Docker Quicstart Terminal 内で以下のコマンドを実行する。

      ```
      docker-machine ip
      ```

    - Rails サーバー

      ```
      http://<ipコマンドで調べたip>:3000/
      ```

    - React サーバー

      ```
      http://<ipコマンドで調べたip>:8000/
      ```

* 起動しているコンテナを停止するには、以下のコマンドを実行する。

  ```
  docker-compose stop
  ```

* 停止しているコンテナを開始するには、以下のコマンドを実行する。

  ```
  docker-compose start
  ```

* コンテナの起動状態を確認

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

- 環境を再セットアップしたい場合は、以下のコマンドを実行してから、リポジトリをクローンし直す。
  ```
  docker-compose down -v
  ```
