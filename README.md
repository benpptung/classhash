# classhash

  npm install benpptung/classhash -S

# Usage

```
const classnames = require('classhash')('whatever-hash-here-to-make-class-no-global-polute')

const classes = classnames({
  container: 1,
  wrapper: 'wrapper ' +  this.props.hasHover
})

prototype.render = function() {

  return (
    <div className={this.classes.container}>
      <div className={this.classes.wrapper}></div>
    </div>
  )
}

```
