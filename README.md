# Projeto CI/CD - Frontend 

Este repositório contém a interface web desenvolvida para a atividade bimestral de Integração e Entrega Contínua (CI/CD).

---

## Objetivo

Demonstrar o consumo de uma API hospedada no Render e o deploy contínuo na Vercel.  
O painel exibe o **status**, a **versão** e o **tempo de atividade** da API em tempo real.

---

## Fluxo de Funcionamento

1. O Frontend é hospedado na **Vercel**, com deploy automático em cada push na branch `main`.
2. Ao abrir a página, o script faz uma requisição **GET** para o Backend (Render).
3. A página exibe:
   - Status da API  
   - Versão (ex: `v1.1.0`)  
   - Tempo de atividade
4. Quando o Backend é atualizado via CI/CD, o Frontend exibe automaticamente a nova versão — **sem necessidade de novo deploy**.

---

## URLs do Projeto

- **Site (Frontend)**: https://seu-projeto-front.vercel.app  
- **API (Backend)**: https://seu-projeto-back.onrender.com  


Desenvolvido por: Thiago Cunha, Paulo Ricardo, Vinicius de Araujo