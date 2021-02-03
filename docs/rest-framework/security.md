# Security

## Permisos

```py
from restframework.permissions import BasePermission

class BasePermission(BasePermission):
    """
    A base class from which all permission classes should inherit.
    """
    def has_permission(self, request, view):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        return True

    def has_object_permission(self, request, view, obj):
        """
        Return `True` if `has_permission` is `True` and object permission is granted, `False` otherwise.
        """
        return True
```

## [Simple JWT Tokens](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)

```py
import datetime

REST_FRAMEWORK = {
    ...
    "DEFAULT_AUTHENTICATION_CLASSES": (
        ...
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': datetime.timedelta(minutes=15),
    'REFRESH_TOKEN_LIFETIME': datetime.timedelta(hours=1),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'id'
}
```

## [CORS Headers](https://pypi.org/project/django-cors-headers/)

    $ pip install django-cors-headers

```py

MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',  # django-cors-headers middleware
    'django.middleware.common.CommonMiddleware',
    ...
]

CORS_ORIGIN_WHITELIST = os.environ.get("DJANGO_ALLOWED_ORIGINS").split(' ')
CORS_ALLOW_ORIGINS_ALL = True

CORS_ALLOW_CREDENTIALS = True
```
