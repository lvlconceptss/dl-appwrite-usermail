<p align="center">
    <img src="https://github.com/deine-Landschaft/dl-brand/blob/main/logo/deine-Landschaft_with_name.png?raw=true">
</p>

![Node.js](https://img.shields.io/badge/Node.js-689f38?style=for-the-badge&logo=node.js&logoColor=white)
![Appwrite Function](https://img.shields.io/badge/Appwrite_Function-689f38?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARpJREFUeNrsVl0NwyAQhilAAnNQCZVQCTgYEuYACcsc1EnrgEmYA3Yk93DpKH8l7QtfcmnKwf0fB2MdHQDnnACSZyiSQAZocf9YkCdz9+V6Zlx7mJRSarkF0tRi9FAjrxRetkgp1RnR0TXKt0JoeIeCWpiqw47hy/a0keeSemsTCp57FVqRc8NIblWivVyEr0pzzYnAO+f8sw0jfPyar8YH0Nv/w755axh8bGmOXMgbkrsB6IUpGXFt2pOTi5hiQW6fBSv4FezHI4ojhSOQL1I1UIIbnFvx/Lgj1xs0Q16/kYyNhV24ZrdTok6q2umaC+TglTkcnlSXDInIWFSBsaiajcXIpGr2EIgqDTx97ClPn4QhgnV0FOAnwABDX3jRz7sYRAAAAABJRU5ErkJggg==&logoColor=white)

# deine-Landschaft Appwrite mail function
In this repository is a [Node.js](https://nodejs.org/) project that uses [Appwrite Functions](https://appwrite.io/docs/functions) to send emails users on a specific event.

## Installation
1. Clone this repo
2. Customize the mail layouts in `/templates` and variables in `/src/app.js`
3. Deploy the code as a function over the [appwrite-cli](https://appwrite.io/docs/command-line)
    ```bash
    appwrite functions createDeployment \
    --functionId=[YOUR_FUNCTION_ID] \
    --activate=true \
    --entrypoint="/src/app.js" \
    --code="[/myrepo/myfunction]"
    ```
4. Go to function **Settings** on your appwrite instance
    - Select the **Events**: `users.update.email`, `users.create` and `users.delete`.
    - Add important variables:
        - **MAIL_NAME** : This is the name from the sender
        - **MAIL_ADRESS** : mail adress from sender
        - **MAIL_PASSWORD** : password to connect to mailserver
        - **MAIL_SMTP_HOST** : SMTP Host
        - **MAIL_SMTP_PORT** : SMTP Port
    - Click on **Update**

Now, if a user is created, deleted or changed to a new email, he will receive an email about this event.

## License
This project is licensed under [GNU GPLv3](./LICENSE)