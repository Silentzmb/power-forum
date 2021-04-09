/* 配置全局变量，本地缓存字段等 */

// http 连接相关
export function BASE_HTTP_PARAMS () {
  // 是否是开发环境
  const isDevelopment = true

  // 正式环境
  let baseUrl1 = ''
  let baseUrl2 = ''

  if (isDevelopment) {
    // 测试环境
    baseUrl1 = 'http://8.129.214.72:5049/'
    baseUrl2 = 'http://8.129.214.72:5010/'
  }

  return {
    baseUrl1,
		baseUrl2
  }
}

