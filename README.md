**Api**
- En el explorador de archivos dirigirse a *Api/api/config*
- Abrir el archivo *default.py*
- En la 6 linea de codigo se encuentra la variable *SQLALCHEMY_DATABASE_URI* la cual debe ser remplazado con las credenciales de su base de datos usando el siguiente formato 'postgresql://{user}:{pass}@{servername o por defecto localhost}:{puerto}/{nombre de la base de datos}'
- Abrir un CMD y ubicarse en la carpeta *Api/api*
- Ejecutar el comando *pip install virtualenv*
- Ejecutar el comando *virtualenv .*
- Ejecutar el comando *Scripts\activate*
- Ejecutar el comando *pip install -r requirements.txt*
- Ejecutar el comando *flask db init*
- Ejecutar el comando *flask db migrate -m "Initial_db"*
- Ejecutar el comando *flask db upgrade*
- Ejecutar el comando *flask run*
**Frontend**
- Abrir un CMD y ubicarse en la carpeta Frontend
- Ejecutar el comando *npm install*
- Ejecutar el comando *npm start*
- Dirigir se en el navegador a *http://localhost:3000/*