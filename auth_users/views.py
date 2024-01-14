from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework import status
from auth_users.models import ReadItUsers
from auth_users.serializers import UserSerializer, UserProfileSerializer, LoginUserSerializer
from django.contrib.auth import login

class UserRegister(ListCreateAPIView):
    def get(self, _):
        users = ReadItUsers.objects.all()
        serializer = UserSerializer(users, many = True)
        return Response({'users':serializer.data})

    def post(self, req):
        data = req.data
        serializer = UserProfileSerializer(data={
            "user": data,
            **data
            })

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        
        print(f"Errors: {serializer.errors}")
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    serializer_class = UserProfileSerializer


class UserLogin(APIView):
    def post(self, req):
        data = req.data
        serializer = LoginUserSerializer(data=data, context={'request': req})

        if serializer.is_valid():
            user = serializer.validated_data['user']

            login(req, user)

            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)

    serializer_class = LoginUserSerializer

def test_react_view(request):
    return render(request, 'index.html')
