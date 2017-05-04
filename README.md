# Mail Me

## Cloning and Running

### Cloning
To clone repostory just copy and paste:
```
git clone https://github.com/TheRobOne/mailMe.git
```
### Installing
Go to mailMe -> angular-src ->
```
npm install
```

Have fun with errors...





Just kidding...

### Fixing errors (if you have them)
*on Mint*
Unistall your old version of angular-cli module
```
sudo npm uninstall --save-dev angular-cli
```
Install latest version of @angular/cli
```
sudo npm install --save-dev @angular/cli@latest
```
Change angular-cli.json in angular-src dir fro
```
"environments": {
  "source": "environments/environment.ts",
  "dev": "environments/environment.ts",
  "prod": "environments/environment.prod.ts"
}
```
to
```
"environmentSource": "environments/environment.ts",
"environments": {
  "dev": "environments/environment.ts",
  "prod": "environments/environment.prod.ts"
}
```

It should works now :)
