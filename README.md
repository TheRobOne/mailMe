# Mail Me

## Cloning and Running

### Cloning
To clone repostory just copy and paste:
```
git clone https://github.com/TheRobOne/mailMe.git
```
### Installing after pull changes
Go to mailMe -> angular-src ->
type:
```
npm install
```
to fetch modules

### Installing after clone repository
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
### Fixing errors
Due to error:
```
/maileMe/angular-src/node_modules/@types/gapi/index.d.ts (243,37): ',' expected.
```
just change line number 243 in /maileMe/angular-src/node_modules/@types/gapi/index.d.ts to:
```
then<TResult1, TResult2>(
```
it's an error in external npm module

### It should works now :)
