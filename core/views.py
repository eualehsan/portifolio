from django.shortcuts import render, redirect
from clientes.models import Cliente
from clientes.forms import ClienteForm

def home(request):
    form = ClienteForm()
    if request.method == 'POST':
        form = ClienteForm(request.POST)
        if form.is_valid():
            form.save()
        return render(request, 'index.html', {
            'form': ClienteForm, 
            'mensagem': 'Dados enviados com sucesso!'
        })
    return render(request, 'index.html', {'form': form}) 