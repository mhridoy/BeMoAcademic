from django.contrib import admin
# Need to import this since auth models get registered on import.
import django.contrib.auth.admin
import django.contrib.auth.models
from django.contrib import auth
from .models import AddMenuBar
from .models import Overview
from .models import ChangeLogo
from .models import MainTitle
from .models import Question

# Remove Group 
# admin.site.unregister(auth.models.User)
admin.site.unregister(auth.models.Group)

## Admin Header :

admin.site.site_header = 'CDA Admin Panel'

admin.site.register(AddMenuBar)
admin.site.register(Overview)
admin.site.register(ChangeLogo)
admin.site.register(MainTitle)
admin.site.register(Question)

## Customize the Admin Panel 


# Register your models here.
