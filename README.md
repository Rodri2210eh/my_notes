# 🐱‍🏍🐱‍👤🐱‍💻 my_notes
## 🚀 Como ejecutarlo en local

Necesitarás tener instalado ``` node.js ```, ```mongoDB```, ```github``` y tener acceso a una terminal para seguir los siguientes pasos:
>
### 🐱‍👓Levantar el servidor
>
1. Necesitamos clonar el proyecto añadiendo la siguiente linea de comando en una terminal
```
git clone https://github.com/Rodri2210eh/my_notes.git
```
>
2. Entramos a la carpeta que acabamos de clonar e instalamos las dependencias necesarias
```
npm install
```
>
3. Debes levantar tu base de datos y añadir las credenciales en la carpeta ```src```, en un archivo que llamaras ```config.js```, como se indica en el siguiente ejemplo.
```
export const SECRET_KEY = "password_of_your_DB";
```
recorda que debes llamar a la base de datos ```my_notes``` o cambiarle el nombre en el archivo ```src/database.js```
>
4. Ejecutamos nuestro proyecto en local
```
npm run dev
```
con esto habriamos levantado el servidor
>
### 🐱‍🚀Levantar frontend
>
1. Ingresar a la carpeta client dentro de nuestro proyecto
>
2. Instalamos las dependencias necesarias
```
npm install
```
>
3. Ejecutamos nuestro proyecto en local
```
npm run dev
```
>
En la terminar se le mostrara la direccion del frontend por defecto es ```http://localhost:5173```
