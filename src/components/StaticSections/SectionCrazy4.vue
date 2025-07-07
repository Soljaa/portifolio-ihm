<template>
    <SectionComponent title="Workshop de Ideação: Crazy 4"
                      icon="fa-lightbulb"
                      itemid="crazy4">

        <p>
            O Crazy 8 é uma técnica de
            <strong>brainstorming</strong> e
            <strong>prototipagem rápida</strong> muito utilizada no design
            thinking, UX design, e em workshops de ideação. É uma forma rápida e
            eficaz de gerar <strong>múltiplas ideias diferentes</strong> em um
            curto período de tempo.
        </p>

        <p>
            Na etapa de ideação, realizamos uma adaptação dessa técnica chamada
            <strong>Crazy 4</strong>. Essa atividade foi realizada em aula, onde
            fomos instruídos a pensar individualmente em 4 soluções diferentes
            para resolver o problema levantado no HMW(How May We).
        </p>

        <br />

        <h3>Tipos de Soluções</h3>

        <p>
            Cada uma das soluções devia ter um foco em um dos aspectos a seguir:
        </p>

        <ul>
            <li>
                <strong>Uma solução cara</strong>: Como chegar numa solução se
                orçamento não fosse o problema.
            </li>
            <li>
                <strong>Uma solução barata e rápida</strong>: Como chegar numa
                solução usando o menor orçamento possível.
            </li>
            <li>
                <strong>Uma solução inspirada em jogos</strong>: Como chegar numa
                solução que fosse baseada em jogos e gameficação.
            </li>
            <li>
                <strong>Uma solução baseada em robôs/IoT</strong>: Como chegar
                numa solução que utilizasse robôs ou Internet das Coisas.
            </li>
        </ul>

        <br />

        <h3>Ideias Selecionadas para Desenvolvimento</h3>
        <p>
            Depois de cada membro do grupo chegar nas suas soluções, nos
            juntamos e discutimos sobre quais ideias podiam ser adaptadas na
            nossa solução.
        </p>

        <br />

        <p>As seguintes ideias foram escolhidas:</p>
        <ol>
            <li>
                <strong>Validação por QR Code:</strong> Uma solução que permitiria
                ao usuário ler um QR Code em uma atividade (como uma palestra)
                para obter seu certificado diretamente e ter essa atividade salva
                automaticamente no sistema.
            </li>
            <li>
                <strong
                >Preenchimento Automático por Upload de Certificado:</strong
                >
                Uma funcionalidade onde o usuário poderia registrar uma atividade
                fazendo o upload de um certificado, e o sistema utilizaria
                tecnologias "robóticas" (como OCR e IA) para preencher as
                informações relevantes automaticamente, agilizando o processo.
            </li>
        </ol>
        <br />

        <p>
            Essas ideias se mostraram realmente úteis quando integradas no nosso
            design, melhorando a experiência do usuário entregando maneiras mais
            satisfatórias de resolver os seus problemas.
        </p>
        <p>
            O Crazy 8 é uma técnica de
            <strong>brainstorming</strong> e
            <strong>prototipagem rápida</strong> muito utilizada no design
            thinking, UX design, e em workshops de ideação. É uma forma rápida e
            eficaz de gerar <strong>múltiplas ideias diferentes</strong> em um
            curto período de tempo.
        </p>

        <p>
            Na etapa de ideação, realizamos uma adaptação dessa técnica chamada
            <strong>Crazy 4</strong>. Essa atividade foi realizada em aula, onde
            fomos instruídos a pensar individualmente em 4 soluções diferentes
            para resolver o problema levantado no HMW(How May We).
        </p>

        <br />
        <h3>Tipos de Soluções</h3>
        <p>
            Cada uma das soluções devia ter um foco em um dos aspectos a seguir:
        </p>

        <ul>
            <li>
                <strong>Uma solução cara</strong>: Como chegar numa solução se
                orçamento não fosse o problema.
            </li>
            <li>
                <strong>Uma solução barata e rápida</strong>: Como chegar numa
                solução usando o menor orçamento possível.
            </li>
            <li>
                <strong>Uma solução inspirada em jogos</strong>: Como chegar numa
                solução que fosse baseada em jogos e gameficação.
            </li>
            <li>
                <strong>Uma solução baseada em robôs/IoT</strong>: Como chegar
                numa solução que utilizasse robôs ou Internet das Coisas.
            </li>
        </ul>

        <br />

        <h3>Ideias Selecionadas para Desenvolvimento</h3>
        <p>
            Depois de cada membro do grupo chegar nas suas soluções, nos
            juntamos e discutimos sobre quais ideias podiam ser adaptadas na
            nossa solução.
        </p>

        <br />
        
        <p>As seguintes ideias foram escolhidas:</p>
        <ol>
            <li>
                <strong>Validação por QR Code:</strong> Uma solução que permitiria
                ao usuário ler um QR Code em uma atividade (como uma palestra)
                para obter seu certificado diretamente e ter essa atividade salva
                automaticamente no sistema.
            </li>
            <li>
                <strong
                >Preenchimento Automático por Upload de Certificado:</strong
                >
                Uma funcionalidade onde o usuário poderia registrar uma atividade
                fazendo o upload de um certificado, e o sistema utilizaria
                tecnologias "robóticas" (como OCR e IA) para preencher as
                informações relevantes automaticamente, agilizando o processo.
            </li>
        </ol>

        <br />

        <p>
            Essas ideias se mostraram realmente úteis quando integradas no nosso
            design, melhorando a experiência do usuário entregando maneiras mais
            satisfatórias de resolver os seus problemas.
        </p>

        <CarouselContainer>
            <CarouselSlide>
                <img src="../../assets/images/crazy4-1.jpeg" alt="Screenshot" />
                <p>
                  <strong>Soluções do Daniel</strong>
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/crazy4-2.jpeg" alt="Screenshot" />
                <p>
                  <strong>Soluções do Rodrigo</strong>
                </p>
            </CarouselSlide>
            <CarouselSlide>
                <img src="../../assets/images/crazy4-5.jpeg" alt="Screenshot" />
                <p>
                  <strong>Ideias Aproveitadas</strong>
                </p>
            </CarouselSlide>
        </CarouselContainer>
    </SectionComponent>
</template>

<script>
import CarouselContainer from '../Carousel/CarouselContainer.vue';
import CarouselSlide from '../Carousel/CarouselSlide.vue';
import SectionComponent from '../SectionComponent.vue';


export default {
    name: 'SectionCrazy4',
    components: {
        CarouselContainer,
        CarouselSlide,
        SectionComponent,
    }
}

</script>