from django.contrib import admin
from .models import Cliente

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ['nome', 'email', 'telefone', 'tp_servico', 'descricao']
    list_filter = ['tp_servico', 'data_envio']
    search_fields = ['nome', 'email', 'telefone']
    ordering = ['-data_envio']
    readonly_fields = ['data_envio']

    fieldsets = (
        ('Dados pessoais', {
            'fields': ['nome', 'email', 'telefone']
        }),
        ('Serviços', {
            'fields': ['tp_servico', 'descricao']
        }),
        ('Controle', {
            'fields': ['data_envio']
        }),
    )

