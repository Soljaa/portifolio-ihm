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
