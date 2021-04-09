/**
 * 对象深拷贝
 * @param object
 * @returns {*}
 */
export function DeepClone (object) {
  let str
  let newobj = object.constructor === Array ? [] : {}
  if (typeof object !== 'object') {
    return object
  } else if (window && window.JSON) {
    str = JSON.stringify(object)
    newobj = JSON.parse(str)
  } else {
    for (const i in object) {
      if (object.hasOwnProperty(i)) {
        newobj[i] = typeof object[i] === 'object' ? DeepClone(object[i]) : object[i]
      }
    }
  }
  return newobj
}

// 清除空格
export function ClearSpace (val) {
  return val.replace(/\s+/g, '')
}

// localStorage 统一处理异常
export const GetLocalStorage = function (key) {
	let _val = null
	try {
		_val = uni.getStorageSync(key)
	} catch (err) {
		console.log('get storage err', err)
	}
	return _val
}

export const SetLocalStorage = function (key, value) {
	let _val = null
	try {
		uni.setStorageSync(key, value)
		_val = true
	} catch (err) {
		console.log('set storage err', err)
	}
	return _val
}

export const RemoveLocalStorage = function (key) {
  let _val = null
  try {
  	uni.removeStorageSync(key)
  	_val = true
  } catch (err) {
  	console.log('remove storage err', err)
  }
  return _val
}
