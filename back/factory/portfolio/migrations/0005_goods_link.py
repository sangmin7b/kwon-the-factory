# Generated by Django 3.1.2 on 2021-01-13 03:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_remove_goods_thumbnail'),
    ]

    operations = [
        migrations.AddField(
            model_name='goods',
            name='link',
            field=models.CharField(blank=True, default='https://smartstore.naver.com/kwonthefactory', max_length=100),
        ),
    ]