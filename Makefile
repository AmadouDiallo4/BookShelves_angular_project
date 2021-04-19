all:


prepare:
	#pull images

build:


prepare:
		docker build --rm --file Dockerfile -t bookshelves_app:0.0 .

debug:
		docker run -it bookshlves_app:0.0 /bin/bash

run:
		docker run -it -p 80:80 bookshelves_app:0.0
