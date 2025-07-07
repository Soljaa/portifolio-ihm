<template>
    <SectionComponent itemid="questionario"
                      title="Questionário com Usuários" 
                      icon="fa-poll">
        
        <p>Formulário:</p>
          <div v-html="iframe_formulario"></div>

          <p>Resultados principais com visualização gráfica:</p>
          <div class="chart">
            
            <div v-for="item in forms_iframes" :key="item">
                <div v-html="item"></div>
            </div>

            <section class="section-bg">
              <p>
                <strong
                  >Qual sua principal dificuldade considerando todo o processo
                  de organização e envio dos certificados?</strong
                >
              </p>
              <div class="respostas-scroll">
                <ul v-for="resposta in respostas" :key="resposta">
                    <li>{{ resposta }}</li>
                </ul>
              </div>
            </section>
          </div>
    </SectionComponent>
</template>

<script>
import SectionComponent from '../SectionComponent.vue';



export default{
    name: 'SectionQuestionario',
    components: {
        SectionComponent
    },
    setup(){
        const iframe_formulario = `<iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSco8sg_8Mc9_6MHX5CJ6HhNGqrlHUSL__eKLfUUY8vM6CFtyA/viewform?embedded=true"
            width="640"
            height="4657"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >Carregando…</iframe>`

        const forms_iframes = [
            `<iframe
                width="362"
                height="225"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=54903063&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=1214341529&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=985867723&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=109229856&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=374904570&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=1285379171&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="642"
                height="453"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=810323748&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="600"
                height="376"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=727819233&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=1099391427&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="869"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=1082918789&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="577"
                height="356"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=1310745634&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="609"
                height="376"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=1028560626&amp;format=interactive"
            ></iframe>`,
            `<iframe
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_g5Y1lEgJpftk-CUFb6PL-Bt4VhKGnC5NWNjc6qdhemv7ERRwTgbPkmR1M8ZacuC0ffStt1_yEBcG/pubchart?oid=657019225&amp;format=interactive"
            ></iframe>` 
        ]

        const respostas = [
                "Não sei para onde tenho que envia-los e quantas horas cada certificado pode me dar.",
                "Não é muito intuitivo, muito menos incentivado durante os primeiros períodos de curso. Depois se torna uma correria",
                "A impossibilidade de enviar os certificados e contabilizar as horas de atividades complementares antes do último período...",
                "As vezes tem certificados que não ficam disponíveis",
                "Tudo é um tanto abstrato.",
                "Como que devem ser separados e enviados os comprovantes.",
                "Acho difícil encontrar as regras em relação às horas",
                "A emissão de alguns certificados demorarem demais...",
                "Ter que salvar tudo antes para enviar de uma só vez ao final do curso...",
                "Ter que enviar os certificados apenas ao final do curso...",
                "Falta de comunicação e integração no site da UFF.",
                "Só fiquei ciente das regras beeem depois de ingressar",
                "Salvar",
                "Poderiam ser feitos por período...",
                "Acho que seria mais fácil poder ir enviando desde o começo...",
                "Guardar os certificados",
                "Falta de orientação.",
                "Conseguir os certificados",
                "Não encontro informações sobre quando devo enviar os certificados...",
                "1. conseguir os certificados e 2. saber para o que/quanto eles contam",
                "Obter informações sobre as horas complementares e inscrição",
                "Acho que deveria ter uma página do id uff só para isso",
                "O fato de que tem que guardar tudo para só no final saber quantas horas vou ganhar de fato",
                "Justamente saber quais tem e quais não tem disponíveis ou próximos de ocorrer.",
                "Encontrar todas as informações necessárias em um único veículo de informação...",
                "Estou me formando agora, e a parte mais difícil foi ir atrás do certificado...",
                "Falta de uma ferramenta institucional que seja prática e funcional.",
                "Não sei exatamente como funciona",
                "Saber o quanto cada atividade vale em horas complementares",
                "Não faço ideia de como funciona",
                "Que eu não posso enviar \"parcelado\"...",
                "Saber quais horas contam, o limite de cada categoria e como conseguir as que não são complementares",
                "Forma de contabilizar e armazenar os certificados",
                "Acho que manter um acompanhamento de tudo...",
                "Calcular quantas horas tenho/faltam. Devia estar na plataforma da UFF",
                "A não-existência de uma plataforma de atualização automática...",
                "Acho que poderia ter uma forma de contabilizar as horas ao longo do curso...",
                "Sempre achei confuso o \"quando posso pedir\" os certificados e a quem perguntar para consegui-los.",
                "O fato de não poder enviar ao longo do curso..."
        ]
        

        return {iframe_formulario, forms_iframes, respostas}
    }
}
</script>