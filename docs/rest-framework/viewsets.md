

## [Viewsets](https://www.django-rest-framework.org/api-guide/viewsets/)

### Model Viewsets

### Un ejemplo sin DRF

```py
from django.http import JsonResponse​

def example(request, *args, **kwargs):​
        return JsonResponse({ "foo": "bar" })

```

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
- [Steps]()
- [Filters](https://pypi.org/project/django-filter/)
