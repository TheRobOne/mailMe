# Mail Me

## Cloning and Running

### Cloning
To clone repostory just copy and paste:
```
git clone https://github.com/TheRobOne/mailMe.git
```
### Installing
Go to mailMe -> angular-src ->
*with root priveliges*
#### Unistall and clean
```
rm -rf node_modules dist
npm uninstall -g @angular/cli
npm cache clean
```
#### Reinstall
```
npm install -g @angular/cli@latest
npm install
ng serve
```


It should works now :)
