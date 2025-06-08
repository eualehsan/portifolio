from django.db import models

class Servico(models.TextChoices):
    LANDING_PAGE = 'landing page', 'Landing page'
    SITE_INSTITUCIONAL = 'site institucional', 'Site institucional'
    SITE_ESTATICO = 'site estatico', 'Site estático'
    OUTRO = 'outro', 'Outro'

class Cliente(models.Model):
    nome = models.CharField(max_length=255, blank=False, null=False)
    email = models.CharField(max_length=255, blank=False, null=False)
    telefone = models.CharField(max_length=20, blank=False, null=False)
    tp_servico = models.CharField(
        max_length=18,
        choices=Servico.choices,
        verbose_name="tipo de servico"
    )
    descricao = models.TextField(blank=True)
    data_envio = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nome} - {self.get_tp_servico_display()}"

