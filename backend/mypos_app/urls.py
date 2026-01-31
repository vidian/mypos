from django.urls import path
from .views import LoginView , CashierDashboardView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'), 
    path('cashier/dashboard/', CashierDashboardView.as_view(), name='cashier-dashboard'),
]   