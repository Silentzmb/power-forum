import Vue from 'vue'
import Message from './index.vue'

const MessageExtend = Vue.extend(Message)

Message.install = function (options) {
  let _opt = {}
  
  if (options && Object.keys(options).length) {
    _opt = options
  }

  let instance = new MessageExtend({
    data: _opt
  }).$mount()

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.show = true
  })
}

export default Message
