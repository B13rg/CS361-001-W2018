all:
	pdflatex TalkaTiel-SRP.tex
	rm *.aux
	rm *.log
clean:
	rm *.aux
	rm *.log
	rm *.pdf
