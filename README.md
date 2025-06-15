# 📱 Digital Twin - Entrega 1

Este projeto é uma simulação mobile de um sistema de sensores inteligentes para um ambiente industrial, utilizando o conceito de **Digital Twin**.

---

## 🔧 Tecnologias Utilizadas

- **React Native (Expo)**
- **JavaScript**
- **TypeScript**
- **React Navigation (Stack e Bottom Tabs)**
- **Context API** para estado global dos sensores
- **FlatList** com scroll horizontal e responsivo

---

## 📦 Funcionalidades Implementadas

### ✅ Tela Splash
- Tela inicial com transição automática

### ✅ Home
- Boas-vindas ao usuário
- Botão **“Começar”** que redireciona para os sensores

### ✅ Sensores
- Geração automática de dados simulados ao carregar ou atualizar
- Sensores de:
  - Pressão (em bar)
  - Magnético
  - Indutivo
- Alerta se o valor estiver fora do esperado
- FlatList horizontal estilizada
- Botão **“Atualizar Dados”** para simular nova leitura
- Salvamento automático no histórico

### ✅ Histórico
- Lista cronológica das leituras realizadas
- Dados completos de cada sensor em cada leitura
- Validações para prevenir erros de renderização

---

## 🧠 Como funciona a simulação?

- **Sensor de pressão**: valores entre 1 e 11 bar. Acima de 9 é considerado alerta.
- **Sensor magnético/indutivo**: podem estar ativados ou desativados. Desativado = alerta.
- Todos os sensores possuem valores e status gerados dinamicamente ao atualizar.

---


## 🚀 Como rodar o projeto

1. Clone o repositório
2. Instale as dependências com `npm install` ou `yarn`
3. Execute com `npx expo start`
4. Acesse via Web ou Mobile View copiando a URL 

---

## 📌 Observações

- Essa é a **primeira entrega** do projeto, com as funcionalidades básicas completas.

---

## 👨‍💻 Autores

Gustavo Della Rocca - RM: 551595
Humberto Guimarães Martins - RM: 551602
Maria Eduarda Paranhos - RM: 98138
Rodrigo Cordeiro - RM: 97808

---



