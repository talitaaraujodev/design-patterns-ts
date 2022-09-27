# Prototype - Creational (Criação)

## Intenção

_Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo._

## Aplicabilidade

Use o Prototype quando:

- precisar que seu código não dependa de classes concretas para a criação de novos objetos
- quiser evitar explosão de subclasses para objetos muito similares
- quiser evitar a recriação de objetos "caros" ou "complexos"

## Consequências

O que é bom ou ruim no Prototype:

**Bom:**

- Oculta classes concretas do código cliente
- Ajuda na criação de objetos caros ou complexos
- Evita a explosão de subclasses

**Ruim:**

- Clonar objetos que que tem referências para outros objetos pode ser super complexo
