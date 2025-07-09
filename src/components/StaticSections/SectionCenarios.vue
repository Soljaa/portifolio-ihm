<template>
    <SectionComponent title="Cenários Problema" itemid="cenarios" icon="fa-file-alt">
        <p>
        Um <strong>cenário</strong> é uma história detalhada sobre pessoas
        realizando uma atividade específica. Ele deve ser concreto, rico em
        detalhes contextuais e descrever situações de uso. É uma ferramenta
        que pode ser utilizada em conjunto com as personas para aprofundar o
        entendimento sobre as interações dos usuários com um sistema.
        </p>

        <br />

        <h3>Como os Cenários Ajudam no Design da Solução</h3>

        <p>
        A utilização de cenários é fundamental para o processo de design por
        várias razões importantes:
        </p>

        <ul>

        <li>
            <strong>Destacam Objetivos</strong> Cenários evidenciam os
            objetivos sugeridos pela aparência e pelo comportamento de um
            sistema, ajudando a focar o design no que o usuário realmente quer
            alcançar.
        </li>

        <li>
            <strong>Levantam Questões e Novas Proposições</strong>: Quando um
            aspecto não está bem descrito no cenário, ele provoca perguntas do
            tipo "e se", estimulando a equipe a buscar respostas que completam
            a história e geram novas ideias e proposições para a solução.
        </li>

        <li>
            <strong>Feedback do Usuário Precoce</strong>: Permitem obter
            feedback valioso dos usuários sem a necessidade de construir um
            protótipo funcional completo, o que economiza tempo e recursos.
        </li>

        <li>
            <strong>Avaliação de Alternativas de Design</strong>: Ajuda a
            equipe a se colocar no lugar do usuário, avaliando constantemente
            as alternativas de design em face dos cenários e personas, o que
            pode reduzir a frequência de testes de usabilidade mais caros.
        </li>

        <li>
            <strong>Resolução de Discordâncias</strong>: Cenários, em conjunto
            com as personas, podem ser usados para resolver discordâncias
            sobre decisões de design, referenciando as necessidades e
            comportamentos dos usuários.
        </li>

        </ul>

        <br />

        <h3>Como Foram Criados os Cenários</h3>

        <p>
        Com base nas personas que criamos e nos dados levantados na etapa de
        imersão (questionários, entrevistas, desk research), desenvolvemos
        os cenários problema seguindo os seguintes passos:
        </p>

        <br />

        <ol>
            <li>
                <strong>Definição do Objetivo do Cenário</strong>: Para cada
                persona relevante, foram identificados um ou mais objetivos que
                ela tenta alcançar ou um problema que enfrenta no contexto das
                atividades complementares.
            </li>

            <li>
                <strong>Construção da Narrativa</strong>: Escrevemos uma história
                detalhada e sequencial, que inclui contexto da situação, atores
                envolvidos, bem como objetivos, planejamento, ações e avaliação da
                persona, e também os eventos decorridos das ações.
            </li>

            <li>
                <strong>Identificação de Pontos Problemáticos</strong>: Durante a
                escrita do cenário, foram listados pontos de problemas que
                surgiram. Por exemplo, a dificuldade em encontrar informações
                claras e centralizadas, a burocracia do processo de envio no final
                do curso, ou a falta de acompanhamento das horas ao longo do
                tempo.
            </li>

            <li>
                <strong>Levantamento de Perguntas "E Se..."</strong>: O cenário
                resultou em perguntas que levaram a novas proposições de design,
                como: "E se o sistema mostrasse um gráfico com as horas de
                atividades já concluídas?".
            </li>
        </ol>

        <br />

        <p>
        Ao construir esses cenários, tivemos uma compreensão ainda mais
        profunda dos desafios enfrentados pelos nossos usuários, o que nos
        permitiu projetar uma solução mais intuitiva e eficaz, alinhada às
        necessidades reais das personas.
        </p>
    </SectionComponent>
</template>

<script>
import SectionComponent from '../SectionComponent.vue';

export default {
    name: 'SectionCenarios',
    components: {
        SectionComponent
    }
}
</script>