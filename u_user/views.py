from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from u_user.models import NewUser
from u_user.serializers import UserSerializer


class UserRegister(APIView):
    def get(self, req):
        users = NewUser.objects.all()
        serializer = UserSerializer(users, many = True)
        return Response({'users':serializer.data})


def test_react_view(request):
    return render(request, 'index.html')

@api_view(["POST"])
def create_new_user(request):
    data = request.data
    print(data)
    
    new_user = NewUser.objects.create(
        first_name=data["first name"],
        last_name=data["last name"],
        email=data["email"],
        password=data["password"]
    )

    serializer = UserSerializer(new_user, many=False)

    return Response(serializer.data)