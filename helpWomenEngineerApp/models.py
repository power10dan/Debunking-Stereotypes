from django.db import models
 
# JSON model for our web app. The fields 
# represent the dataset that are already
# cleaned by our python data parser and
# machine learning model.
class StigmasFromReddit(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	title = models.CharField(max_length=100, blank=True, default='')
	code = models.TextField()
	linenos = models.BooleanField(default=False)
	language = models.CharField(default='python', max_length=100)
	style = models.CharField(default='friendly', max_length=100)

