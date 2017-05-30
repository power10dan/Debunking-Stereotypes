from django.shortcuts import render
from django.views.generic import TemplateView


from helpWomenEngineerApp.models import StigmasFromReddit
from helpWomenEngineerApp.serializers import dataSerializer
from rest_framework import generics


# Create your views here.
class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

# Data views with dummy data; change to reddit data.
class ListJSON(generics.ListCreateAPIView):
	queryset = StigmasFromReddit.objects.all()
	serializer_class = dataSerializer
	
class findSpecificJSON(generics.RetrieveUpdateDestroyAPIView):
	queryset = StigmasFromReddit.objects.all()
	serializer_class = dataSerializer