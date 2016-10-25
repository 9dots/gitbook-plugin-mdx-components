import element from 'vdux/element'
import {Icon, Block, Box, Text} from 'vdux-ui'
import {Marked} from 'markedx'

function render ({props, children}) {
  const {icon} = props
  return (
    <Block align='start start' {...props}>
      <Icon mr='5px' name={icon}/>
      <Box align='start center' flex><Marked>{children}</Marked></Box>
    </Block>
  )
}

export default {
  render
}
