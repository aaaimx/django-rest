# Introducción

## Arquitectura básica​

Una API de DRF se compone de 3 capas: el serializador, el conjunto de vistas y el enrutador.​

- **Serializer** → representación de datos (`serializers.py`): convierte los datos del modelo en una representación JSON​
- **Viewsets** → vistas de datos (`views.py`): lógica de negocio, relativo a la ruta y el método HTTP​
- **Router** → Endpoints (`urls.py`): ruta del recurso base.

## Core

- **decorators**
- **permissions**
- **renderers**
- **responses**
- **status**

## [Instalación](https://www.django-rest-framework.org/#installation)

    $ pip install djangorestframework markdown

```py
# settings.py

INSTALLED_APPS = (
    ...
    'rest_framework'
)

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated'
    ],
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.SessionAuthentication",
        "rest_framework.authentication.BasicAuthentication"
    )
}
```