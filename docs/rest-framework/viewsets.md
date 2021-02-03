# [Viewsets](https://www.django-rest-framework.org/api-guide/viewsets/)

## Model Viewsets

```py
from django.http import JsonResponse​

def example(request, *args, **kwargs):​
        return JsonResponse({ "foo": "bar" })

```

### Un ejemplo sin DRF

```py
from rest_framework import viewsets​
from .models import MyModel

class MyModelViewSet(viewesets.ModelViewSet):​

    def list(self, request):​
        ...​

    def retrieve(self, request):​
        ...​

    def create(self, request):​
        ...​

    def update(self, request):​
        ...

    def partial_update(self, request):​
        ...

    def remove(self, request):​
        ...
```

- [Mixins]()
- [Generic Views]()
- [Custom actions]()
- [Params]()
- [Steps](https://github.com/encode/django-rest-framework/blob/master/rest_framework/viewsets.py)
- [Filters](https://pypi.org/project/django-filter/)
