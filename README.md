# Introdução

Este projeto foi desenvolvido como parte do trabalho final da disciplina de Desenvolvimento Backend, com o objetivo de construir uma API RESTful robusta, modular e segura, utilizando a stack Node.js com JavaScript, integrada a um banco de dados relacional MySQL, com mapeamento de dados feito por meio do TypeORM/Sequelize.

A API oferece um sistema completo com múltiplas funcionalidades, que vai além da simples autenticação de usuários. Entre os principais recursos, destacam-se: autenticação com JWT, criptografia de senhas com bcrypt, cadastro e gerenciamento de entidades, relacionamentos entre tabelas, além de uma documentação interativa com Swagger.

O sistema foi projetado para refletir a estrutura de um backend de aplicação real, com foco em organização de código, segurança, modularidade e facilidade de escalabilidade.

# Tecnologias Utilizadas

Tecnologia | Descrição | Necessidade
--- | --- | ---
Node.js | Ambiente de execução de JavaScript no servidor | Obrigatório
Express.js | Framework web para APIs RESTful | Obrigatório
MySQL | Banco de dados relacional | Obrigatório
TypeORM/Sequelize | ORM para abstração e manipulação de dados | Obrigatório
bcryptjs | Criptografia de senhas | Obrigatório
JWT | Autenticação com tokens seguros | Obrigatório
dotenv | Gerenciamento de variáveis de ambiente | Opcional
Swagger | Documentação interativa da API | Obrigatório
Nodemon | Reinicialização automática em desenvolvimento | Opcional

# Estrutura do Projeto

O projeto foi estruturado com base em boas práticas e separação de responsabilidades:

```
/src
 ├── config/               # Configurações do projeto (DB, .env, etc.)
 ├── controllers/          # Lógica de controle de cada rota
 ├── models/               # Entidades do TypeORM/Sequelize (tabelas do banco)
 ├── middlewares/          # Autenticação, erros, logs
 ├── routes/               # Rotas da API agrupadas por módulo
 ├── services/             # Lógica de negócio (se necessário)
 ├── docs/                 # Documentação Swagger
 ├── utils/                # Funções auxiliares (se necessário)
 ├── app.js                # Inicialização do Express (se necessário)
 └── server.js             # Inicialização do servidor
```

# Funcionalidades Implementadas

O sistema oferece suporte a diversas funcionalidades, organizadas em módulos.

## Autenticação e Usuários

* Cadastro de usuário com hash de senha
* Login com geração de JWT
* Middleware de verificação de token
* Atualização de perfil
* Exclusão de conta
* Consulta de perfil autenticado

## Gestão de Produtos

* Cadastro de produtos com nome, descrição, preço e quantidade de estoque
* Listagem geral e individual de produtos
* Atualização e exclusão de produtos
* Relacionamento com categorias (1:N)

## Categorias de Produto

* Criação de categorias
* Listagem de todas as categorias
* Associação de produtos a uma categoria
* Atualização e exclusão de categorias (com checagem de produtos associados)

## Pedidos

* Criação de pedidos por usuários autenticados
* Cada pedido pode conter múltiplos produtos
* Relacionamento N:N com tabela intermediária
* Consulta de pedidos por usuário e por ID
* Cancelamento de pedidos

# Relacionamentos no Banco

* Usuário 1:N Pedidos
* Produto N:1 Categoria
* Pedido N:N Produtos

## Usuário (/user)

* id: number
* name: string
* email: string
* password: string

## Categoria (/category)

* id: number
* name: string

## Produto (/product)

* id: number
* name: string
* price: number
* categoryId: number

## Pedido (/order)

* id: number
* userId: number
* products: Product[]

# Autenticação com JWT e Hash de Senhas

* No registro, a senha é criptografada usando `bcryptjs`.
* No login, a senha é comparada via `bcrypt.compare`.
* Um token JWT é assinado e enviado ao cliente.
* O token é validado em middleware antes de acessar rotas protegidas.

# Documentação da API com Swagger

A documentação pode ser criada com `swagger-jsdoc` e `swagger-ui-express` ou, ainda, de forma manual.

#  Segurança e Boas Práticas

* Todas as senhas são criptografadas.
* A autenticação é stateless, com tokens armazenados apenas no cliente.
* As variáveis sensíveis estão no .env (como chaves JWT e dados do banco) (OPCIONAL).
* O acesso a dados sensíveis está protegido por middlewares.
* Estruture corretamente as rotas (`/api/`) e também os retornos e status.

# Instalações necessárias:

* npm install express 
* npm install sequelize 
* npm install pg 
* npm install pg-hstore 
* npm install bcrypt 
* npm install jsonwebtoken 
* npm install dotenv 
* npm install cors 
* npm install mysql2 
* npm install mongoose
* npm install swagger-ui-express yamljs
