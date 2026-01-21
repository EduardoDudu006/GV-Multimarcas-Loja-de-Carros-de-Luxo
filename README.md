README: Projeto GV Multimarcas
Este é um projeto de demonstração de uma página web responsiva para uma revendedora de carros de luxo, a GV Multimarcas. A página principal apresenta um carrossel interativo e moderno que exibe diferentes modelos de hipercarros com descrições e efeitos de transição.
🚀 Funcionalidades Principais
Carrossel Interativo: Navegação entre diferentes veículos (LaFerrari, Huracán, Divo, McLaren P1, Corvette ZR1) usando setas e indicadores inferiores.
Design Moderno e Responsivo: Utiliza Flexbox e posicionamento absoluto para um layout atraente.
Animações CSS/JS: Efeitos de transição suaves ao mudar de slide.
Navegação Automática: O carrossel avança automaticamente a cada 5 segundos.
Sticky Footer: O rodapé permanece na parte inferior da página, independentemente da quantidade de conteúdo.
🛠️ Tecnologias Utilizadas
O projeto é construído com as seguintes tecnologias front-end:
HTML5: Estrutura semântica da página.
CSS3: Estilização, layout (Flexbox/Grid), e animações visuais.
JavaScript (ES6+): Lógica do carrossel, interatividade, navegação automática e gerenciamento de classes dinâmicas.
📁 Estrutura de Arquivos
A estrutura do projeto segue um padrão básico:
/gv-multimarcas/
├── index.html
├── style.css
├── scripts.js
└── /img/
    ├── Arrow.png
    |__ ... (outras imagens dos carros)
📖 Como Usar
Para visualizar o projeto, basta abrir o arquivo index.html em qualquer navegador web moderno.
Configuração e Desenvolvimento
Se você quiser modificar o código ou desenvolver localmente:
Clone o repositório (se aplicável).
Abra a pasta do projeto no seu editor de código preferido (ex: VS Code).
Certifique-se de que os arquivos de imagem estão na pasta img/ conforme a estrutura acima.
Edite os arquivos: index.html, style.css ou scripts.js para personalizar o site.
🚗 Adicionando um Novo Veículo ao Carrossel
Para expandir a lista de carros no carrossel, siga estes passos em 3 arquivos diferentes:
Passo 1: Adicionar a Imagem
Coloque o arquivo de imagem do novo carro (ex: novo-carro.png) dentro da pasta img/.
Passo 2: Atualizar o HTML (index.html)
Você precisa adicionar um novo bloco <div class="item"> dentro da seção <div class="list">.
Adicione o novo item: Insira o bloco logo antes do fechamento </div> da list.
html
<!-- ... dentro de <div class="list"> ... -->

 <div class="item">
  <div class="car-img">
  <img
  src="./img/novo-carro.png"
  alt="Imagem do novo carro"
  />
  </div>
  <div class="content">
  <p class="car-information">Sua Descrição Curta</p>
  <h2>Nome do Carro</h2>
  <p class="description">
  O texto descritivo completo do novo veículo.
  </p>
  <button class="information">Saiba Mais</button>
  </div>
 </div>

</div> <!-- Fechamento da .list -->
Use o código com cuidado.

Adicionar Ponto Indicador: Adicione um novo <li> dentro da lista de indicadores (<div class="indicators"> <ul>).
html
<!-- ... dentro de <div class="indicators"> <ul> ... -->

 <li class="active" data-index="0"></li>
 <li class="active" data-index="1"></li>
 <!-- ... outros itens existentes ... -->
 <li class="active" data-index="5"></li> <!-- Novo item -->
</ul>
Use o código com cuidado.

Passo 3: Atualizar o JavaScript (scripts.js)
O JavaScript existente é dinâmico o suficiente para detectar o novo número de itens automaticamente. Você não precisa alterar variáveis como lastPosition.
Ajuste de Comportamento Específico (Opcional): Se o novo carro precisar de um layout de texto especial, como o da McLaren, você precisará adicionar lógica adicional na função setSlider() (ex: se o índice active for 5, adicione uma classe CSS específica).
© Direitos Autorais
© GV Multimarcas - Todos os direitos reservados.
