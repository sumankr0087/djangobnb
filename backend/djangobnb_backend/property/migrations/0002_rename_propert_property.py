# Generated by Django 4.2.11 on 2024-04-21 00:42

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('property', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Propert',
            new_name='Property',
        ),
    ]