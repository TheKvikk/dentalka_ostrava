#!/bin/bash
set -e

BUILD_DIR="dist"               # or `.output/public`, depending on your setup
DEPLOY_DIR=".gh-pages-temp"    # temp folder for gh-pages
BRANCH="gh-pages"

# Ensure build directory is clean
rm -rf $DEPLOY_DIR

# Build the project (on current branch, e.g., master)
echo "🛠 Building project..."
npm run build

# Prepare worktree for gh-pages
echo "🔀 Creating worktree for $BRANCH..."
git worktree add $DEPLOY_DIR $BRANCH || git worktree add -B $BRANCH $DEPLOY_DIR origin/$BRANCH

# Copy build output into gh-pages worktree
echo "📁 Copying files to $DEPLOY_DIR..."
rm -rf $DEPLOY_DIR/*
cp -r $BUILD_DIR/* $DEPLOY_DIR/

# Commit and push
cd $DEPLOY_DIR
git add --all
git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')" || echo "Nothing to commit"
git push origin $BRANCH

# Cleanup
cd ..
git worktree remove $DEPLOY_DIR --force

echo "✅ Deployed to $BRANCH"