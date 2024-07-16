<script setup lang="ts">

const { data } = await useAPI('/example');

</script>

<template>
  <Card>
    <template #title>
      Home
    </template>
    <template #content>
      Example App 2 index page, using Card component from primevue-layer.
    </template>
  </Card>
</template>

<style scoped>

</style>