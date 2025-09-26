---
name: cadastrar novo produto
title: "Cadastrar novo produto: ${{ inputs.name }}"
assignees: [github-copilot]
labels: [enhancement, produto]
description: Solicitação para cadastrar um novo produto na lista de produtos (`src/products.js`).
body:
	- type: input
		id: id
		attributes:
			label: ID do produto
			description: Informe o ID do produto (deixe em branco para gerar automaticamente)
			placeholder: Exemplo: 6
		validations:
			required: false
	- type: input
		id: name
		attributes:
			label: Nome do produto
			description: Informe o nome do produto
			placeholder: Exemplo: Moderninha Ultra
		validations:
			required: true
	- type: input
		id: price
		attributes:
			label: Preço
			description: Informe o preço do produto
			placeholder: Exemplo: 500
		validations:
			required: true

---
## Prompt para Copilot
Copilot, por favor, adicione o novo produto informado acima ao array `products` no arquivo `src/products.js`, seguindo o padrão dos demais produtos (com id, name e price).

---
> Esta issue foi criada para automatizar o cadastro de novos produtos. Ao ser atribuída ao Copilot, ele deverá realizar a tarefa conforme solicitado acima.
