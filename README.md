# Projeto To-Do List
*(en)* The project is a website with which the user can create a to-do list, adding items, removing items and signaling when the task is concluded.

*(pt-br)* O projeto consiste em uma página web na qual o usuário pode criar uma lista de afazeres, sinalizar a conclusão da atividade e remover items da lista. 

## Funcionamento 🔨
O usuário insere seu texto numa input, e ao clicar no botão 'Add', seu item é adicionado à uma lista com um checkbox. Caso o usuário queira remover o item, o botão 'Remove' remove o último item da lista. Assim que concluída a tarefa, o usuário preenche o checkbox e automaticamente o texto recebe um linha atravessada e toma um tom mais claro. Dessa forma, o projeto serve para gerenciar tarefas diárias.

## Demonstração 📸
https://github.com/AnaJuliaMM/To-do_list/assets/123522605/b9c81551-db84-4e8c-ac36-a93216f3fcd0

## Linguagens
- `HTML`
- `JavaScript`
- `CSS`
  
  </br>
## Procedimento de execução (com Docker 🐳)
### Configuração do ambiente (Windows)
1. Instale o WSL (Windows Subsystem for Linux) através [deste tutorial](https://learn.microsoft.com/pt-br/windows/wsl/install);
2. Faça o dowload do Docker Desktop no seu computador (É recomendado baixar Docker Desktop, uma vez que já incluí a instalação do docker-compose). [Acesse este link para acessar o tutorial](https://www.docker.com/products/docker-desktop/)

### Execução
1. Clone este repositório em um diretório de escolha
   ```
   git clone https://github.com/AnaJuliaMM/to-do-list.git
   ```
2. Entre no repositório e execute o container do servidor Apache
   ```
   docker-compose up -d
   ```
3. Visualize a aplicação em *localhost:80*
4. Para interromper a aplicação, execute o seguinte comando na pasta do repositório:
   ```
   docker-compose stop 
   ```

   Para remover o container, execute:
   ```
      docker-compose down
   ```




