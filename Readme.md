# Instruções para Rodar o Projeto

Este documento fornece instruções passo a passo para executar o projeto corretamente. Certifique-se de seguir cada etapa cuidadosamente para garantir um funcionamento adequado.

## Pré-requisitos

- Docker instalado e configurado
- Node.js e npm (ou yarn) instalados

## Passo 1: Iniciando o Docker

1. Abra um terminal na pasta 'desenvwebback':
    ```
    cd desenvwebback
    ```
2. Execute o seguinte comando para instalar as dependências do projeto Docker:
    ```
    npm i
    ```
3. Após a instalação, inicie o Docker com o comando:
    ```
    docker-compose up -d
    ```

Caso ocorra algum erro referente à porta, siga estas etapas adicionais:

- Encerre o processo que está ocupando a porta. No Linux, você pode usar os seguintes comandos:
    ```
    lsof -i :5432
    ```
    Isso retornará o ID do processo. Em seguida, utilize o comando `kill` com o ID retornado para encerrar o processo.

## Passo 2: Configurando o Banco de Dados

1. Após o Docker estar em execução, acesse a pasta 'desenvwebback/src/module/blog':
    ```
    cd src/module/blog
    ```
2. Execute o comando a seguir para aplicar as migrações do banco de dados:
    ```
    npx sequelize-cli db:migrate
    ```

## Passo 3: Iniciando o Backend

1. Volte para a pasta 'desenvwebback':
    ```
    cd ../../../
    ```
2. Execute o seguinte comando para iniciar o servidor backend com o Nodemon:
    ```
    nodemon index.js
    ```

## Passo 4: Iniciando o Frontend

1. Navegue para a pasta 'front':
    ```
    cd ../front
    ```
2. Execute os seguintes comandos para instalar as dependências e iniciar o servidor frontend:
    ```
    npm i
    npm run start
    ```

## Verificando o Projeto

Após seguir os passos acima, o projeto estará rodando corretamente:

- O frontend estará disponível em: [http://localhost:3000](http://localhost:3000)
- O backend estará disponível em: [http://localhost:8080](http://localhost:8080)

