<template>
  <SectionComponent
    itemid="heuristica"
    title="Avalição Heurística"
    icon="fa-users"
  >
    <p>
      Avaliação heurística é um método de engenharia de usabilidade para
      encontrar problemas de usabilidade em um design de interface de usuário,
      de modo que eles possam ser tratados como parte de um processo de design
      iterativo. A avaliação heurística envolve um pequeno grupo de avaliadores
      examinando a interface e julgando sua conformidade com princípios
      reconhecidos de usabilidade (as “heurísticas”).
    </p>

    <h3>Heurísticas de usabilidade de Nielsen</h3>

    <ul style="padding-left: 5%">
      <li>
        <strong>1. Visibilidade do estado do sistema:</strong> sempre informe ao
        usuário o que está acontecendo.
      </li>
      <li>
        <strong>2. Correspondência entre o sistema e o mundo real:</strong> use
        linguagem e conceitos familiares ao usuário.
      </li>
      <li>
        <strong>3. Controle e liberdade do usuário:</strong> permita desfazer e
        refazer ações facilmente.
      </li>
      <li>
        <strong>4. Consistência e padronização:</strong> siga padrões para que
        elementos e ações tenham o mesmo significado.
      </li>
      <li>
        <strong>5. Reconhecimento em vez de memorização:</strong> minimize a
        necessidade de lembrar informações, deixando opções visíveis.
      </li>
      <li>
        <strong>6. Flexibilidade e eficiência de uso:</strong> permita atalhos e
        formas rápidas para usuários experientes.
      </li>
      <li>
        <strong>7. Projeto estético e minimalista:</strong> elimine informações
        irrelevantes que poluem a interface.
      </li>
      <li>
        <strong>8. Prevenção de erros:</strong> projete para evitar erros antes
        que aconteçam.
      </li>
      <li>
        <strong
          >9. Ajude os usuários a reconhecerem, diagnosticarem e se recuperarem
          de erros:</strong
        >
        mensagens de erro claras que indiquem o problema e solução.
      </li>
      <li>
        <strong>10. Ajuda e documentação:</strong> forneça suporte e explicações
        acessíveis quando necessários.
      </li>
    </ul>
    <br />
    <p>
      As avaliações heurísticas foram realizadas individualmente por três
      avaliadores, que inspecionaram o Sistema de Organização de Atividades
      Complementares (SOAC) para identificar cerca de 10 problemas de
      usabilidade cada, com base nas heurísticas de Nielsen. Os avaliadores não
      participaram do desenvolvimento do sistema e tiveram acesso prévio às
      informações necessárias, como personas, modelos de tarefas e o protótipo
      funcional, garantindo uma análise contextualizada e imparcial.
    </p>
    <br />
    <h3>Resultados</h3>
    <div class="heuristics-graphs">
      <img src="@/assets/images/contagem-violacoes.png" />
      <img src="@/assets/images/gravidade-por-heuristica.png" />
      <img src="@/assets/images/gravidade-por-tarefa.png" />
      <img src="@/assets/images/violacoes-por-heuristica.png" />
    </div>

    <br />
    <h3>Conclusões</h3>
    <p>
      A análise mostrou que os principais problemas de usabilidade do SOAC estão
      relacionados à Visibilidade do Estado do Sistema, Consistência e
      Padronização, e Prevenção de Erros, afetando principalmente a Navbar, a
      Tela de Eventos e a tarefa de gerenciar e descobrir atividades
      complementares. Apesar de algumas violações de alta gravidade em “Ajuda na
      recuperação de erros”, sua frequência foi baixa. A diversidade dos
      problemas encontrados reforça a necessidade de novas avaliações antes dos
      testes finais. Assim, recomenda-se priorizar melhorias nessas heurísticas
      e nessas áreas da interface para garantir uma experiência mais intuitiva e
      eficiente aos usuários.
    </p>

    <p>Para ver o relatório completo, acesse: <span><a href="https://docs.google.com/document/d/1_xEmjwcHXWnT5NVX_U405IUe-IIvTyfz84dIAwE-iwM/edit?usp=sharing">Relatório</a></span></p>
  </SectionComponent>
</template>

<script>
import SectionComponent from "../SectionComponent.vue";

export default {
  name: "SectionHeuristica",
  components: {
    SectionComponent,
  },
};
</script>
