<template>
  <div class="container mx-auto bg-gray-100">
    <template v-if="isStarted && index < kukus.length">
      <main class="p-4 sm:p-6 lg:p-8 ">
        <div class="text-center mb-6">
          <div class="text-kuku" v-text="currentKuku" />
        </div>
        <div class="mb-6">
          <template v-if="isAnswerShown">
            <div class="h-10 text-2xl text-center" v-text="currentAnswer" />
          </template>
          <template v-else>
            <div class="h-10" />
          </template>
        </div>
        <div class="flex lex-1 items-center justify-center mb-6">
          <button
            type="button"
            class="mr-6 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="handleShowAnswer"
          >
            答え
          </button>
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="handleProceedToNext"
          >
            つぎへ
          </button>
        </div>
        <div class="text-center">
          <span class="text-2xl" v-text="index+1" />
          /
          <span class="text-2xl" v-text="kukus.length" />
          <span v-text="`（のこり${kukus.length - index - 1}）`" />
        </div>
        <div class="flex lex-1 items-center justify-center mb-6">
          <button type="button" class="restart-button inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" @click="handleStart">
            さいしょからやりなおす
          </button>
        </div>
      </main>
    </template>
    <template v-else-if="isStarted && index >= kukus.length">
      <div class="flex lex-1 items-center justify-center height100">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="handleStart">
          おつかれさま！もう1回やる？
        </button>
      </div>
    </template>
    <template v-else>
      <div class="flex lex-1 items-center justify-center height100">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="handleStart">
          はじめる！
        </button>
      </div>
    </template>
  </div>
</template>
  </div>
</template>

<script>
import { shuffle } from 'lodash-es'

export default {
  components: {
  },
  props: {
  },
  data () {
    return {
      kukus: [],
      answers: [],
      index: 0,
      isStarted: false,
      isAnswerShown: false
    }
  },
  computed: {
    currentKuku () {
      return this.kukus[this.index]
    },
    currentAnswer () {
      return this.answers[this.index]
    }
  },
  created () {
  },
  methods: {
    handleStart () {
      const base = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      const array = []
      base.forEach((num1) => {
        base.forEach((num2) => {
          array.push([num1, num2])
        })
      })

      const kukus = []
      const answers = []

      shuffle(array).forEach((vals) => {
        const num1 = vals[0]
        const num2 = vals[1]
        answers.push(num1 * num2)
        kukus.push(`${num1} x ${num2}`)
      })

      this.kukus = kukus
      this.answers = answers
      this.isStarted = true
      this.index = 0
    },
    handleShowAnswer () {
      this.isAnswerShown = !this.isAnswerShown
    },
    handleProceedToNext () {
      this.index += 1
      this.isAnswerShown = false
    }
  }
}
</script>

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
