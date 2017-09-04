'use strict'

const classnames = require('..')('blahblah')
const inspect = require('util').inspect

const state = {
  searching: true
}

var classes = classnames({
  'header': 1,
  'tabs-wrapper': 'bounceInDown',
  'tabs-panel': 1,
  'tabs-panel-inner': 1,
  'datepickr-container': 1,
  'datepickr': 1,
  'date-left': 1,
  'date-right': 1,
  'date-arrow': 1,
  'date-submit': 1,
  'date-fa-icon': _ => {
    return state.searching
      ? 'fa fa-spinner fa-spin fa-fw'
      : 'fa fa-search fa-fw'
  },
  'list-layer': 1,
  'detail-layer': 1
})

console.log(inspect(classes)) // eslint-disable-line no-console

console.log(classes['date-fa-icon']) // eslint-disable-line no-console
