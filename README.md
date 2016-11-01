# prune-shrinkwrap
Remove specified packages from npm-shrinkwrap.json.  Useful when calling `npm shrinkwrap` on a Mac, and Linux install fails because of `fsevents`.

## Usage
- `npm install --save-dev prune-shrinkwrap`
- `./node_modules/.bin/prune-shrinkwrap fsevents [...otherPackages]`
