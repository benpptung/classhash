'use strict'

module.exports = ClassHash

/**
 * @param  {string} hash
 * @return {function}
 */
function ClassHash(hash) {

  /**
   * @param  {object} classnames
   * @return {object}
   */
  return function(classnames) {

    var classes = {}
    Object.keys(classnames).forEach(function(key) {
      if (!classnames[key]) return
      if (typeof classnames[key] !== 'string') return classes[key] = key + hash
      classes[key] = classnames[key].split(/\s+/).filter(Boolean).map(str=> str + hash).join(' ')
    })

    return classes
  }
}
