from django.conf.urls import url
from helpWomenEngineerApp import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
    url(r'^helpWomenEngineerApp/(?P<pk>[0-9]+)$',views.findSpecificJSON.as_view()),
    url(r'^helpWomenEngineerApp/$', views.ListJSON.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)