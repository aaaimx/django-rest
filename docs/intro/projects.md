# Organización de un proyecto Django

- Un desarrollo es un **Proyecto**
- Un **proyecto** consta de una o varias **aplicaciones**
- Cada aplicación hace algo en concreto
- **Proyecto**: "Comunidad web"
- **Aplicaciones**: blog, foro, registro de usuarios, tienda online, newsletter, agregador de feeds...
- Una aplicación puede ser utilizada por distintos proyectos a la vez
- Un **proyecto** puede hacer funcionar varios sitios web

Estructura de un proyecto Django

```
/project/
    /project/
        __init__.py
        urls.py
        manage.py
        settings.py
    blog/
        __init__.py
        models.py
        views.py
        urls.py
        templates/
        static/
    foro/
        __init__.py
        models.py
        views.py
        urls.py
        templates/
```

## Archivos de una aplicación

- `__init__.py`
- `models.py` Contiene nuestros modelos de datos
- `views.py` Contiene las vistas de la aplicación
- `tests.py` Permite que incluyamos tests para la aplicación
- `urls.py`Es usual añadir un `urls.py` con las URLs de nuestra aplicación e importarlas en el `urls.py` del proyecto por motivos de organización.

## Instalación

    python3 -m venv venv
    source venv/bin/activate # ./venv/Scripts/activate
    pip install Django
    django-admin startproject

## Desarrollo

    python manage.py runserver
    python manage.py migrate

## Apps

    django-admin startapp main
    python manage.py makemigrations
    python manage.py migrate
