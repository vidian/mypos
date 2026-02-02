from django.urls import path
from .views import LoginView , CashierDashboardView , TestView , RefreshTokenView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'), 
    path('token/refresh/', RefreshTokenView.as_view(), name='token_refresh'),
    path('cashier/dashboard/', CashierDashboardView.as_view(), name='cashier-dashboard'),
    path('test/', TestView.as_view(), name='test'),
]   