<template>
  <SectionComponent
    itemid="firstclick"
    title="First Click"
    icon="fa-arrow-pointer"
  >
    <p>
      A avaliação de First Click foi aplicada no Sistema de Organização de
      Atividades Complementares (SOAC) para verificar a clareza e a intuição da
      interface logo no primeiro contato dos usuários. Essa etapa consistiu em
      analisar onde os estudantes clicariam primeiro ao realizar tarefas comuns,
      como buscar informações sobre carga horária, registrar atividades
      concluídas ou solicitar aproveitamento de horas complementares. Utilizando
      a plataforma Useberry, foram definidos cenários realistas e coletados
      dados como o local do clique, tempo de resposta e nível de confiança dos
      participantes. O objetivo dessa avaliação foi identificar se a hierarquia
      de informações e os elementos visuais do SOAC estavam claros o suficiente
      para que os usuários encontrassem rapidamente o caminho certo para
      completar suas tarefas, permitindo direcionar melhorias no design para
      torná-lo mais eficiente e fácil de usar.
    </p>

    <h3>Resultados</h3>
    <CarouselContainer>
      <CarouselSlide>
        <h3>Tarefa 1: Buscar carga horária</h3>
        <p>
          <strong>Tarefa:</strong> Imagine que você é um(a) estudante do Curso
          de Ciência da Computação da UFF e deseja saber quantas horas de
          atividades complementares você precisa para concluir o curso. Como
          você realizaria a tarefa acima? Onde você clicaria?
        </p>

        <p>
          <strong>Resultados:</strong> 50% dos usuários clicaram corretamente para
          encontrar a carga horária necessária de AC. Tempo médio: 29,5s.
          Confiança: 5,1/7. Muitos clicaram em "Sobre Atividades Complementares"
          ou "Tabela de Atividades", mas houve dispersão em botões pouco claros
          como “Comece agora” e “Perguntas Frequentes”. Sugere-se revisar
          nomenclaturas para maior clareza.
        </p>
        <img src="@/assets/images/task1.png" alt="Heatmap Tarefa 1" />
      </CarouselSlide>

      <CarouselSlide>
        <h3>Tarefa 2: Buscar oportunidades de AC</h3>
        <p>
          <strong>Tarefa:</strong> Imagine que você é um(a) estudante do Curso
          de Ciência da Computação da UFF que deseja procurar cursos, palestras,
          seminários e outras oportunidades que colaborem para a sua carga
          horária de atividades complementares. Como você realizaria a tarefa
          acima? Onde você clicaria?
        </p>

        <p>
          <strong>Resultados:</strong> 60% clicaram corretamente em "Eventos" ou
          “Ver todos”. Tempo médio: 18,6s. Confiança: 6,2/7. Alguns tentaram
          clicar no nome do evento, que não era clicável, indicando necessidade
          de tornar títulos interativos para melhor experiência.
        </p>
        <img src="@/assets/images/task2.png" alt="Heatmap Tarefa 2" />
      </CarouselSlide>

      <CarouselSlide>
        <h3>Tarefa 3: Registrar atividades concluídas</h3>
        <p>
          <strong>Tarefa:</strong> Imagine que você é um(a) estudante do Curso
          de Ciência da Computação da UFF que já concluiu algumas atividades
          complementares e deseja fazer o registro dessas atividades, com o
          intuito de fazer o acompanhamento do progresso de sua carga horária e
          juntar os certificados num só lugar. Como você realizaria a tarefa
          acima? Onde você clicaria?
        </p>

        <p>
          <strong>Resultados:</strong> 70% acertaram clicando em "Organizador",
          "Comece agora" ou "Entrar". Tempo médio sem outlier: 12,9s. Confiança:
          6,0/7. Poucos cliques incorretos. Interface considerada clara para
          registro de atividades.
        </p>
        <img src="@/assets/images/task3.png" alt="Heatmap Tarefa 3" />
      </CarouselSlide>

      <CarouselSlide>
        <h3>Tarefa 4: Buscar oportunidades específicas</h3>
        <p>
          <strong>Tarefa:</strong> Imagine que você é um(a) estudante do Curso
          de Ciência da Computação da UFF e deseja encontrar oportunidades de
          realizar atividades complementares que se encaixem em alguns
          requisitos prévios, como estar dentro de um período específico de
          tempo ou serem dentro de uma área de interesse particular. Como você
          realizaria a tarefa acima? Onde você clicaria?
        </p>

        <p>
          <strong>Resultados:</strong> 90% acertaram clicando em "Mostrar Filtros".
          Tempo médio: 15,2s. Confiança: 6,3/7. Alta clareza e associação
          intuitiva com a ação de filtrar oportunidades.
        </p>
        <img src="@/assets/images/task4.png" alt="Heatmap Tarefa 4" />
      </CarouselSlide>

      <CarouselSlide>
        <h3>Tarefa 5: Salvar atividade concluída</h3>
        <p>
          <strong>Tarefa:</strong>Imagine que você é um(a) estudante do Curso
          de Ciência da Computação da UFF que finalizou uma atividade
          complementar (como uma palestra) e quer registrar todos os detalhes e
          o certificado para futuras referências. Como você realizaria a tarefa
          acima? Onde você clicaria?
        </p>

        <p>
          <strong>Resultados:</strong> 80% clicaram corretamente em “Registrar uma
          atividade”. Tempo médio: 10,7s. Confiança: 6,8/7 (mais alta). Alguns
          clicaram em “Descobrir novas atividades”, indicando leitura
          superficial. Interface bem avaliada para essa tarefa.
        </p>
        <img src="@/assets/images/task5.png" alt="Heatmap Tarefa 5" />
      </CarouselSlide>

      <CarouselSlide>
        <h3>Tarefa 6: Simular nova atividade</h3>
        <p>
          <strong>Tarefa:</strong> Imagine que você é um(a) estudante do Curso
          de Ciência da Computação da UFF que planeja fazer um estágio e
          gostaria de saber como ficaria sua carga horária de atividades
          complementares ao concluir o estágio. Como você realizaria a tarefa
          acima? Onde você clicaria?
        </p>

        <p>
          <strong>Resultados:</strong> Apenas 30% acertaram. Tempo médio: 31,5s.
          Confiança: 5,2/7. Muitos clicaram em “Registrar Atividade” ao invés de
          simular, mostrando confusão na nomenclatura. Sugere-se criar rótulo
          claro como “Simular/Planejar”.
        </p>
        <img src="@/assets/images/task6.png" alt="Heatmap Tarefa 6" />
      </CarouselSlide>

      <CarouselSlide>
        <h3>Tarefa 7: Alterar ou excluir atividade</h3>
        <p>
          <strong>Tarefa:</strong> Imagine que você é um estudante do Curso de
          Ciência da Computação da UFF chamado Marcelo, que salvou uma atividade
          por engano no sistema e gostaria de alterar ou excluir as informações
          dessa atividade. Como você realizaria a tarefa acima? Onde você
          clicaria?
        </p>

        <p>
          <strong>Resultados:</strong> 80% acertaram. Tempo médio: 23s. Confiança:
          5,6/7. Problema: parte viu tela de visitante sem atividades,
          dificultando ação. Recomenda-se consistência na exibição de interfaces
          para tarefas de gerenciamento.
        </p>
        <img src="@/assets/images/task7.png" alt="Heatmap Tarefa 7" />
        <img src="@/assets/images/task7.1.png" alt="Heatmap Tarefa 7" />
      </CarouselSlide>

      <CarouselSlide>
        <h3>Tarefa 8: Recuperar certificado</h3>
        <p>
          <strong>Tarefa:</strong>Imagine que você é um estudante do Curso de
          Ciência da Computação da UFF chamado Marcelo, que gostaria de
          visualizar o certificado de um curso que fez anteriormente, se salvou
          no sistema. Como você realizaria a tarefa acima? Onde você clicaria?
        </p>

        <p>
          <strong>Resultados:</strong> Tarefa desconsiderada pois a tela exibida não
          tinha atividades registradas, inviabilizando conclusão.
        </p>
        <img src="@/assets/images/task8.png" alt="Heatmap Tarefa 8" />
      </CarouselSlide>

      <CarouselSlide>
        <h3>Tarefa 9: Solicitar requerimento de AC</h3>
        <p>
          <strong>Tarefa:</strong> Imagine que você é um estudante do Curso de
          Ciência da Computação da UFF chamado Marcelo, que já cumpriu sua carga
          horária de atividades complementares e gostaria de entregar as
          atividades para sua coordenação. Como você realizaria a tarefa acima?
          Onde você clicari
        </p>

        <p>
          <strong>Resultados:</strong> 90% acertaram clicando em “Preencher
          Formulário de Solicitação”. Tempo médio: 14,4s. Confiança: 5,9/7.
          Rótulo e localização do botão considerados claros e intuitivos.
        </p>
        <img src="@/assets/images/task9.png" alt="Heatmap Tarefa 9" />
      </CarouselSlide>

      <CarouselSlide>
        <h3>Tarefa 10: Guardar formulário para continuar depois</h3>
        <p>
          <strong>Tarefa:</strong> Imagine que você é um(a) estudante do Curso
          de Ciência da Computação da UFF, e está preenchendo o formulário de
          solicitação de atividades complementares, mas quer guardar as
          informações já preenchidas e, posteriormente, resumir o preenchimento.
          Como você realizaria a tarefa acima? Onde você clicaria?
        </p>

        <p>
          <strong>Resultados:</strong> Tarefa desconsiderada por falha no registro
          dos cliques pela plataforma, inviabilizando análise.
        </p>
        <img src="@/assets/images/task10.png" alt="Heatmap Tarefa 10" />
      </CarouselSlide>
    </CarouselContainer>
        <p>Para ver o relatório completo, acesse: <span><a href="https://docs.google.com/document/d/15Imuv2NCkgQDUlfcH4AFVrlhn85Q5B19koMbDFlZBMo/edit?tab=t.0">Relatório</a></span></p>

  </SectionComponent>
</template>

<script>
import SectionComponent from "../SectionComponent.vue";
import CarouselContainer from "../Carousel/CarouselContainer.vue";
import CarouselSlide from "../Carousel/CarouselSlide.vue";

export default {
  name: "SectionFirstclick",
  components: {
    SectionComponent,
    CarouselSlide,
    CarouselContainer,
  },
};
</script>
