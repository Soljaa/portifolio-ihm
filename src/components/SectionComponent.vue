<template>

<section id="{{ idname }}">
    <div class="section-bg">
        <h2><i class="fas {{icon}}"></i> {{ title }}</h2>

        <slot>

        </slot>
    </div>
</section>

</template>

<script>
export default{
    name: 'SectionComponent',
    props: ['title', 'icon', 'idname'],
}
</script>

<style scoped>
    p {
        text-indent: 2rem;
        margin-bottom: 5px;
    }

    img {
        max-width: 100%;
    }

    section h2 {
        color: var(--color-primary);
        margin-bottom: 2rem;
        font-size: 2.2rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        position: relative;
    }

    section h2::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 50px;
        height: 4px;
        background-color: var(--color-accent);
        border-radius: 2px;
    }

    section h3 {
        color: var(--color-accent);
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        margin-top: 10px;
        position: relative;
    }

    section h2 i {
        color: var(--color-accent);
    }

    section p,
    section ul,
    section li {
        color: var(--text-light);
        font-size: 1.1rem;
    }

    .section-bg {
        background-color: var(--bg-white);
        border-radius: 16px;
        padding: 3rem;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    }

    .image-container {
        margin: 2rem 0;
        text-align: center;
    }

    .image-container img {
        max-width: 100%;
        border-radius: 12px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    iframe {
        margin-top: 2rem;
        height: 400px;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
        justify-content: center;
        align-items: center;
    }

    .chart {
        margin-top: 2rem;
        text-align: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>