# Currently broken
Fix coming soon

# SotLedger 🏴‍☠️
 
![OSS Lifecycle](https://img.shields.io/osslifecycle/MrBartusek/SotLedger)

 <img src="https://i.imgur.com/FCmyTn6.png" alt="Presentation Image" width="70%"/>

## 🏴‍ Introduction
[Ships of Fortune](https://seaofthieves.gamepedia.com/Ships_of_Fortune) monthly update for [Sea Of Thieves](https://www.seaofthieves.com) game made by [Rare](https://www.rare.co.uk) and [Xbox Games Studio](www.xbox.com/xbox-game-studios) introduced [Emissaries](https://seaofthieves.gamepedia.com/Trading_Company_Emissaries). Most active players became Ledgers and compete for the unique prizes in the leaderboard.

The purpose of the project is to make checking your current positions very easily inside the terminal. Of course, you can use official sources like [Leaderboard Page](https://www.seaofthieves.com/leaderboards) or check it in-game, however, this is a much more readable way.


## ⚓ Installation
You can set up the script in 4 easy steps:

__1__ Install Required Software:
- [GIT](https://git-scm.com) (GUI such [GitHub Desktop](https://desktop.github.com) can be helpful)
- [Node.JS](https://nodejs.org)

__2__ Clone The Repository:
```sh
git clone https://github.com/MrBartusek/SotLedger.git
cd SotLedger
```
__3__ Install Dependencies and build project:

```sh
npm install
npm run build
```

__4__ Setup `token.txt` file with `rat` token [How to Setup `rat` token](#-how-sotledger-fetches-data-and-how-to-get-rat-token)

## ☠️ Usage
When you are inside the project directory you can type:
```sh
npm start
```

## 🦜 How SotLedger fetches data and how to get `rat` token

Unfortunately, Sea Of Thieves doesn't provide any official API at this points so this project uses a slightly hacky way of authenticating a user. When you log in to Microsoft account at [Sea Of Thieves Website](https://www.seaofthieves.com) a `rat` cookie is saved to your browser so you don't have to use retype your login credentials every visit. Then script fetches data from `AJAX` endpoints intended for [Official Leaderboard Page](https://www.seaofthieves.com/leaderboards)

**❗ And there is a catch 🎣❗** `rat` token is used to **access your account** so you should **never** provide your token to any untrusted source. SotLedger is open source and runs on your local machine and its code is maintained as clean as possible but, still, you shouldn't trust random text file on the internet. That is **strongly** advised to review project code before providing your token. 

To retrieve your token you can use [EditThisCookie](http://www.editthiscookie.com) browser extension to copy `rat` cookie from [LeaderBoard Page](https://www.seaofthieves.com/leaderboards). Then create `token.txt` file in the main project directory and paste `rat` token intro it. Expand image below for more info!

<details>
<summary>Expandable Image</summary>
<img src="https://i.imgur.com/79JpvZ8.png" alt="EditThisCookie tutorial"/>
</details>

---

SotLedger is not Official Rare or Xbox Game Studio project and is not Approved or Associated with Rare nor Xbox Games Studio.