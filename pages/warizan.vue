<template>
<div class="container mx-auto">
  <div class="flex items-center justify-center inner-wrapper">
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
            class="mr-12 btn btn-primary"
            @click="handleShowAnswer"
            >
            答え
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="handleProceedToNext"
            >
            つぎへ
          </button>
        </div>
        <div class="text-center mb-10">
          <span class="text-2xl" v-text="index+1" />
          /
          <span class="text-2xl" v-text="kukus.length" />
          <span v-text="`（のこり${kukus.length - index - 1}）`" />
        </div>
        <div class="flex flex-1 items-center justify-center mb-6">
          <button
            type="button"
            class="restart-button btn btn-error"
            @click="handleStartWithConfirm"
            >
            さいしょからやりなおす
          </button>
        </div>
      </main>
    </template>
    <template v-else-if="isStarted && index >= kukus.length">
      <div class="flex flex-1 items-center justify-center height100">
        <div>
          <button type="button" class="mb-10 btn btn-primary" @click="handleStart">
            おつかれさま！もう1回やる？
          </button>
          <div class="text-center">
            <span class="text" v-text="elapsedTimeString" />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-col items-center justify-center height100">
        <div class="h-10 text-4xl text-center mb-24">
          わり算
        </div>
        <button type="button" class="btn btn-primary" @click="handleStart">
          はじめる！
        </button>
      </div>
    </template>
  </div>
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
      isAnswerShown: false,
      elapsedTime: 0
    }
  },
  computed: {
    currentKuku () {
      return this.kukus[this.index]
    },
    currentAnswer () {
      return this.answers[this.index]
    },
    elapsedTimeString () {
      const micro = this.zeroPadding((parseInt(this.elapsedTime / 10) % 100), 2)
      const sec = this.elapsedTime / 1000.0
      const minute = parseInt(sec / 60)
      const second = parseInt(sec) % 60

      return `${minute}分 ${second}秒 ${micro}`
    }
  },
  watch: {
    index () {
      if (this.isStarted && this.index >= this.kukus.length) {
        clearInterval(this.timer)
      }
    }
  },
  created () {
  },
  methods: {
    zeroPadding (num, length) {
      return ('0000000000' + num).slice(-length)
    },
    handleStartWithConfirm () {
      const result = window.confirm('本当にやりなおす？')
      if (result) {
        this.handleStart()
      }
    },
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
        const answer = num1 * num2
        answers.push(num2)
        kukus.push(`${answer} ÷ ${num1}`)
      })

      this.kukus = kukus
      this.answers = answers
      this.isStarted = true
      this.index = 0
      this.elapsedTime = 0
      if (this.timer) {
        clearInterval(this.timer)
      }

      this.timer = setInterval(() => {
        this.elapsedTime += 10
      }, 10)
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
