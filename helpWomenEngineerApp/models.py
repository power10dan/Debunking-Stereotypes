from django.db import models
# JSON model for our web app. The fields 
# represent the dataset that are already
# cleaned by our python data parser and
# machine learning model.
class StigmasFromReddit(models.Model):
	DateOfCreation = models.DateTimeField(auto_now_add=True)
	subReddit = models.CharField(max_length=100, blank=True, default='')
	message = models.TextField()
	
	

