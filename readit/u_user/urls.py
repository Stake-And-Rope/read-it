from django.urls import path
# import views
from u_user.views import show_index

urlpatterns = [
    path('', show_index),
]
