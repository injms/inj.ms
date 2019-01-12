#!/bin/bash

set -o pipefail
set -e

# Site has been built using `npm run netlify` in Travis already.
# Comment the next line back in if testing locally.
# npm run netlify

# Run a background HTTP server to serve our JavaScript and test against.
./node_modules/.bin/http-server ./site/ -p 8000 &
TEST_SERVER_PID=$!

# Run our tests.
percy exec -- node ./percy.js

# Kill our backgrounded server (http-server expects a Ctrl+C, aka SIGINT)
kill -SIGINT $TEST_SERVER_PID
