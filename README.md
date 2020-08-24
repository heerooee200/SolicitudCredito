# Reto React/Flask <br/>
**Contexto:** María es una profesional de las finanzas. Actualmente trabaja como líder del área de créditos y cobranzas de una prestigiosa financiera del país. María y su equipo trabajan hasta tarde pues muchas de sus labores se realizan de manera manual apoyándose en hojas de cálculo. Nuestro equipo ha sido contratado para construir una solución que le brinde agilidad a María y su equipo para que puedan aprobar más créditos, en menor tiempo pero con un nivel de calidad muy superior al actual. <br/>

**Historia de usuario:** Aprobar créditos en base a indicadores<br/>

Como María quiero poder aprobar créditos basando mi decisión en indicadores de tal manera que la calidad de las operaciones aprobadas sea la mejor y no tengamos una cartera morosa grande. <br/>

**Criterios** <br/>

Dado que mi perfil dentro del sistema me permite aprobar créditos
Cuando reciba una solicitud de aprobación de un crédito personal por un monto menor o igual a 50 mil dólares y desee saber si debo o no aprobar dicha solicitud el sistema debe permitir analizar los indicadores de este cliente. <br/>
Entonces el sistema me debe mostrar una bandeja con las solicitudes de crédito que tengo por aprobar. Por cada solicitud el sistema me debe permitir analizar el monto total de la deuda registrada por la SBS para este cliente, además me debe mostrar la puntuación del cliente como deudor a través de la central de riesgo sentinel (para este caso, este indicador puede ser bueno, regular o malo) y finalmente me debe mostrar el indicador de nuestro algoritmo de inteligencia artificial que apoya mi decisión (este indicador muestra un puntaje del 1 al 10 siendo 10 un crédito seguro y 1 un crédito a pérdida). Finalmente, debe permitirme con un botón aprobar o denegar la solicitud de crédito. <br/>

**Consideraciones:** tanto el monto total de deuda registrada en la SBS, el indicador de sentinel y el algoritmo de inteligencia artificial son ficticios. Coloca cualquier valor que le dé sentido a la historia cuando construyas el caso. <br/>
## **Api**
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
## **Frontend**
- Abrir un CMD y ubicarse en la carpeta Frontend
- Ejecutar el comando *npm install*
- Ejecutar el comando *npm start*
- Dirigir se en el navegador a *http://localhost:3000/*
