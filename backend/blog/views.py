from rest_framework import mixins, permissions, viewsets
from rest_framework.response import Response

from blog.models import Author, Post
from blog.serializers import AuthorSerializer, PostSerializer


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

