# classhash

  npm install benpptung/classhash -S

# Usage

```
const classnames = require('classhash')('whatever-hash-here-to-make-class-no-global-polute')

const classes = classnames({
  container: 1,
  wrapper: 'wrapper ' +  this.props.hasHover,
  date-fa-icon: _=> {
    return this.state.searching
      ? 'fa fa-spinner fa-spin fa-fw'
      : 'fa fa-search fa-fw'
  }
})

prototype.render = function() {

  return (
    <div className={this.classes.container}>
      <div className={this.classes.wrapper}></div>
    </div>
  )
}

```

- create all classes at a time
- add `hash` to the class name ( only the key name)
- can use function to generate classname dynamically
