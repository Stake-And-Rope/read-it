from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from auth_users.models import ReadItUsers, UsersProfile
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReadItUsers
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    
    class Meta:
        model = UsersProfile
        fields = ('user', 'username', 'first_name', 'last_name')
        
        
    def create(self, validated_data):
        print(validated_data)
        readit_user_data = validated_data.pop("user")
        new_user = ReadItUsers.objects.create(
            password = make_password(readit_user_data["password"]),
            email=readit_user_data["email"]
        )

        new_user_profile = UsersProfile.objects.create(
            username = validated_data['username'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            user = new_user
        )
        
        return new_user_profile

