from django.shortcuts import render


def test_react_view(request):
    return render(request, 'index.html')
