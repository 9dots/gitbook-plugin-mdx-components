import {Block, Icon, Text} from 'vdux-ui'
import element from 'vdux/element'

function render ({props, children}) {
  const {title, subtitle, icon, bgColor = '#FFA5AB'} = props

  return (
    <Block
      relative
      top='0'
      left='0'
      h='40vh'
      wide
      class='header'
      align='center center'
      minHeight='400px'
      bgColor={bgColor}
      column>
      <Block align='center center' column>
        <Text color='white' fs='xxl' fontWeight='800'>{title}</Text>
        <Text color='#333' fs='m'>{subtitle}</Text>
      </Block>
    </Block>
  )
}

export default {
  render
}
