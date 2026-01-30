from django.apps import AppConfig


class MyposAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'mypos_app'

    def ready(self):
        import mypos_app.models  # noqa