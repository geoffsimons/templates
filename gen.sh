mkdir -p $1
cp .eslintrc $1/.eslintrc
cp .gitignore $1/.gitignore
cp README.md $1/README.md
cp gulpfile.js $1/gulpfile.js
cp package.json $1/package.json

# change to the new project root
cd $1

# NOTE: Removing git init because we often
# are working with empty clones of forks
# we are supposed to work in.
# setup git, script assumes new project
# git init

# Install node dependencies
npm i

# Consider git add . && git commit -m "Initial commit"
# Should that happen on a branch, or maybe this is something that
# can happen on master.
