# keycloak-saml-example

> Projeto criado apenas para testes

# Requisitos

- Instancia do keycloak
- Servidor SAML

# Para rodar:

## 1 - Atualiza as variaveis de ambiente

Abra o arquivo [.env.development](./.env.development), e substitua `KEYCLOAK_IP_HERE` e `KEYCLOAK_PORT_HERE` e `KEYCLOAK_REALM_NAME` para os dados da instancia do seu keycloak.

## 2 - Obter o certificado publico

Obtenha o Public Certificate da sua instancia do keycloak, para isso basta:

- Acessar o **Keycloak Admin**
- Selecione o Realm (reino) desejado
- Clique no menu lateral esquerdo em `Realm settings`
- Clique na aba `Keys`
- E na linha onde tiver o type `RSA` e o `Algorithm` com valor `RS256`, clique no botão `Certificate` dessa linha.
- Copie o conteudo e substitua todo o conteudo do arquivo [public-keycloak-idp.pem](./src/certificate/public-keycloak-idp.pem)

## 3 - Instalar dependencias e executar

```
$ npm i
$ npm start
```

# Rotas:

| Rota               | Tipo   | Descrição                                                                                 |
| ------------------ | ------ | ----------------------------------------------------------------------------------------- |
| /auth/sso/saml     | `GET`  | Rota utilizada apenas para o redirecionamento do login                                    |
| /auth/sso/callback | `POST` | Rota utilizada de callback do login quando sucesso e que recebe como body o SAML Response |
