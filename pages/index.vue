<template>
  <div class="container mx-auto bg-gray-100 flex items-center justify-center">
    <ul class="flex flex-row">
      <li class="mr-8">
        <nuxt-link to="/kakezan">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="handleProceedToNext"
          >
            かけ算
          </button>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/warizan">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="handleProceedToNext"
          >
            わり算
          </button>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  overflow-y: scroll;
}

.text-kuku {
  font-size: 7rem;
}

.height100 {
  height: 100vh
}

.restart-button {
  position: absolute;
  bottom: 40px;
}

</style>
