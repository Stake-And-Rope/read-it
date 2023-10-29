from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=50, default = 'user@example.com')
    password = models.CharField(max_length=30, default = 'password123')
    # registration_date = models.DateField(default = '')
    
    

# Create your models here.
