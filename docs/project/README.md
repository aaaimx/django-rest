# Django REST API (AAAIMX)

API para gestion de miembros (usuarios) y divisiones del Capítulo AAAIMX

## Modelos

### Division

- id (default)
- name
- logo
- fanpage

### User

- id (UUID)
- username
- email
- division (solo puede pertenecer a una Division)
- birthdate (Fecha)

## API

- Debe soportar autenticacion JWT
- Documentación con Swagger
- Acceso limitado de dominios (CORS)
- Debe soportar dos ambientes DEV y PROD
- Utilizar TDD (Test Development Driven)

### Auth Endpoints

- **POST** /api/auth/login/
- **GET** /api/auth/groups/ Listar todos los Grupos de autenticacion (Roles) sin paginación.
  - **Leader**: Acceso completo al CRUD de Usuario en su división y RU Division
  - **Guest**: Acceso de lectura en su division.
  - **User**: RU su propio usuario

### User Endpoints

- **GET** /api/users/ Debe listar todos los usuarios de una division si el usuario es `Leader` o `Guest`.

  - Retornar todos los campos de Usuario.
  - Busqueda por name, email.
  - Todos los campos deben poder filtrarse.
  - Todos los campos deben poder ordenarse
  - Orden por defecto por fecha de creación (`date_joined`)

- **GET** /api/users/{id}/ Obtener información de Usuario

  - Debe incluir solo los campos:
    - id
    - username
    - email
    - division: (`id`, `name`)
    - birthdate

- **POST** /api/users/ Crear un usuario para la Division
  - Se debe establacer la contraseña
  - Solo usuarios con rol `Leader` tienen acceso.
- **PATCH** /api/users/{id} Actualizar información del usuario
  - Usuario con rol `Leader` de la division.
  - Usuario propietario del recurso
- **DELETE** /api/users/{id} Eliminar usuario
  - Solo si el usuario es `Leader` de la division

### Division Endpoints

- **GET** /api/divisions/ Listar divsiones si el usuario es Administrator (`is_superuser=True` o `is_staff=True`)
- **GET** /api/divisions/{id}/ Información de la Division
  - Solo si el usuario es `Leader` o `Guest` de la division.
- **PATCH** /api/divisions/{id} Actualizar division
  - Solo si el usuario es `Leader` de la division.
- **GET** /api/division/{id}/users/ Listar todos los usuarios de la division
  - Si el usuario es `Leader` o `Guest`.
  - Debe retornar solo `id` y `username` del usuario

### Other Endpoints

- **GET** /api/info/ Información general del usuario y la aplicación
  - Debe retornar:
  - `id`
  - `username`
  - `division_name`
  - `public_ip`: IP publica del servidor
