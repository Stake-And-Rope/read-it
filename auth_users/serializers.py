from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from auth_users.models import ReadItUsers, UsersProfile
from django.contrib.auth.hashers import make_password

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersProfile
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    user_profile = UserProfileSerializer(required = True, source = 'user')
    print(user_profile)
    
    class Meta:
        model = ReadItUsers
        fields = ('email', 'password', 'user_profile')
        
        
    def create(self, validated_data):
        print(validated_data)
        new_user = ReadItUsers.objects.create(
            password = make_password(validated_data["password"]),
            email=validated_data["email"]
        )
        new_user_profile = UsersProfile.objects.create(
            username = validated_data['username'],
            first_name = validated_data['first name'],
            last_name = validated_data['last name'],
            user = new_user
        )
        
        return new_user

