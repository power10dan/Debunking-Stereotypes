# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-06 03:31
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('helpWomenEngineerApp', '0002_auto_20170529_1858'),
    ]

    operations = [
        migrations.RenameField(
            model_name='stigmasfromreddit',
            old_name='created',
            new_name='DateOfCreation',
        ),
        migrations.RenameField(
            model_name='stigmasfromreddit',
            old_name='code',
            new_name='message',
        ),
        migrations.RenameField(
            model_name='stigmasfromreddit',
            old_name='title',
            new_name='subReddit',
        ),
        migrations.RemoveField(
            model_name='stigmasfromreddit',
            name='language',
        ),
        migrations.RemoveField(
            model_name='stigmasfromreddit',
            name='linenos',
        ),
        migrations.RemoveField(
            model_name='stigmasfromreddit',
            name='style',
        ),
    ]
