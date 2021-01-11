#! bin/bash
yarn build
git add .
git commit -m 'deploy on github'
git push