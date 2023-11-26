from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from auth_users.managers import CustomUsersManager
from django.core.validators import MinLengthValidator, MaxLengthValidator


class ReadItUsers(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=50, unique=True, null=False, blank=False)
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = "email"
    
    objects = CustomUsersManager()
    


class UsersProfile(models.Model):
    first_name = models.CharField(null=False, blank=False)
    last_name = models.CharField(null=False, blank=False)
    username = models.CharField(null=False, blank=False, max_length=15)
    user = models.OneToOneField(to="ReadItUsers", on_delete=models.CASCADE)


# Create your models here.
