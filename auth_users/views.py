from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from auth_users.models import ReadItUsers, UsersProfile
from auth_users.serializers import UserSerializer
from django.contrib.auth.hashers import make_password, check_password

class UserRegister(ListCreateAPIView):
    # def get(self, req):
    #     users = ReadItUsers.objects.all()
    #     serializer = UserSerializer(users, many = True)
    #     return Response({'users':serializer.data})

    # def post(self, req):
    #     # data = req.data
    #     serializer = UserSerializer(data = req.data, many=False)
    #     # new_user = ReadItUsers.objects.create(
    #     #     email=data["email"],
    #     #     password=make_password(data["password"])
    #     # )
        
    #     # new_user_profile = UsersProfile.objects.create(
    #     #     username = data['username'],
    #     #     first_name = data['first name'],
    #     #     last_name = data['last name'],
    #     #     user = new_user
    #     # )
        
    #     # print(serializer.__dict__)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status = status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    queryset = ReadItUsers.objects.all()
    serializer_class = UserSerializer
        


def test_react_view(request):
    return render(request, 'index.html')


# @api_view(["POST"])
# def create_new_user(request):
#     data = request.data
#     print(data)

#     new_user = ReadItUsers.objects.create(
#         email=data["email"],
#         password=make_password(data["password"])
#     )
    
#     new_user_profile = UsersProfile.objects.create(
#         username = data['username'],
#         first_name = data['first name'],
#         last_name = data['last name'],
#         user = new_user
#     )


#     serializer = UserSerializer(new_user, new_user_profile, many=False)

#     return Response(serializer.data)