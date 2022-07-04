<template>
<div class="container mx-auto">
  <div class="flex items-center justify-center inner-wrapper">
    <ul class="flex flex-row">
      <li class="mr-8">
          <nuxt-link to="/kakezan" class="btn btn-primary">
            かけ算
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/warizan" class="btn btn-primary">
          わり算
        </nuxt-link>
      </li>
    </ul>
  </div>
  </div>
</template>

<style scoped>
.inner-wrapper {
  height: calc(100vh - 80px);
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
