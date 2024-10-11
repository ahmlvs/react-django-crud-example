# react-django-crud-example

Simple website where you can manipulate with books. Add new book, change or delete book.
Aim to create basic client-server app with React frontend and Django backend.

## client (FE, React)
create vite and react with name "client", JavaScript
```
npm create vite@latest
cd client
npm install
npm run dev
```

## server (BE, python django)
django-rest-api/baseapi logic

0. move to server folder
```
cd server
```

1. create venv in terminal
```
python3 -m venv ~/.venvs/django-rest-api
source ~/.venvs/django-rest-api/bin/activate
```

2. install python or check it
```
python3 --version
```

3. install libraries
```
pip install django djangorestframework
```

4. use django to start a project with name "baseapi"
```
django-admin startproject baseapi
```

5. create api inside baseapi project
```
cd baseapi
python3 manage.py startapp api
```

6. add api in INSTALLED_APPS in setting.py
```
"rest_framework",
"api",
```

7. after can start create models, url, etc.

------

we will create simple api for users creation, update and delete.

1. define Book in api/models

2. create db from our models
```
python3 manage.py makemigrations
python3 manage.py migrate
```

3. create serializer that transform model to json data in api

4. create views for api

5. add views to api/urls

6. add api/urls to baseapi/urls

7. start server
```
python3 manage.py runserver
```
