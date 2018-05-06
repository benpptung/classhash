# classhash

  npm install benpptung/classhash -S

# Usage

```
const classnames = require('classhash')('whatever-hash-here-to-make-class-no-global-polute')

const classes = classnames({
  container: this.props.className,  // it can automatically combine class strings
  wrapper: 'wrapper ' +  this.props.hasHover,
  date-fa-icon: _=> {
    return this.state.searching
      ? 'fa fa-spinner fa-spin fa-fw'
      : 'fa fa-search fa-fw'
  }
})

prototype.render = function() {

  let c = this.classes

  return (
    <div className={c['container']}>
      <div className={c['wrapper']}>
        <i className={c['date-fa-icon']} />
      </div>
    </div>
  )
}

```

- create all classes at a time
- add `hash` to the class name ( only the key name)
- can use function to generate classname dynamically
