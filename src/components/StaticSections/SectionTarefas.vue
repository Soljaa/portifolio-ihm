<template>
  <SectionComponent
    title="Análise de Tarefas: Hierarchical Task Analysis (HTA)"
    icon="fa-tasks"
    itemid="tarefas"
  >
    <p>
      A Análise de Tarefas é uma etapa crucial no processo de design de
      interação, pois nos permite entender detalhadamente como os usuários
      realizam suas atividades e quais passos são envolvidos para atingir seus
      objetivos. Para este projeto, optamos pela
      <strong>Hierarchical Task Analysis (HTA)</strong> , uma abordagem que nos
      permite decompor tarefas complexas em subtarefas menores e mais
      gerenciáveis, revelando a estrutura hierárquica das ações do usuário.
    </p>

    <br />

    <h3>O que é a HTA e Como Ela Ajuda no Design da Solução?</h3>

    <p>
      A HTA é uma técnica utilizada para descrever a estrutura hierárquica de
      uma tarefa complexa. Ela envolve a decomposição de uma "tarefa principal"
      (ou objetivo geral) em "subtarefas" e "operações". A representação visual
      da HTA geralmente se assemelha a uma árvore, com a tarefa principal no
      topo e os níveis mais baixos detalhando as ações específicas.
    </p>

    <br />

    <p>Os elementos chave da HTA são:</p>

    <ul>
      <li>
        <strong>Tarefas (Goals)</strong>: O que o usuário pretende alcançar.
      </li>

      <li>
        <strong>Subtarefas (Sub-goals)</strong>: As etapas intermediárias
        necessárias para completar a tarefa principal.
      </li>

      <li>
        <strong>Operações (Operations)</strong>: As ações mais básicas e
        atômicas que não podem ser decompostas ainda mais (ex: clicar, digitar).
      </li>

      <li>
        <strong>Planos (Plans)</strong>: Descrevem as condições e a ordem em que
        as subtarefas e operações devem ser executadas.
      </li>
    </ul>

    <br />

    <h3>Como Fizemos a HTA</h3>
    <p>
      Com base nos dados coletados na etapa de imersão (questionários,
      entrevistas, análise comparativa) e nas personas que criamos, realizamos a
      HTA seguindo os seguintes passos:
    </p>
    <ol>
      <li>
        <strong>Definição da Tarefa Principal (Goal)</strong>: A partir dos
        cenários problema e dos objetivos das personas, selecionamos uma tarefa
        de alto nível que nossos usuários precisam realizar.
      </li>

      <li>
        <strong>Decomposição Hierárquica</strong>: A tarefa principal foi
        decomposta em subtarefas. Cada subtarefa, se ainda for complexa, foi
        decomposta em níveis inferiores até chegarmos a operações básicas.
      </li>

      <li>
        <strong>Detalhar Operações e Planos</strong>: Para cada subtarefa, foram
        identificadas as operações específicas (ações do usuário) e os planos
        que descrevem a ordem e as condições para sua execução.
      </li>

      <li>
        <strong>Identificação de Pontos de Oportunidade e Problemas</strong>: A
        HTA nos permite visualizar onde o processo atual é mais ineficiente,
        confuso ou propenso a erros, destacando oportunidades para melhorias no
        design do sistema.
      </li>
    </ol>

    <br />
    <p>
      Ao aplicar a HTA dessa maneira, obtivemos um mapa das ações dos usuários,
      permitindo que o design da solução seja focado em melhoras os passos e
      resolver os problemas específicos enfrentados nas etapas de interação com
      o sistema.
    </p>
    <br />
    <div>
      <h3>0. Encontrar informações sobre regras e eventos (Larissa)</h3>
      <div>
        <div class="nivel1">1. Tirar dúvidas sobre as ACs.</div>
        <div class="nivel2">
          1.1. Clicar no botão "Sobre Atividades Complementares".
        </div>
        <div class="nivel2">
          1.2. Tirar as dúvidas sobre o processo e conferir a tabela de
          pontuação de ACs.
        </div>
        <div class="nivel2">1.3. Clicar em "Perguntas Frequentes".</div>
        <div class="nivel2">1.4. Tirar qualquer dúvida restante.</div>

        <div class="nivel1">2. Buscar eventos próximos.</div>
        <div class="nivel2">2.1. Clicar na aba "Eventos".</div>
        <div class="nivel2">
          2.2. Adicionar os filtros desejados para a busca.
        </div>
        <div class="nivel2">2.3. Clicar em "Buscar".</div>
        <div class="nivel2">2.4. Encontrar o evento desejado.</div>
        <div class="nivel3">2.4.1. Opção A: Clicar no nome do Evento.</div>
        <div class="nivel3">2.4.2. Opção B: Clicar em "Mais informações".</div>
        <div class="nivel2">
          2.5. Realizar a inscrição no evento pelo link externo.
        </div>

        <div class="nivel1">3. Acessar o sistema para planejar as tarefas.</div>
        <div class="nivel2">3.1. Clicar no botão "Entrar".</div>
        <div class="nivel2">
          3.2. Realizar a autenticação na plataforma idUFF (login e senha).
        </div>
        <div class="nivel2">3.3. Clicar na aba "Eventos".</div>
        <div class="nivel2">
          3.4. Adicionar os filtros desejados para a busca.
        </div>
        <div class="nivel2">3.5. Clicar em "Buscar".</div>
        <div class="nivel2">
          3.6. Encontrar um evento que ainda não ocorreu.
        </div>
        <div class="nivel3">3.6.1. Opção A: Clicar no nome do Evento.</div>
        <div class="nivel3">3.6.2. Opção B: Clicar em "Mais informações".</div>
        <div class="nivel2">
          3.7. Clicar em "Adicionar para Planejamento/Simulação".
        </div>
      </div>

      <h3>Planos de Execução (Larissa)</h3>
      <ul>
        <li>
          <strong>Plano 1 (Primeira Visita - Exploratória):</strong> Para
          entender como as atividades funcionam, realizar 1; para descobrir
          oportunidades, realizar 2.
        </li>
        <li>
          <strong>Plano 2 (Decisão e Conversão):</strong> Realizar 2; para
          salvar um evento de interesse e iniciar um plano, realizar 3.
        </li>
      </ul>

      <h3>0. Gerenciar e descobrir atividades complementares (Lucas)</h3>
      <div>
        <div class="nivel1">
          1. Acessar o sistema e carregar dados do aluno.
        </div>
        <div class="nivel2">1.1. Clicar no botão "Entrar".</div>
        <div class="nivel2">
          1.2. Realizar a autenticação na plataforma idUFF (login e senha).
        </div>

        <div class="nivel1">2. Gerenciar atividades existentes.</div>
        <div class="nivel2">2.1. Clicar em "Atividades Registradas".</div>
        <div class="nivel2">2.2. Identificar o tipo de atividade desejada.</div>
        <div class="nivel2">
          2.3. Clicar no tipo para expandir a lista de atividades realizadas
          daquele tipo.
        </div>
        <div class="nivel2">2.4. Encontrar uma atividade específica.</div>
        <div class="nivel3">
          2.4.1. Opção A: Clicar em "Remover do meu registro".
        </div>
        <div class="nivel4">2.4.1.1. Clicar em "Remover permanentemente".</div>
        <div class="nivel3">2.4.2. Opção B: Clicar em "Editar atividade".</div>
        <div class="nivel4">2.4.2.1. Alterar os campos necessários.</div>
        <div class="nivel4">2.4.2.2. Clicar em "Salvar alterações".</div>
        <div class="nivel4">2.4.2.3. Clicar em "Confirmar edição".</div>

        <div class="nivel1">
          3. Descobrir e registrar novas atividades via Eventos.
        </div>
        <div class="nivel2">3.1. Clicar na aba "Eventos".</div>
        <div class="nivel2">
          3.2. Adicionar os filtros desejados para a busca.
        </div>
        <div class="nivel2">3.3. Clicar em "Buscar".</div>
        <div class="nivel2">3.4. Encontrar o evento desejado.</div>
        <div class="nivel3">3.4.1. Opção A: Clicar no nome do Evento.</div>
        <div class="nivel3">3.4.2. Opção B: Clicar em "Mais informações".</div>
        <div class="nivel2">
          3.5. Realizar a inscrição no evento pelo link externo.
        </div>
        <div class="nivel2">
          3.6. Clicar em "Registre no Organizador de Atividades".
        </div>
        <div class="nivel2">
          3.7. Conferir e preencher os dados da atividade.
        </div>
        <div class="nivel2">3.8. Clicar em "Registrar Atividade".</div>
        <div class="nivel2">3.9. Clicar em "Confirmar Registro".</div>
        <div class="nivel2">3.10. Clicar em “Ok”.</div>

        <div class="nivel1">4. Registrar novas atividades.</div>
        <div class="nivel2">4.1. Clicar no botão "Registrar Atividade".</div>
        <div class="nivel3">
          4.1.1. Opção A: Clicar no botão "Enviar certificado".
        </div>
        <div class="nivel4">4.1.1.1. Selecionar o arquivo do certificado.</div>
        <div class="nivel4">
          4.1.1.2. Verificar se todos os dados estão corretos.
        </div>
        <div class="nivel3">
          4.1.2. Opção B: Clicar em "Preencher Formulário".
        </div>
        <div class="nivel4">
          4.1.2.1. Preencher todos os campos manualmente.
        </div>
        <div class="nivel2">4.1.3. Clicar em "Registrar Atividade".</div>
        <div class="nivel2">4.1.4. Conferir novamente os dados.</div>
        <div class="nivel2">4.1.5. Clicar em "Confirmar Registro".</div>
        <div class="nivel2">4.1.6. Clicar em “Ok”.</div>

        <div class="nivel1">
          5. Verificar se já tem todas as horas necessárias.
        </div>
        <div class="nivel2">5.1. Clicar no botão "Visão Geral".</div>
        <div class="nivel2">
          5.2. Verificar se o sistema informa alguma hora faltante.
        </div>
      </div>

      <h3>Planos de Execução (Lucas)</h3>
      <ul>
        <li>
          <strong>Plano 1 (Decidir sobre um Evento):</strong> Realizar 1; para
          checar o progresso atual, realizar 5; para encontrar e adicionar um
          novo evento, realizar 3.
        </li>
        <li>
          <strong>Plano 2 (Registrar Atividade Manualmente):</strong> Realizar
          1; para registrar um certificado que não está na lista de eventos,
          realizar 4.
        </li>
        <li>
          <strong>Plano 3 (Gerenciar Atividades Existentes):</strong> Realizar
          1; para editar ou excluir um registro, realizar 2.
        </li>
      </ul>

      <h3>0. Submeter o Formulário de Atividades Complementares (Marcelo)</h3>
      <div>
        <div class="nivel1">
          1. Acessar o sistema e carregar dados do aluno.
        </div>
        <div class="nivel2">1.1. Clicar no botão "Entrar".</div>
        <div class="nivel2">
          1.2. Realizar a autenticação na plataforma idUFF (login e senha).
        </div>

        <div class="nivel1">2. Registrar novas atividades.</div>
        <div class="nivel2">2.1. Clicar no botão "Registrar Atividade".</div>
        <div class="nivel3">
          2.1.1. Opção A: Clicar no botão "Enviar certificado".
        </div>
        <div class="nivel4">2.1.1.1. Selecionar o arquivo do certificado.</div>
        <div class="nivel4">
          2.1.1.2. Verificar se todos os dados estão corretos.
        </div>
        <div class="nivel3">
          2.1.2. Opção B: Clicar em "Preencher Formulário".
        </div>
        <div class="nivel4">
          2.1.2.1. Preencher todos os campos manualmente.
        </div>
        <div class="nivel2">2.1.3. Clicar em "Registrar Atividade".</div>
        <div class="nivel2">2.1.4. Conferir novamente os dados.</div>
        <div class="nivel2">2.1.5. Clicar em "Confirmar Registro".</div>
        <div class="nivel2">2.1.6. Clicar em “Ok”.</div>

        <div class="nivel1">
          3. Verificar se já tem todas as horas necessárias.
        </div>
        <div class="nivel2">3.1. Clicar no botão "Visão Geral".</div>
        <div class="nivel2">
          3.2. Verificar se o sistema informa alguma hora faltante.
        </div>

        <div class="nivel1">4. Preencher formulário SRAC.</div>
        <div class="nivel2">
          4.1. Clicar no botão "Preencher formulário de solicitação".
        </div>
        <div class="nivel3">
          4.1.1. Opção A: Clicar no botão "Baixar formulário SRAC preenchido".
        </div>
        <div class="nivel3">
          4.1.2. Opção B: Clicar no botão "Baixar formulário SRAC em branco".
        </div>
        <div class="nivel4">4.1.2.1. Preencher manualmente o pdf.</div>
      </div>

      <h3>Planos de Execução (Marcelo)</h3>
      <ul>
        <li>
          <strong>Plano 1 (Uso Completo / Primeira Vez):</strong> Realizar 1;
          para cada certificado, realizar 2; para checar o progresso, realizar
          3; para finalizar, realizar 4.
        </li>
        <li>
          <strong>Plano 2 (Adicionar mais Atividades):</strong> Realizar 1; para
          adicionar um novo certificado, realizar 2.
        </li>
        <li>
          <strong>Plano 3 (Verificar Progresso ou Gerar Formulário):</strong>
          Realizar 1; para verificar as horas, realizar 3; para baixar o
          formulário, realizar 4.
        </li>
      </ul>
    </div>
  </SectionComponent>
</template>

<script>
import SectionComponent from "../SectionComponent.vue";

export default {
  name: "SectionTarefas",
  components: {
    SectionComponent,
  },
};
</script>
