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
/proyecto/
    /proyecto/
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
    pip freeze -r requirements.txt

## Desarrollo

    python manage.py runserver
    python manage.py migrate # solo una vez

## Apps

    django-admin startapp main
    python manage.py makemigrations

## Vistas

https://docs.djangoproject.com/en/3.1/topics/http/views/

## Modelos

https://docs.djangoproject.com/en/3.1/topics/db/models/

### ORM

```py
from .models import MyModel

MyModel.objects.all()
MyModel.objects.filter()
MyModel.objects.get()
MyModel.objects.create()
```

### CRUD

```py
from .models import MyModel

# Create
instance = MyModel.objects.create(foo='bar')
instance.save()

# Read
MyModel.objects.all()
MyModel.objects.filter()
MyModel.objects.get()

# Update
instance = MyModel.objects.get(pk=1)
instance.bar = 'foo'
instance.save()

# Delete
instance = MyModel.objects.get(pk=1)
instance.delete()
```

### [QuerySet](https://docs.djangoproject.com/en/3.1/ref/models/querysets/)

Una **queryset** es el resultado de aplicar acciones de lectura del ORM especificmente usando los metodos `all()` y/o `filter()` estos metodos siempre devolveran una queryset en la cual disponemos de ciertas acciones del mismo ORM.

```py

queryset = MyModel.objects.all() # todos los registros de la tabla
queryset = MyModel.objects.filter() # obtener algunos registros aplicando un filtro

queryset = queryset.order_by('foo') # ASC
queryset = queryset.order_by('-foo') # DESC

```

### Filtros avanzados

```py
# filtering instances
queryset = Post.objects.filter(title__icontains='Trump')
queryset = Post.objects.filter(some_integer_field__lte=1)
queryset = Post.objects.filter(some_integer_field__gte=1, title="Pepe")
queryset = Post.objects.filter(created_at__range=['2020-01-01', '2020-01-02'])
queryset = Post.objects.filter(created_at='2020-01-01')
...
```

### Assignments

- 10 Examples of ORM Create
- 10 Examples of ORM List/Filter/Order
- 5 Examples of ORM Get
- 5 Examples of ORM Update/Partial
- 5 Examples of ORM Delete

## Admin
