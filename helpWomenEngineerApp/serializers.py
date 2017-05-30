from rest_framework import serializers
from helpWomenEngineerApp.models import StigmasFromReddit

class dataSerializer(serializers.ModelSerializer):
	class Meta:
		model = StigmasFromReddit
		fields = ('id', 'title', 'code', 'linenos', 'language', 'style')

