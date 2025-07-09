<template>
    <SectionComponent title="Personas e Cenários Problema"
                      icon="fa-user"
                      idname="personas">

        
        <p>
            <strong>Personas</strong> são
            <strong>personagens fictícios</strong> que criamos a partir de
            pesquisas com usuários reais. Elas nos ajudam a ter uma
            <strong>visão mais clara</strong> sobre quem usará a solução
            proposta. Esses personagens são essenciais para o time de design,
            pois permitem que a gente entenda as
            <strong>necessidades, dificuldades e expectativas</strong> de
            diferentes tipos de usuários. As personas funcionam como um
            <strong>guia</strong>, mostrando para quem o design está sendo
            realmente feito.
        </p>

        <p>
            É importante lembrar que as personas são baseadas em
            <strong>dados reais</strong>, coletados de diversas pessoas, mas
            <strong>não descrevem um usuário específico</strong>. Em vez disso,
            elas representam <strong>arquétipos</strong> dos usuários mais
            comuns, e até mesmo os extremos, quando necessário.
          </p>

          <h3>Como Chegamos a Essas Personas</h3>
          <p>
            Para criar essas personas, realizamos uma
            <strong
              >análise aprofundada dos dados coletados na etapa de
              imersão</strong
            >. Esse processo de análise foi feito passando pelas seguintes
            etapas:
          </p>
          
          <ul>
            <li>
              <strong>Organização e consolidação dos dados brutos</strong>:
              Agrupamos as informações da etapa anterior em um formato
              centralizado e de fácil consulta.
            </li>

            <li>
              <strong>Identificação de padrões e semelhanças</strong>:
              Analisamos os dados para encontrar tendências em comportamentos,
              frustrações recorrentes, objetivos e motivações compartilhadas,
              além de opiniões e atitudes semelhantes sobre o processo atual ou
              uma solução ideal. <br />
              Por exemplo, um padrão identificado nas respostas sobre
              dificuldades foi a
              <strong
                >"falta de clareza e centralização das informações sobre o
                processo de atividades complementares"</strong
              >. Várias respostas indicam dúvidas sobre "para onde enviar",
              "quantas horas cada certificado vale", "regras de horas", "quando
              enviar", e a dificuldade em "encontrar todas as informações
              necessárias em um único veículo de informação". Esse padrão sugere
              uma forte necessidade por um guia claro e um portal unificado.
            </li>

            <li>
              <strong>Criação de segmentos de usuários</strong>: Com base nos
              padrões identificados, definimos
              <strong>grupos distintos de usuários</strong>. Cada grupo
              representou um conjunto de características, comportamentos, dores
              e objetivos que o diferenciava dos demais.<br />
              Aqui notamos que o principal fator de segmentação entre os
              usuários era o <strong>tempo de curso</strong>. Alunos em estágios
              semelhantes do curso tendiam a ter experiências parecidas com as
              atividades complementares. Estudantes no início do curso
              frequentemente relatavam a
              <strong>falta de informações claras sobre as regras de ACs</strong
              >, enquanto aqueles próximos de concluir (ou que já concluíram)
              suas ACs apontavam problemas relacionados ao
              <strong
                >processo de entrega e contabilização das atividades</strong
              >.
            </li>

            <li>
              <strong>Desenvolvimento das personas</strong>: Para cada segmento,
              foi criada uma persona detalhada, incluindo um nome fictício,
              dados demográficos relevantes, um breve histórico, personalidade,
              objetivos, dores, uma citação que a representa e um cenário de
              uso. O foco foi nos detalhes mais importantes para o projeto,
              evitando informações desnecessárias.
            </li>

            <li>
              <strong>Validação e refinamento</strong>: As personas foram
              compartilhadas e discutidas com a equipe para garantir que
              realmente representam os usuários da pesquisa e são úteis para as
              decisões de design, permitindo ajustes e refinamentos conforme o
              projeto avança.
            </li>
          </ul>
          <p>
            Com base em todas essas informações consolidadas e analisadas,
            chegamos às personas a seguir. Nosso objetivo foi desenvolver
            personagens que
            <strong>abrangem a diversidade de todos os nossos usuários</strong>
            em potencial, representando alunos em
            <strong>diferentes fases do curso</strong> e com
            <strong>experiências variadas</strong> em relação às atividades
            complementares.
          </p>
          <br />
          <h3>Personas</h3>
          <br />
          <CarouselContainer>
            <CarouselSlide>
                <PersonaLarissa></PersonaLarissa>
            </CarouselSlide>
            <CarouselSlide>
                <PersonaLucas></PersonaLucas>
            </CarouselSlide>
            <CarouselSlide>
                <PersonaNatalia></PersonaNatalia>
            </CarouselSlide>
            <CarouselSlide>
                <PersonaMarcelo></PersonaMarcelo>
            </CarouselSlide>
          </CarouselContainer>
    </SectionComponent>
</template>

<script>
import CarouselContainer from '../Carousel/CarouselContainer.vue';
import CarouselSlide from '../Carousel/CarouselSlide.vue';
import PersonaLarissa from '../Personas/PersonaLarissa.vue';
import PersonaLucas from '../Personas/PersonaLucas.vue';
import PersonaMarcelo from '../Personas/PersonaMarcelo.vue';
import PersonaNatalia from '../Personas/PersonaNatalia.vue';
import SectionComponent from '../SectionComponent.vue';

export default {
    name: 'SectionPersonas',
    components: {
        SectionComponent,
        CarouselContainer,
        CarouselSlide,
        PersonaLarissa,
        PersonaLucas,
        PersonaMarcelo,
        PersonaNatalia
    }
}
</script>