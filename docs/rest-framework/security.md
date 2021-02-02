# JSON Web Tokens

- [Simple JWT Tokens](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)

## Custom claims

### Permisos

```py
class BasePermission(object):
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
    Return `True` if permission is granted, `False` otherwise.
    """
    return True
```

### Refresh token

## CORS Headers

https://pypi.org/project/django-cors-headers/
https://pypi.org/project/django-rest-registration/
