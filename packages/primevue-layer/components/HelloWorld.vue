<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <Card>
      <template #title>
        <h1>Hello World!</h1>
      </template>
      <template #content>
        <pre>{{ myLayer }}</pre>
      </template>
    </Card>
  </div>
</template>
