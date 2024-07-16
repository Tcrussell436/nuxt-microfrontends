<script setup lang="ts">

const config = useAppConfig();

</script>

<template>
  <div class="sticky top-0 z-50 w-full flex-none transition-colors duration-500 backdrop-blur border-b border-slate-900/10 bg-white/95">

    <div class="sm:w-6/12 lg:w-9/12">
      <div class="py-4 lg:mx-0">

        <div class="relative flex items-center justify-center gap-2 mx-3">
          <div class="text-semibold text-2xl">
            {{ config.primevueLayer?.appName ?? "APP_NAME" }}
          </div>
          <div class="flex mx-auto">
            <Button text label="Example Page" severity="secondary" @click="navigateTo('/example_page')" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
