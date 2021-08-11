install:
	echo "Python 3 is required"
	pip3 install mkdocs
	pip3 install mkdocs-material

serve:
	mkdocs serve
