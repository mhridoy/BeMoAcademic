from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.


class AddMenuBar(models.Model):
    name = models.CharField(max_length=100)
    font_size = models.IntegerField()

    def __str__(self):
        return self.name

class ChangeLogo(models.Model):
    img = models.ImageField(upload_to='pics')

  


class Overview(models.Model):
    title = models.CharField(max_length=255)
    Des   = RichTextUploadingField(blank=True,null=True)

    def __str__(self):
        return self.title

class MainTitle(models.Model):
    name = RichTextUploadingField(blank=True,null=True)

    def __str__(self):
        return self.name
class Question(models.Model):
    title = RichTextUploadingField(blank=True,null=True)
    body = RichTextUploadingField(blank=True,null=True)
    date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
    def snippet(self):
        return self.body[:200]