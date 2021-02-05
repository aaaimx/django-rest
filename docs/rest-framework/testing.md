# Testing

```py
from datetime import datetime
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import Group
from .models import User, Division

class AAAIMXTests(APITestCase):
    def setUp(self):
        # create groups
        leader_group = Group.objects.create(name='Leader')
        # TODO: create Guest group

        # create divisions
        software = Division.objects.create(name='Software')
        # TODO: create more divisions

        # create users
        admin_user = User.objects.create(
            email= 'raul.novelo@aaaimx.org',
            username= 'rnovec98',
            first_name='Raul',
            last_name='Novelo',
            division=software,
            birthdate= datetime.now()
        )
        admin_user.groups.add(leader_group)
        admin_user.save()

        # TODO: create more users...

    def test_something(self):
        pass

```