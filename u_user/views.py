from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from u_user.models import User
from u_user.serializers import UserSerializer


class UserRegister(APIView):
    def get(self, req):
        users = User.objects.all()
        serializer = UserSerializer(users, many = True)
        return Response({'users':serializer.data})


def test_react_view(request):
    return render(request, 'index.html')
