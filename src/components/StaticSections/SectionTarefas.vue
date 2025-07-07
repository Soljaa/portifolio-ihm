<template>
    <SectionComponent title="Análise de Tarefas: Hierarchical Task Analysis (HTA)"
                      icon="fa-tasks"
                      itemid="tarefas">

        <p>
            A Análise de Tarefas é uma etapa crucial no processo de design de
            interação, pois nos permite entender detalhadamente como os usuários
            realizam suas atividades e quais passos são envolvidos para atingir
            seus objetivos. Para este projeto, optamos pela
            <strong>Hierarchical Task Analysis (HTA)</strong> , uma abordagem
            que nos permite decompor tarefas complexas em subtarefas menores e
            mais gerenciáveis, revelando a estrutura hierárquica das ações do
            usuário.
        </p>

        <br />

        <h3>O que é a HTA e Como Ela Ajuda no Design da Solução?</h3>

        <p>
            A HTA é uma técnica utilizada para descrever a estrutura hierárquica
            de uma tarefa complexa. Ela envolve a decomposição de uma "tarefa
            principal" (ou objetivo geral) em "subtarefas" e "operações". A
            representação visual da HTA geralmente se assemelha a uma árvore,
            com a tarefa principal no topo e os níveis mais baixos detalhando as
            ações específicas.
        </p>

        <br />

        <p>Os elementos chave da HTA são:</p>

        <ul>
            <li>
                <strong>Tarefas (Goals)</strong>: O que o usuário pretende
                alcançar.
            </li>

            <li>
                <strong>Subtarefas (Sub-goals)</strong>: As etapas intermediárias
                necessárias para completar a tarefa principal.
            </li>

            <li>
                <strong>Operações (Operations)</strong>: As ações mais básicas e
                atômicas que não podem ser decompostas ainda mais (ex: clicar,
                digitar).
            </li>

            <li>
                <strong>Planos (Plans)</strong>: Descrevem as condições e a ordem
                em que as subtarefas e operações devem ser executadas.
            </li>
        </ul>

        <br />

        <h3>Como Fizemos a HTA</h3>
        <p>
            Com base nos dados coletados na etapa de imersão (questionários,
            entrevistas, análise comparativa) e nas personas que criamos,
            realizamos a HTA seguindo os seguintes passos:
        </p>
        <ol>
            <li>
                <strong>Definição da Tarefa Principal (Goal)</strong>: A partir
                dos cenários problema e dos objetivos das personas, selecionamos
                uma tarefa de alto nível que nossos usuários precisam realizar.
            </li>

            <li>
                <strong>Decomposição Hierárquica</strong>: A tarefa principal foi
                decomposta em subtarefas. Cada subtarefa, se ainda for complexa,
                foi decomposta em níveis inferiores até chegarmos a operações
                básicas.
            </li>

            <li>
                <strong>Detalhar Operações e Planos</strong>: Para cada subtarefa,
                foram identificadas as operações específicas (ações do usuário) e
                os planos que descrevem a ordem e as condições para sua execução.
            </li>

            <li>
                <strong
                >Identificação de Pontos de Oportunidade e Problemas</strong
                >: A HTA nos permite visualizar onde o processo atual é mais
                ineficiente, confuso ou propenso a erros, destacando oportunidades
                para melhorias no design do sistema.
            </li>
        </ol>

        <br />
        <p>
            Ao aplicar a HTA dessa maneira, obtivemos um mapa das ações dos
            usuários, permitindo que o design da solução seja focado em melhoras
            os passos e resolver os problemas específicos enfrentados nas etapas
            de interação com o sistema.
        </p>

    </SectionComponent>
</template>

<script>
import SectionComponent from '../SectionComponent.vue';

export default {
    name: 'SectionTarefas',
    components: {
        SectionComponent
    }
}
</script>