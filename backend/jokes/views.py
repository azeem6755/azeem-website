from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

# Create your views here.
def get_joke(request):
    print('Settings', settings.JOKE_APIS.get('get_joke'))
    return HttpResponse("Hello, world. You're at the polls index.")