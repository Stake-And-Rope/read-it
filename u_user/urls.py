from django.urls import path
from u_user import views

urlpatterns = (
    path('register/', views.test_react_view),
    path('login/', views.test_react_view),
    path('users/', views.test_react_view),
    path('some_users/', views.UserRegister.as_view()),
    path('create_new_user', views.create_new_user)
)
