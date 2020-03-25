from django.shortcuts import render
from django.http import HttpResponse
import requests
from .models import AddMenuBar
from .models import ChangeLogo
from .models import MainTitle
from .models import Overview
from .models import Question
# Create your views here.

def home(request):
    mainT = MainTitle.objects.all()
    post = Overview.objects.all()
    logo = ChangeLogo.objects.all()
    menu = AddMenuBar.objects.all() 
    ques = Question.objects.all()

    return render(request, "index.html", {'ques':ques,'mainT': mainT ,'logo': logo , 'post' : post , 'menu' : menu})
    #return render(request, "index.html", {'main': main ,'logo': logo })
def index(request):
    r = requests.get('http://httpbin.org/status/418')
    print(r.text)
    return HttpResponse('<pre>' + r.text + '</pre>')