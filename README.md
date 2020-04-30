# SotLedger 🏴‍☠️
 
 [![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MrBartusek/ReplacementBot?color=black&logo=github)](https://github.com/MrBartusek/ReplacementBot/pulse/monthly)
![version](https://img.shields.io/badge/version-0.1-black)

[Ships of Fortune](https://seaofthieves.gamepedia.com/Ships_of_Fortune) monthly update for [Sea Of Thieves](https://www.seaofthieves.com) game made by [Rare](https://www.rare.co.uk) and [Xbox Games Studio](www.xbox.com/xbox-game-studios) introduced [Emissaries](https://seaofthieves.gamepedia.com/Trading_Company_Emissaries). Most active players became Ledgers and compete for the unique prizes in the leaderboard.

The purpose of the project is to make checking your current positions very easily inside the terminal. Of course, you can use official sources like [Leaderboard Page](https://www.seaofthieves.com/leaderboards) or check it in-game, however, this is a much more readable way.

![Presentation Image](https://i.imgur.com/TdyHjFw.png)

## ⚓ Installation
Install Required Software:
- [GIT](https://git-scm.com) (GUI such [GitHub Desktop](https://desktop.github.com) can be helpful)
- [Node.JS](https://nodejs.org)

Clone The Repository:
```sh
git clone https://github.com/MrBartusek/ReplacementBot.git
cd ReplacementBot
```
Install Dependencies:

```sh
npm install
```

And on the end setup authentation token:

## 🦜 `rat` token

Unfortunetly, Sea Of Thieves don't provide any official API at this points so this project uses slighty hacky way of authentaching user.

When you login to Microsoft account at [Sea Of Thieves Website](https://www.seaofthieves.com) a `rat` cookie is saved to your browser so you don't have to use retype your login credintials every visit.

**❗ And there is a catch 🎣** `rat` token is used to **acces your account** so you shoud **never** provide your token to any unthrusted source. SotLedger is open source and runs on your local machine and it's code is mantained as clean as possibly but, still you shouldn't thrust random text file on the internet. That is **strongly** adwised to review project code before providing your token.

To retrive your token you can use [EditThisCookie](http://www.editthiscookie.com) extension. To provide it to program, create `token.txt` file and paste token intro it.

## ☠️ Usage
```sh
node .
```

---

SotLedger is not Official Rare or Xbox Game Studio project and is not Approved or Associated with Rare nor Xbox Games Studio.