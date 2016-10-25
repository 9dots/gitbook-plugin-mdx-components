import element from 'vdux/element'
import {Block} from 'vdux-ui'
import {Marked} from 'markedx'

function render ({props, children}) {
  return (
    <Block {...props}>
      <Marked>{children}</Marked>
    </Block>
  )
}

export default {
  render,
  type: 'note'
}
