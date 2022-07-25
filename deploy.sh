# echo "Switching to branch master"
# git checkout master

# echo "Building app ..."
# npm run build

echo "Deploying files to server ..."

scp -r build/* root@162.55.160.100:/var/www/geo

echo "Done!"