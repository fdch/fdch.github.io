APP = camara-llorens-application

all:
	pandoc -s -i presentation.rst -o index.html

apptext:
	cd private && pandoc -s -i application.rst -o $(APP)/9-application.pdf

app:
	mkdir -p private/$(APP)
	make apptext
	cd private && pdfconcat $(APP)

redirect:
	echo "<meta http-equiv=\"refresh\" content=\"0; url=https://fdch.github.io/\" />" > index.html 


