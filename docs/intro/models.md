# [Modelos](https://docs.djangoproject.com/en/3.1/topics/db/models/)

```py
from django.db import models

class MyModel(models.Model):
    ...
```

## ORM

```py
from .models import MyModel

MyModel.objects.all()
MyModel.objects.filter()
MyModel.objects.get()
MyModel.objects.create()
```

## CRUD

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

## [QuerySet](https://docs.djangoproject.com/en/3.1/ref/models/querysets/)

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

## Tarea

- 10 Examples of ORM Create
- 10 Examples of ORM List/Filter/Order
- 5 Examples of ORM Get
- 5 Examples of ORM Update/Partial
- 5 Examples of ORM Delete

## [Relaciones](https://docs.djangoproject.com/en/3.1/topics/db/models/#relationships)

## Admin

```py
# accounts/admin.py
from django.contrib import admin
from .models import MyModel

class MyModelAdmin(admin.AdminModel):
    model = MyModel
    list_display = []

admin.site.register(MyModelAdmin)

@admin.register(User)
class MyModelAdmin(admin.AdminModel):
    model = MyModel
    list_display = []

```

## [Vistas](https://docs.djangoproject.com/en/3.1/topics/http/views/)

```py
from django.shortcuts import render

def home(request):
    # ...
    # Respuesta con template y contexto
    return render(request, 'index.html', { "foo": "bar" })
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>{{ foo }}</h1>
  </body>
</html>
```

## Response

```py
from django.http import HttpResponse, JsonResponse​

def example_http(request):
    # ...
    # Respuesta con HTML string
    return HttpResponse('<h1/>Hello!!!</h1>')

def example_json(request):​
    # ...
    # Respuesta con JSON
    return JsonResponse({ "foo": "bar" })
```
