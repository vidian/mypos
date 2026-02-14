from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class LoginSerializer(TokenObtainPairSerializer):
    def validate(cls, attrs):
        data = super().validate(attrs)
        data["role"]= cls.user.userprofile.role
        return data