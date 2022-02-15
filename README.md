<p align="center">
    <img src="https://github.com/deine-Landschaft/dl-brand/blob/main/logo/deine-Landschaft_with_name.png?raw=true">
</p>

![Node.js](https://img.shields.io/badge/Node.js-689f38?style=for-the-badge&logo=node.js&logoColor=white)
![Appwrite Function](https://img.shields.io/badge/Appwrite_Function-689f38?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARpJREFUeNrsVl0NwyAQhilAAnNQCZVQCTgYEuYACcsc1EnrgEmYA3Yk93DpKH8l7QtfcmnKwf0fB2MdHQDnnACSZyiSQAZocf9YkCdz9+V6Zlx7mJRSarkF0tRi9FAjrxRetkgp1RnR0TXKt0JoeIeCWpiqw47hy/a0keeSemsTCp57FVqRc8NIblWivVyEr0pzzYnAO+f8sw0jfPyar8YH0Nv/w755axh8bGmOXMgbkrsB6IUpGXFt2pOTi5hiQW6fBSv4FezHI4ojhSOQL1I1UIIbnFvx/Lgj1xs0Q16/kYyNhV24ZrdTok6q2umaC+TglTkcnlSXDInIWFSBsaiajcXIpGr2EIgqDTx97ClPn4QhgnV0FOAnwABDX3jRz7sYRAAAAABJRU5ErkJggg==&logoColor=white)

# deine-Landschaft Appwrite mail function
In this repository is a [Node.js](https://nodejs.org/) project that uses [Appwrite Functions](https://appwrite.io/docs/functions) to send emails users on a specific event.

## Installation
1. Clone this repo
2. rename `.env.example` to `.env`
3. add your data to envioment variable in `.env` 
4. customize the mail layouts in `/templates` and variables in `/src/app.js`
5. Create a `.tar.gz` archive from your project (On UNIX: `tar -zcvf dl-appwrite-mail.tar.gz dl-appwrite-mail`)
6. Go to `[appwrite instance]/[project]/Functions` and click on **Add Function**
    - Give the function a name (e.g. `user mail service`) and select the `Node.js 16.0` runtime
    - After creating, go into the new function and click on **Deploy Tag** and click on **Manual**
    - In the **Command** field write `npm run start`
    - Add your `.tar.gz` archive to the **Gzipped Code (tar.gz file)** field.
    - Click **Create**
    - Click **Activate**
7. Go to function **Settings**
    - Select the **Events**: `users.update.email`, `users.create` and `users.delete`.
    - Click on **Update**

Now, if a user is created, deleted or changed to a new email, he will receive an email about this event.

## License
This project is licensed under [GNU GPLv3](./LICENSE)