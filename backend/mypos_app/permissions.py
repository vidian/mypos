from rest_framework.permissions import BasePermission

class IsMaster(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.userprofile.role == "master"
        )


class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.userprofile.role in ["master", "admin"]
        )


class IsCashier(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.userprofile.role in ["master", "admin", "cashier"]
        )
