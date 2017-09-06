'use strict'

module.exports = ClassHash

/**
 * Add hash to the class, or simply no hash to disable it
 * @param  {string} hash
 * @return {function}
 */
function ClassHash(hash) {

  hash = typeof hash == 'string' && hash ? hash : ''

  /**
   * @param  {object} classnames
   * @return {object}
   */
  return function(classnames) {

    var classes = {}
    Object.keys(classnames).forEach(function(key) {

      // if null, 0, false, NaN, undefined, no hash
      // if (!classnames[key]) {
      //   classes[key] = key
      //   return
      // }

      // if classnames[key] is `function`
      if (typeof classnames[key] === 'function') {
        Object.defineProperty(classes, key, {
          enumerable: true,
          get: function() {

            var dyna = classnames[key]()
            dyna = dyna || '' // if undefined or false, ... empty string
            return key + hash + ' ' + dyna
          }
        })
      }

      // if classnames[key] is `string`
      if (typeof classnames[key] === 'string') {
        classes[key] = classnames[key].split(/\s+/).filter(Boolean)
          .map(function(str) { return str === key ? str + hash : str })
          .join(' ')
      }

      // if classnames[key] is `array`
      if (Array.isArray(classnames[key])) {
        classes[key] = classnames[key]
          .map(function(str) { return str === key ? str + hash : str})
          .join(' ')
      }

      // if (typeof classnames[key] == 'number' && !!classnames[key]) {
      //   classes[key] = key + hash
      // }

      // must have hashed key as class
      if (!~classes[key].indexOf(key + hash)) classes[key] += ' ' + key + hash
    })

    return classes
  }
}
