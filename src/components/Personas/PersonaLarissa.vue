<template>
<div class="persona">
    <header class="portfolio-header">
    <h2 class="portfolio-title">Larissa Alves</h2>
    </header>

    <div class="profile-main-content">
    <div class="left-column">
        <div class="persona-image-container">
        <img
            src="@/assets/images/larissa.jpg"
            alt="Larissa Alves"
            class="persona-image"
        />
        </div>
        <p class="motivation-quote">
        "Preciso começar a me planejar agora!"
        </p>

        <div class="persona-details-card">
        <p>Idade: <strong>19</strong></p>
        <p>Curso: <strong>Ciência da Computação</strong></p>
        <p>Período: <strong>2º Período</strong></p>
        <p>
            Cidade:
            <strong>Rio de Janeiro, Rio de Janeiro</strong>
        </p>
        <p>Status: Usuário Primário</p>
        </div>

        <div class="skills-container">
        <div class="skill-item">
            <span class="skill-label">Ferramentas Digitais</span>
            <div class="skill-bar-outer">
            <div
                class="skill-bar-inner"
                style="width: 70%"
            ></div>
            </div>
        </div>
        <div class="skill-item">
            <span class="skill-label"
            >Resolução de Problemas</span
            >
            <div class="skill-bar-outer">
            <div
                class="skill-bar-inner"
                style="width: 65%"
            ></div>
            </div>
        </div>
        <div class="skill-item">
            <span class="skill-label">Organização Pessoal</span>
            <div class="skill-bar-outer">
            <div
                class="skill-bar-inner"
                style="width: 90%"
            ></div>
            </div>
        </div>
        <div class="skill-item">
            <span class="skill-label">Burocracia</span>
            <div class="skill-bar-outer">
            <div
                class="skill-bar-inner"
                style="width: 40%"
            ></div>
            </div>
        </div>
        <div class="skill-item">
            <span class="skill-label">Sociabilidade</span>
            <div class="skill-bar-outer">
            <div
                class="skill-bar-inner"
                style="width: 55%"
            ></div>
            </div>
        </div>
        <div class="skill-item">
            <span class="skill-label">Gestão de Tempo</span>
            <div class="skill-bar-outer">
            <div
                class="skill-bar-inner"
                style="width: 85%"
            ></div>
            </div>
        </div>
        </div>
    </div>

    <div class="middle-column">
        <div class="tag-container">
        <ul>
            <li>Organizada</li>
            <li>Estudiosa</li>
            <li>Prestativa</li>
        </ul>
        </div>
        <div class="content-block">
        <h2 class="section-title">Objetivos</h2>
        <ul>
            <li>Entrar em um projeto de extensão.</li>
            <li>Ser aprovada nas matérias atuais.</li>
            <li>
            Aprender a programar além do básico das primeiras
            aulas.
            </li>
        </ul>
        </div>

        <div class="content-block">
        <h2 class="section-title">Frustrações</h2>
        <ul>
            <li>
            Ela sente que só fica sabendo sobre alguns eventos
            depois que eles acabam.
            </li>
            <li>
            Ela quer planejar quais atividades complementares
            ela quer fazer, mas fazer os cálculos manualmente é
            trabalhoso.
            </li>
            <li>
            Não entende o funcionamento de processos como a
            inscrição em matérias no período de ajustes,
            trancamento e envio de horas complementares.
            </li>
        </ul>
        </div>

        <div class="content-block persona-bio">
        <h2 class="section-title">Bio</h2>
        <p>
            Larissa Alves entrou na universidade há pouco tempo e
            ainda não conhece todas as opções de atividades fora
            da sala de aula. Ela já ouviu falar da empresa júnior
            e assistiu palestras em tópicos de seu interesse, mas
            não está se preocupando com horas complementares
            ainda. Metódica e responsável, ela está acostumada a
            usar aplicativos de organização pessoal, seja para
            estudos, finanças ou sua rotina diária.
        </p>
        </div>
        <div class="content-block">
        <h2 class="section-title">Relacionamentos</h2>
        <ul>
            <li>Costuma tirar dúvidas com os veteranos.</li>
            <li>
            Participa de alguns grupos de Whatsapp/Telegram da
            universidade
            </li>
        </ul>
        </div>
    </div>
    <div class="right-column">
        <div class="content-block">
        <h2 class="section-title">Expectativas</h2>
        <ul>
            <li>
            Espera que a aplicação tenha um design amigável e
            moderno.
            </li>
            <li>
            Quer poder experimentar com diferentes combinações
            de atividades e horas realizadas em cada.
            </li>
            <li>
            Espera poder marcar quais atividades foram
            concluídas conforme ela avança no curso.
            </li>
        </ul>
        </div>

        <div class="content-block">
        <h2 class="section-title">Requisitos</h2>
        <ul>
            <li>
            A interface deve funcionar bem em dispositivos
            mobile.
            </li>
            <li>
            Deve ser fácil incluir, remover e alterar as horas
            de uma atividade.
            </li>
            <li>
            O sistema deve apresentar para ela todas as opções
            de atividade possíveis.
            </li>
        </ul>
        </div>

        <div class="content-block">
        <h2 class="section-title">Tarefas Críticas</h2>
        <ul>
            <li>
            Planejar quando ela deve começar um estágio, projeto
            de extensão ou iniciação científica.
            </li>
            <li>
            Determinar quantas atividades ela tem q realizar no
            mínimo para ser aprovada.
            </li>
        </ul>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: "PersonaLarissa"
}
</script>