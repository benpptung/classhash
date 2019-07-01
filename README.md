# classhash

  npm install benpptung/classhash -S

# Usage

```
const classnames = require('classhash')('whatever-hash-here-to-make-class-no-global-polute')

const classes = classnames({

  // it can automatically combine class strings from parent
  'container': this.props.className,    

  // add a specific class name
  'wrapper': 'wrapper ' +  this.props.hasHover,

  // auto calc the classnames
  'date-fa-icon': _=> {
    return this.state.searching
      ? 'fa fa-spinner fa-spin fa-fw'
      : 'fa fa-search fa-fw'
  },

  // simply write the classname
  'label': 1
})

prototype.render = function() {

  let c = this.classes // shorten the long string into `c`

  return (
    <div className={c['container']}>
      <div className={c['wrapper']}>
        <i className={c['date-fa-icon']} />
      </div>
      <label className={c['label']}></label>
    </div>
  )
}

```

- create all classes at a time
- add `hash` to the class name ( only the key name), no global polution
- can use function to generate classname dynamically


In the scss file, it might looks like the following, I'm using atom smart templates to generate the scss and class hash automatically

```
$h: whatever-hash-here-to-make-class-no-global-polute;

.container#{$h} {

  .wrapper#{$h} {

  }

  .date-fa-icon#{$h} {

  }

  .label#{$h} {

  }

}

```

Finally, I don't need to waste my time on the stupid React style object, and write css looks like it should be
