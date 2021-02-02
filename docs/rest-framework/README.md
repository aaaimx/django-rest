# REST Framework

## Arquitectura básica​

Una API de DRF se compone de 3 capas: el serializador, el conjunto de vistas y el enrutador.​

- **Serializer** → representación de datos (`serializers.py`): convierte los datos del modelo en una representación JSON​
- **Viewsets** → vistas de datos (`views.py`): lógica de negocio, relativo a la ruta y el método HTTP​
- **Router** → Endpoints (`urls.py`): ruta del recurso base.

## Core

- **decorators**: Autenticación de usuarios.​
- **permission**: Sitio de administración CRUD.
- **renderers**: Mensajes de aviso para usuarios.
- **status**: Gestión de sesiones.

## [Instalación](https://www.django-rest-framework.org/#installation)
