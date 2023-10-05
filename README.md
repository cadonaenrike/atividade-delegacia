# Atividade Delegacia

Este é um projeto de exemplo para uma aplicação de delegacia fictícia, desenvolvida em Node.js usando Express.js e Prisma ORM. O projeto permite a criação, listagem, atualização e exclusão de criminosos, crimes e armas em um banco de dados.

## Pré-requisitos

- Node.js (v14 ou superior)
- Banco de dados PostgreSQL
- Prisma CLI (instalado globalmente)

## Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL.
2. Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente relacionadas ao banco de dados.

Exemplo do arquivo `.env`:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome-do-banco
```

3. Execute as migrações do Prisma para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/cadonaenrike/atividade-delegacia.git
cd atividade-delegacia
```

2. Instale as dependências:

```bash
npm install
```

## Uso

1. Inicie o servidor:

```bash
npm start
```

2. Acesse as rotas da API:

### Criminosos

- **Listar todos os criminosos:**
  - Método: GET
  - Rota: `/criminosos`

- **Cadastrar um novo criminoso:**
  - Método: POST
  - Rota: `/criminosos`
  - Exemplo de corpo da requisição:
    ```json
    {
      "nomeCompleto": "João Silva",
      "cpf": "123.456.789-00"
    }
    ```

- **Obter um criminoso por ID:**
  - Método: GET
  - Rota: `/criminosos/:id`

- **Atualizar um criminoso por ID:**
  - Método: PUT
  - Rota: `/criminosos/:id`
  - Exemplo de corpo da requisição:
    ```json
    {
      "nomeCompleto": "João da Silva"
    }
    ```

- **Excluir um criminoso por ID:**
  - Método: DELETE
  - Rota: `/criminosos/:id`

### Crimes

- **Listar todos os crimes:**
  - Método: GET
  - Rota: `/crimes`

- **Cadastrar um novo crime:**
  - Método: POST
  - Rota: `/crimes`
  - Exemplo de corpo da requisição:
    ```json
    {
      "name": "Roubo a mão armada",
      "criminoso_id": "1"
    }
    ```

- **Obter um crime por ID:**
  - Método: GET
  - Rota: `/crimes/:id`

- **Atualizar um crime por ID:**
  - Método: PUT
  - Rota: `/crimes/:id`
  - Exemplo de corpo da requisição:
    ```json
    {
      "name": "Assalto a banco"
    }
    ```

- **Excluir um crime por ID:**
  - Método: DELETE
  - Rota: `/crimes/:id`

### Armas

- **Listar todas as armas:**
  - Método: GET
  - Rota: `/armas`

- **Cadastrar uma nova arma:**
  - Método: POST
  - Rota: `/armas`
  - Exemplo de corpo da requisição:
    ```json
    {
      "nome": "Revólver",
      "criminoso_id": "1",
      "crimes_id": "1"
    }
    ```

- **Obter uma arma por ID:**
  - Método: GET
  - Rota: `/armas/:id`

- **Atualizar uma arma por ID:**
  - Método: PUT
  - Rota: `/armas/:id`
  - Exemplo de corpo da requisição:
    ```json
    {
      "nome": "Pistola"
    }
    ```

- **Excluir uma arma por ID:**
  - Método: DELETE
  - Rota: `/armas/:id`

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests).

## Licença

Este projeto

 está licenciado sob a [Licença MIT](LICENSE).

```

Este README.md fornece uma visão geral do projeto, pré-requisitos, instruções de instalação, exemplos de uso das rotas da API e informações sobre como contribuir. Certifique-se de personalizar as informações conforme necessário para refletir a estrutura real do seu projeto.
