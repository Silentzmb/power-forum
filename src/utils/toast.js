import Message from '@/components/message'

const $message = Message.install

/* 配置全局消息弹窗 */
class ToastClass {
  constructor () {
    this.duration = 1200
  }

  // 弹框提示
  show(msg = '提示', duration = this.duration) {
    $message({
      content: msg,
      duration
    })
  }

  // 成功弹框
  success (msg, duration = this.duration) {
    $message({
      content: msg,
      duration,
      type: 'success'
    })
  }
	
	hide () {
		// Message.
	}

  // 显示菊花
  loading (msg = '加载中...') {
    $message({
      content: msg,
      duration: 0,
      type: 'loading'
    })
  }

  // // 关闭
  // hideLoading () {
  //   uni.hideLoading()
  // }

  static getInstance () {
    if (!ToastClass.instance) {
      ToastClass.instance = new ToastClass()
    }
    return ToastClass.instance
  }
}

export default ToastClass
