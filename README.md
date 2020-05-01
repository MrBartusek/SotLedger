# SotLedger 🏴‍☠️
 
 [![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MrBartusek/SotLedger?color=black&logo=github)](https://github.com/MrBartusek/SotLedger/pulse/monthly)

[Ships of Fortune](https://seaofthieves.gamepedia.com/Ships_of_Fortune) monthly update for [Sea Of Thieves](https://www.seaofthieves.com) game made by [Rare](https://www.rare.co.uk) and [Xbox Games Studio](www.xbox.com/xbox-game-studios) introduced [Emissaries](https://seaofthieves.gamepedia.com/Trading_Company_Emissaries). Most active players became Ledgers and compete for the unique prizes in the leaderboard.

The purpose of the project is to make checking your current positions very easily inside the terminal. Of course, you can use official sources like [Leaderboard Page](https://www.seaofthieves.com/leaderboards) or check it in-game, however, this is a much more readable way.

![Presentation Image](https://i.imgur.com/xfBHJIO.png)

## ⚓ Installation
Install Required Software:
- [GIT](https://git-scm.com) (GUI such [GitHub Desktop](https://desktop.github.com) can be helpful)
- [Node.JS](https://nodejs.org)

Clone The Repository:
```sh
git clone https://github.com/MrBartusek/SotLedger.git
cd SotLedger
```
Install Dependencies and build:

```sh
npm install
npm run build
```

And on the end setup authentication token:

## 🦜 `rat` token

Unfortunately, Sea Of Thieves doesn't provide any official API at this points so this project uses a slightly hacky way of authenticating a user.

When you log in to Microsoft account at [Sea Of Thieves Website](https://www.seaofthieves.com) a `rat` cookie is saved to your browser so you don't have to use retype your login credentials every visit.

**❗ And there is a catch 🎣** `rat` token is used to **access your account** so you should **never** provide your token to any untrusted source. SotLedger is open source and runs on your local machine and its code is maintained as clean as possible but, still, you shouldn't trust random text file on the internet. That is **strongly** advised to review project code before providing your token.

To retrieve your token you can use [EditThisCookie](http://www.editthiscookie.com) extension. To provide it to program, create `token.txt` file and paste token introit.

## ☠️ Usage
```sh
node .
```

---

SotLedger is not Official Rare or Xbox Game Studio project and is not Approved or Associated with Rare nor Xbox Games Studio.