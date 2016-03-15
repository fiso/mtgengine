cd frontend
python -m SimpleHTTPServer 1337 &
cd ..
watchify engine/Game.js -o frontend/js/bundle.js -v
