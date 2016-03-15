cd frontend
python -m SimpleHTTPServer 1337 &
cd ..
watchify main.js -o frontend/js/bundle.js -v
