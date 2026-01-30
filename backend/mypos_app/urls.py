from django.urls import path
from .views.auth import LoginView
from .views.users import CashierDashboardView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'), 
    path('cashier/dashboard/', CashierDashboardView.as_view(), name='cashier-dashboard'),
]   