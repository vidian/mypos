from rest_framework_simplejwt.views import TokenObtainPairView
from mypos_app.serializers import LoginSerializer

# Create your views here.
class LoginView(TokenObtainPairView):
    serializer_class = LoginSerializer