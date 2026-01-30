from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from mypos_app.permissions import IsCashier

class CashierDashboardView(APIView):
    permission_classes = [IsAuthenticated, IsCashier]

    def get(self, request):
        return Response({
            "message": "Halo kasir",
            "role": request.user.userprofile.role
        })
