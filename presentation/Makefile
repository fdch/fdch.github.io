APP = camara-llorens-application


all:
	pandoc -s -i presentation.rst -o index.html

application:
	mkdir -p private/$(APP)
	pandoc -s -i application.rst -o private/$(APP)/1-application.pdf
	cd private && pdfconcat $(APP)


