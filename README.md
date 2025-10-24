# Instruções de Configuração

## Frontend (Angular)

### Pré-requisitos
- Node.js 18+
- npm

### Configuração

1. Navegue até o diretório:
```bash
cd tech-solutio-basic-inventory-ui
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

O frontend será executado em `http://localhost:4200`

## Estrutura do Projeto

### Frontend
```
src/app/
├── components/
│   ├── product-list/
│   ├── product-form/
│   └── stock-check/
├── services/
│   └── product.service.ts
├── models/
│   └── product.model.ts
├── app.component.ts
├── app.routes.ts
└── app.config.ts
```