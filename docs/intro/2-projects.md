# Organización de un proyecto Django

- Un desarrollo es un Proyecto
- Un proyecto consta de una o varias aplicaciones
- Cada aplicación hace algo en concreto : Proyecto: "Comunidad web"
- **Aplicaciones**: blog, foro, registro de usuarios, tienda online, newsletter, agregador de feeds...
- Una aplicación puede ser utilizada por distintos proyectos a la vez
- Un proyecto puede hacer funcionar varios sitios web

Estructura de un proyecto Django

```
/proyecto/
    /proyecto/
        i n i t.py
        urls.py
        manage.py
        settings.py
    blog/
        i n i t
        .py
        models.py
        views.py
        urls.py
        templates/
        static/
    foro/
        i n i t .py
        models.py
        views.py
        urls.py
        templates/
```

## Archivos de una aplicación

- `init .py`
- `models.py` Contiene nuestros modelos de datos
- `views.py` Contiene las vistas de la aplicación
- `tests.py` Permite que incluyamos tests para la aplicación
- `urls.py`Es usual añadir un `urls.py` con las URLs de nuestra aplicación e importarlas en el `urls.py` del proyecto por motivos de organización.

## Instalación

    python3 -m venv venv
    pip install Django
    django-admin startproject
    pip freeze -r requirements.txt

## Desarrollo

    python manage.py runserver
    python manage.py migrate

## Apps

    django-admin startapp main
    python manage.py makemigrations

## Vistas

https://docs.djangoproject.com/en/3.1/topics/http/views/

## Modelos

https://docs.djangoproject.com/en/3.1/topics/db/models/
