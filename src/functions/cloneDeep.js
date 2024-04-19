const cloneDeep = obj => {
  // do not clone those type: null / 'undefined' / File
  if (obj == null || typeof obj != 'object' || obj instanceof File) return obj

  // Handle Date
  if (obj instanceof Date) {
    var copy = new Date()
    copy.setTime(obj.getTime())
    return copy
  }

  // Handle Array
  if (obj instanceof Array) {
    var copy = []
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = cloneDeep(obj[i])
    }
    return copy
  }

  // Handle Object
  if (obj instanceof Object) {
    var copy = {}
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = cloneDeep(obj[attr])
    }
    return copy
  }

  throw new Error("Unable to copy obj! Its type isn't supported.")
}

export default cloneDeep
