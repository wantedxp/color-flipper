# Color Flipper
## O Color Flipper é um projeto simples que tem como objetivo fornecer aos usuários uma maneira fácil de visualizar e gerar cores aleatórias. O projeto consiste em duas páginas: "Simple" e "Hex".

![alt text](https://github.com/wantedxp/color-flipper/blob/main/dist/img/screenshots/color-flipper-ss.png "Logo Title Text 1")

### Simple
* Na página "Simple", o usuário pode selecionar entre algumas cores básicas, como verde, azul e vermelho. <br> 
Ao selecionar uma cor, a página exibe uma amostra da cor selecionada.

### Hex
* Na página "Hex", o usuário pode gerar aleatoriamente cores de fundo usando a tabela hexadecimal. <br> 
Cada vez que o botão "CLICK TO CHANGE" é clicado, uma nova cor é gerada e exibida na tela, tábem é gerado o seu correspondente codigo para ser copiado e colado no seu projeto.

### Tecnologias utilizadas
 O projeto foi criado usando as seguintes tecnologias: 

* JavaScript
* HTML
* CSS
* Webpack
* Babel
### Como executar o projeto
Para executar o projeto, você precisará ter o Node.js instalado em sua máquina. Depois de instalar o Node.js, siga estas etapas:

1. Clone o repositório para sua máquina.
* git clone https://github.com/seu-usuario/nome-do-repositorio.git
2. Navegue pelo terminal até a pasta raiz do projeto.
3. Execute o comando npm install para instalar todas as dependências do projeto.
* Instalando o npm: npm install npm@latest -g
* Para executa-lo: npm init ou npm init -y (para não precisar preencher o seu form)
* Para instalar o Babel: npm i -D @babel/core @babel/preset-env (como vamos criar um script para execução do babel não iremos precisar da extensao @babel/cli.
* Para instalar o css loader: npm i -D css-loader style-loader 
4. Execute o comando npm run build para empacotar o arquivo JavaScript usando o Babel. 
5. Execute o comando npm run dev para iniciar o servidor de desenvolvimento do Webpack.
6. Abra o navegador e navegue até http://localhost:8080 para ver o projeto em ação. 
### Considerações finais <br>
Este projeto foi criado com a intenção de colocar em prática o aprendizado do uso do npm, Webpack e Babel.
Espero que você goste e encontre o projeto útil. Sinta-se livre para sugerir melhorias ou enviar feedback.
Além disso, o projeto também é totalmente responsivo, o que significa que ele se adapta a qualquer tamanho de tela. Isso é possível graças ao uso de CSS flexbox e media queries. Dessa forma, o usuário pode desfrutar do Color Flipper em qualquer dispositivo, desde desktops até smartphones e tablets.
