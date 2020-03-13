# ADMIN-PAGES

membuat halaman admin pada sebuah web, untuk memantau data yang ditanpilkan menggunakan chart.js. halaman admin mengaju pada halaman admin [disini](gamalogic.com).
langkah-langkah :
1. membuat app.js
2. setting nodemon
    ```
    - npm init
    - isi sesuai input
    - edit package.json
    ```
    ```json
    // file package.json
    {
        "name": "admin-pages",
        "version": "1.0.0",
        "description": "halmaan admin",
        "main": "app.js",
        "dependencies": {
            "express": "^4.17.1"
        },
        "devDependencies": {},
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "nodemon app.js" // menambahkan auto run
        },
        "author": "dev.suhada@gmail.com",
        "license": "ISC"
    }
    ```
3. jalankan : `nom start`
4. reference untuk halaman admin dan halaman login dapat di akses di codepen.


- sumber belajar
    - [codepen](https://codepen.io/sadlerj/pen/bgqpaR)
