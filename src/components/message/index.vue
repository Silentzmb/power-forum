<template>
  <transition name="up-down-transform">
    <div 
      v-if="show"
      class="message-container">
      <template v-if="type === 'loading'">
        <div class="message-content">
          <i class="anticon anticon-loading">
            <svg viewBox="0 0 1024 1024" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="anticon-spin">
              <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
            </svg>
          </i>
          <div class="text-content">{{ content }}</div>
        </div>
      </template>
      <template v-else>
        <div
          :class="[type, show ? 'visiable' : '']"
          class="message-content">
          <div class="text-content">{{ content }}</div>
        </div>
      </template>
    </div>
  </transition>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
      type: '', // success,warning,error
      content: '',
      duration: 2000,
      show: false
    }
  },

  mounted () {
    this.closeDelay()
  },

  methods: {
    closeDelay () {
      if (this.duration === 0) return
      setTimeout(() => {
        this.close()
      }, this.duration)
    },

    close () {
      this.show = false
    }
  }
}
</script>

<style scoped lang="scss">
  .message-container {
    .message-content {
      position: fixed;
      // top: 10vh;
      left: 50%;
      transform: translateX(-50%);
      max-width: 380px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: #EBEEF5;
      padding: 15px 15px 15px 20px;
      background-color: #edf2fc;
      border-radius: 4px;
      overflow: hidden;
      z-index: 99999;
      opacity: 1;
      box-shadow: 2px 2px 8px rgb(0 0 0 / 15%);
      .anticon {
        font-size: 16px;
        .anticon-spin {
          animation: loadingCircle .8s infinite linear;
        }
      }
      .text-content {
        flex: 1;
        color: #909399;
        margin-left: 10px;
      }
      &.visiable {
      }
      &.success {
        background-color: #f0f9eb;
        border-color: #e1f3d8;
        .text-content {
          color: #67C23A;
        }
      }
      &.warning {
        background-color: #fdf6ec;
        border-color: #faecd8;
        .text-content {
          color: #E6A23C;
        }
      }
      &.error {
        background-color: #fef0f0;
        border-color: #fde2e2;
        .text-content {
          color: #F56C6C;
        }
      }
    }
  }
  
  @keyframes loadingCircle {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
