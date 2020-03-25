from django.apps import AppConfig

from suit.apps import DjangoSuitConfig

class SuitConfig(DjangoSuitConfig):
    layout = 'horizontal'
    

class CdaConfig(AppConfig):
    name = 'CDA'
