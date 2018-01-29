all: 
	pdflatex Assignment_1_Vision_Statement.tex
	pdflatex Talkatiel-SRP.tex

clean:
	rm *.aux
	rm *.log
	rm *.pdf