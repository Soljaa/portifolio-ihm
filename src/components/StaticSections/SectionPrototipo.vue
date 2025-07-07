<template>
    <SectionComponent title="Protótipo"
                      icon="fa-decktop"
                      itemid="prototipo">

        <p>
            O protótipo é a materialização das ideias desenvolvidas nas etapas
            anteriores do nosso projeto. Ele permite que os designers tenham uma
            plataforma paupável para testar as funcionalidades, validar as
            soluções propostas e coletar feedback dos usuários, antes de
            investir em um desenvolvimento completo.
        </p>
        <p>
        As escolhas de design para este protótipo foram guiadas por diversas
        <strong
            >técnicas e abordagens teóricas de interação
            humano-computador</strong
        >. Aplicamos princípios como os da
        <strong>psicologia das cores</strong>, os
        <strong>princípios de Gestalt</strong>, e as
        <strong>heurísticas de usabilidade</strong> para garantir que a
        interface tenha uma boa usabilidade e para proporcionar uma melhor
        experiência do usuário.
        </p>
        <br />
        <h3>Acesso e Funcionalidades Atuais</h3>
        <p>
        Você pode acessar a versão atual do protótipo no seguinte link:
        <a href="https://rodrigolugao.github.io/ihc" target="_blank"
            >https://rodrigolugao.github.io/ihc</a
        >.
        </p>
        <br />
        <p>
        As principais funcionalidades já implementadas nesta fase incluem:
        </p>
        <ul style="margin-left: 70px">
        <li>Registro de novas atividades.</li>
        <li>Visualização das atividades concluídas por usuário.</li>
        <li>Edição e remoção de atividades existentes.</li>
        <li>Descoberta de eventos com atividades complementares.</li>
        <li>Acesso a informações do regulamento.</li>
        <li>
            Preenchimento e exportação do formulário de Solicitação de
            Registro de Atividade Complementar (SRAC).
        </li>
        </ul>
        <br />
        <h3>Principais telas</h3>


        <CarouselContainer>
            <CarouselSlide>
                <p><strong>Página Inicial</strong></p>
                <img src="../../assets/images/pagina-inicial.png" alt="Página Inicial" />
            </CarouselSlide>
            <CarouselSlide>
                <p><strong>Página sobre Atividades complementares</strong></p>
                <img src="../../assets/images/atividades.png" alt="Página Sobre ACs" />
            </CarouselSlide>
            <CarouselSlide>
                <p><strong>Página de Eventos</strong></p>
                <img src="../../assets/images/eventos-new.png" alt="Página de Eventos" />
            </CarouselSlide>
            <CarouselSlide>
                <p><strong>Dashboard</strong></p>
                <img src="../../assets/images/dashboard.png" alt="Dashboard" />
            </CarouselSlide>
            <div class="carousel-slide">
                <p><strong>Página de Registro de AC</strong></p>
                <img src="../../assets/images/registro-new.png" alt="Página Registro AC" />
              </div>
              <div class="carousel-slide">
                <p><strong>Página do Formulário SRAC</strong></p>
                <img src="../../assets/images/srac.png" alt="Página SRAC" />
              </div>
        </CarouselContainer>

        <h3>Análise Competitiva/Inspiradora</h3>

        <CarouselContainer>
            <CarouselSlide>
                <div class="carousel-slide-content">
                  <div class="carousel-text-column">
                    <p><strong>Competidores e inspiração</strong></p>
                    <br />
                    <p>
                      Começamos o design do protótipo nos baseando nas
                      interfaces encontradas na análise competitiva da etapa de
                      imersão. Buscamos aproveitar as partes positivas das
                      interfaces pesquisadas e implementar melhorias que
                      julgamos necessárias.
                    </p>
                    <br />
                    <p>
                      Veja alguns exemplos de insights obtidos nos próximos
                      slides.
                    </p>
                  </div>
                  <div class="carousel-image-column">
                    <img
                      src="../../assets/images/inspiracao.png"
                      alt="As interfaces avaliadas na análise competitiva"
                    />
                  </div>
                </div>
            </CarouselSlide>
            <CarouselSlide>
                <img
                  src="../../assets/images/unifal.png"
                  alt="Screenshot do simulador de ACs da Unifal"
                />
                <p><strong>Simulador de ACs da Unifal</strong></p>
                <br />
                <p>
                  A avaliação do simulador da Unifal nos permitiu identificar
                  oportunidades de melhoria em interfaces similares. Observamos
                  a falta de informações acessíveis sobre as ACs e uma
                  distribuição de conteúdo desfavorável, que comprometia a
                  experiência do usuário.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <div class="carousel-slide-content">
                  <div class="carousel-text-column">
                    <p><strong>Aplicativo Macros</strong></p>
                    <br />
                    <p>Deu a ideia do gráfico de horas</p>
                  </div>
                  <div
                    class="carousel-image-column"
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <img
                      src="../../assets/images/macros.png"
                      alt="Screenshot do aplicativo Macros"
                      style="max-height: 630px"
                    />
                  </div>
                </div>
            </CarouselSlide>
        </CarouselContainer>

        <br />
          <h3>Engenharia Cognitiva</h3>
        <br />

        <p>
            Nossa interface também foi projetada com base nos princípios da
            Engenharia Cognitiva, uma abordagem que junta o conhecimento da
            ciência cognitiva e o design de sistemas computacionais. Ao utilizar
            a engenharia cognitiva, nossa intenção foi criar uma experiência de
            usuário que se respeitasse os processos mentais dos usuários,
            minimizando a carga cognitiva e facilitando a interação.
          </p>
          <br />
          <p>
            Algumas das maneiras que aplicamos a Engenharia Cognitiva pelo nosso
            design:
          </p>

        <CarouselContainer>
            <CarouselSlide>
                <img src="../assets/images/pagina-inicial.png" alt="Screenshot" />
                <p>
                  <strong>Exibição Clara das Funcionalidades Principais</strong>
                </p>
                <br />
                <p>
                  Desde o primeiro contato, na página inicial, e nas interações
                  seguintes, por meio do menu no topo, a interface apresenta as
                  funcionalidades essenciais de forma clara e evidente. Isso
                  auxilia o usuário a formar objetivos adequados. Com os
                  objetivos do sistema em evidência, a "distância semântica",
                  que é a lacuna entre a intenção do usuário e as
                  funcionalidades oferecidas pelo sistema, é reduzida.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/cognitiva.png" alt="Screenshot da interface" />
                <p>
                  <strong
                    >Facilidade para Encontrar Elementos de Interface
                    Corretos</strong
                  >
                </p>
                <br />
                <p>
                  Tentamos priorizar a clareza e a familiaridade dos elementos
                  de interface (ícones, rótulos, botões), para mitigar o
                  problema de "usuários podem não encontrar o elemento de
                  interface correto", descrito pela Engenharia Cognitiva.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/cognitiva-2.png" alt="Screenshot" />
                <p>
                  <strong>Feedback Instantâneo e de Fácil Entendimento</strong>
                </p>
                <br />
                <p>
                  Projetamos a interface para fornecer feedback claro e imediato
                  sobre as ações do usuário. Isso ajuda na travessia do Golfo da
                  Avaliação, permitindo que o usuário interprete facilmente o
                  que aconteceu e determine se suas expectativas e intenções
                  foram alcançadas.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/cognitiva-3.png" alt="Screenshot" />
                <p>
                  <strong>Indicadores de Estado</strong>
                </p>
                <br />
                <p>
                  Procuramos fazer com que a interface sempre comunique o que
                  está fazendo a cada momento. Isso mantém o usuário informado
                  sobre o contexto e as expectativas do sistema.
                </p>
            </CarouselSlide>
        </CarouselContainer>

        <br />
        <h3>Engenharia Semiótica</h3>
        <br />
        <p>
            A Engenharia Smiótica entende a interface como mais do que uma
            ferramenta para que o usuário realize tarefas, mas como uma
            metacomunicação do designer com o usuário.Ou seja, o designer "fala"
            com o usuário por meio da interface, explicando como o sistema
            funciona e deve ser usado.
        </p>
        <br />
        <p>
            Alguns exemplos de como a Engenharia Semiótica guiou nosso processo
            de design, ajudando a consolidar as informações obtidas na etapa
            anterior na interface projetada:
        </p>

        <CarouselContainer>
            <CarouselSlide>
                <img src="../../assets/images/pagina-inicial.png" alt="Screenshot" />
                <p>
                  <strong>Definimos a nossa mensagem para o usuário</strong>
                </p>
                <br />
                <p>
                  Estabelecemos a missão central do Sistema, definida na Etapa
                  de Imersão: ser uma ferramenta útil para assuntos relacionados
                  às Atividades Complementares.
                </p>
                <p>
                  Buscamos contar a história do propósito principal do sistema,
                  que é
                  <strong>Clarificar</strong> as complexas regras e cálculos das
                  ACs, <strong>Organizar</strong> e centralizar as informações
                  das atividades já concluídas, e
                  <strong>Auxiliar</strong> ativamente no processo de
                  monitoramento e cumprimento dos requisitos.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/semiotica.png" alt="Screenshot da interface" />
                <p>
                  <strong
                    >Identificamos os Conceitos-Chave e os Tornamos
                    Concretos</strong
                  >
                </p>
                <br />
                <p>
                  Listamos os conceitos mais importantes do sistema (Atividades
                  Complementares, Eventos, Requisitos do Regulamento, etc) e os
                  tornamos palpáveis e compreensíveis, com elementos claros e
                  consistentes na interface.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/semiotica-2.png" alt="Screenshot" />
                <p>
                  <strong>Projetamos a Argumentação</strong>
                </p>
                <br />
                <p>
                  Desenhamos maneiras da interface "ensinar" o usuário a usar o
                  sistema.
                </p>
                <p>
                  No exemplo exibido, a interface informa o usuário que ele já
                  tem horas suficientes e o guia até a página do preenchimento
                  do formulário.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/semiotica-3.png" alt="Screenshot" />
                <p>
                  <strong>Tentamos Previnir Erros de Comunicação</strong>
                </p>
                <br />
                <p>
                  Antecipamos casos em que o usuário poderia não entender a
                  mensagem do sistema e colocamos feedback que pode ajudar a
                  corrigir os mal-entendidos.
                </p>
                <p>
                  No exemplo exibido, a interface informa que o usuário ainda
                  não fez o login e/ou ainda não adicionou nenhuma AC.
                </p>
            </CarouselSlide>
        </CarouselContainer>

        <br />
        <h3>Outros Princípios de Design Adotados</h3>
        <br />
        <p>
            Além da Engenharia Cognitiva e da Engenharia Semiótica, nossa
            interface foidesenvolvida incorporando outros princípios de
            Interação Humano-Computador (IHC) e design, para criar uma
            experiência de usuário agradável e intuitiva.
        </p>
        <br />
        <p>
            Utilizamos a Lei de Hick, lei de Fitts, os princípios de Gestalt e a
            Psicologia das Cores para aprimorar nossa interface:
        </p>

        <CarouselContainer>
            <CarouselSlide>
                <img src="../../assets/images/eventos.png" alt="Screenshot" />
                <p>
                  <strong>Lei de Hick-Hyman</strong>
                </p>
                <br />
                <p>
                  A lei de Hick afirma que o tempo necessário para tomar uma
                  decisão aumenta com o número e a complexidade das escolhas
                  disponíveis. Menos opções, mais rápido o usuário decide.
                </p>
                <p>
                  Em partes da interface com um número excessivo de informações
                  e opções de interação, reduzimos os elementos em tela para não
                  sobrecarregar o usuário.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img
                  src="../../assets/images/eventos-new.png"
                  alt="Screenshot da interface"
                />
                <p>
                  <strong>Lei de Hick-Hyman</strong>
                </p>
                <br />
                <p>
                  Na página de eventos, deixamos o filtro de busca inicialmente
                  escondido, somente deixando evidente a opção de exibi-lo. Isso
                  ajudou a diminuir a confusão inicial que acontecia
                  anteriormente.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/pagina-inicial-3.png" alt="Screenshot" />
                <p>
                  <strong>Lei de Fitts</strong>
                </p>
                <br />
                <p>
                  Esta lei descreve que o tempo para mover-se para um alvo é uma
                  função da distância até o alvo e do seu tamanho. Alvos maiores
                  e mais próximos são mais fáceis e rápidos de alcançar.
                </p>
                <p>
                  Deixamos os elementos principais de cada página mais próximos
                  do início da navegação e maiores, reduzindo o tempo que o
                  usuário precisa para chegar nas principais funcionalidades.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/pagina-inicial-eventos.png" alt="Screenshot" />
                <p>
                  <strong>Lei de Fitts</strong>
                </p>
                <br />
                <p>
                  Levamos o botão de ver todos os eventos para o topo do grupo
                  de elementos, para que o usuário possa rápidamente verificar
                  todos os eventos ou tentar buscar eventos que o interessam.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img
                  src="../../assets/images/atividades.png"
                  alt="Screenshot da tela de regras de ACs"
                />
                <p><strong>Psicologia das Cores</strong></p>
                <p>
                  Diferentes cores evocam distintas respostas emocionais e
                  psicológicas, além de possuírem significados culturais. O uso
                  intencional das cores pode guiar a atenção e transmitir
                  informações de forma não verbal.
                </p>
                <p>
                  Na Etapa de Imersão, verificamos que usuários se sentiriam
                  mais seguros com uma ferramenta que fosse desenvolvida,
                  supervisionada ou tivesse a autorização do Instituto de
                  Computação da UFF. Para refletir essa associação com o IC-UFF,
                  optamos por utilizar um esquema de cores parecido com o
                  esquema do site oficial do instituto.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img
                  src="../../assets/images/psicologia.png"
                  alt="Screenshot da tela de lista de ACs"
                />
                <p><strong>Psicologia das Cores</strong></p>

                <p>
                  Além disso, ainda utilizamos cores que fazem sentido no
                  contexto dos usuários nos elementos onde era necessário:
                </p>
                <ul>
                  <li>
                    <p>
                      <span style="color: green">Verde</span>: Utilizado para
                      funcionalidades principais e ações positivas do sistema.
                      Como no botão de editar atividade.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span style="color: yellow">Amarelo</span>: Utilizado em
                      elementos que precisam de atenção do usuário, como o badge
                      que informa que uma atividade ainda não tem o certificado.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span style="color: red">Vermelho</span>: Utilizado para
                      alertas e para funcionalidades que, se mal utilizados,
                      podem ter resultados indesejados ou danosos ao usuário. Um
                      exemplo é o botão de remover atividade
                    </p>
                  </li>
                </ul>
            </CarouselSlide>
        </CarouselContainer>

        <br/>

        <CarouselContainer>
            <CarouselSlide>
                <p>
                  <strong>Princípios de Gestalt</strong>
                </p>
                <img
                  src="images/gestalt.jpg"
                  alt="Um exemplo de um princípio de Gestalt"
                  style="max-height: 630px"
                />
                <p>
                  A Psicologia de Gestalt oferece um conjunto de princípios que
                  explicam como o cérebro humano agrupa e interpreta informações
                  visuais. Ao aplicá-los no design de interface, criamos layouts
                  que são naturalmente mais intuitivos e eficientes para o
                  usuário processar, minimizando o esforço cognitivo e
                  aprimorando a clareza da comunicação visual.
                </p>
                <br />
                <p>
                  No nosso design, aplicamos os princípios de Gestalt nos
                  elementos para agrupar visualmente informações relacionadas e
                  criar uma hierarquia clara
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img
                  src="../../assets/images/pagina-inicial-3.png"
                  alt="Screenshot da interface"
                />
                <p>
                  <strong>Proximidade</strong>
                </p>
                <br />
                <p>
                  Elementos que estão próximos uns dos outros são percebidos
                  como pertencentes ao mesmo grupo ou relacionados entre si.
                </p>
                <br />
                <p>
                  Os cards da imagem foram agrupados assim para que o usuário
                  entenda que todos levam a informações sobre Atividades
                  Complementares.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/pagina-inicial.png" alt="Screenshot" />
                <p>
                  <strong>Continuidade</strong>
                </p>
                <br />
                <p>
                  Elementos são percebidos como um padrão contínuo e conectado,
                  em vez de elementos separados e interrompidos. O olho humano
                  tende a seguir o caminho mais suave.
                </p>
                <br />
                <p>
                  Na página principal o título "Atividades Complementares:"
                  aparece no final da tela, sinalizando ao usuário de que existe
                  mais conteúdo se rolar a página.
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/cognitiva-2.png" alt="Screenshot" />
                <p>
                  <strong>Figura-Fundo</strong>
                </p>
                <br />
                <p>
                  O cérebro humano tende a separar visualmente um objeto
                  principal (a "figura") do seu ambiente circundante (o
                  "fundo"). Um bom design garante que a figura seja claramente
                  distinguível do fundo.
                </p>
                <br />
                <p>
                  O modal utilizado para informar o usuário que sua ação foi
                  concluída aparece sobre um fundo translúcido escuro, fazendo
                  com que o seu conteúdo (a "figura") se destaque claramente do
                  restante da página (o "fundo"), direcionando a atenção do
                  usuário para a mensagem crítica.
                </p>
            </CarouselSlide>
        </CarouselContainer>

    </SectionComponent>
</template>

<script>
import CarouselContainer from '../Carousel/CarouselContainer.vue';
import CarouselSlide from '../Carousel/CarouselSlide.vue';
import SectionComponent from '../SectionComponent.vue';

export default{
    name: 'SectionPrototipo',
    components: {
        SectionComponent,
        CarouselSlide,
        CarouselContainer
    }
}</script>