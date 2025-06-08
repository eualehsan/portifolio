from django import forms
from .models import Cliente

class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = ['nome', 'email', 'telefone', 'tp_servico', 'descricao']
        widgets = {
            'nome': forms.TextInput(attrs={'id': 'name'}),
            'email': forms.EmailInput(attrs={'id': 'email'}),
            'telefone': forms.TextInput(attrs={'id': 'email'}),
            'tp_servico': forms.Select(attrs={'id': 'tipo-de-servico'}),
            'descricao': forms.Textarea(attrs={'id': 'descricao-de-servico'})
        }