from django.conf.urls import url
from helpWomenEngineerApp import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
]