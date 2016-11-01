import element from 'vdux/element'
import {Block} from 'vdux-ui'
import {Marked} from 'markedx'
import IconP from './IconP'

function getBorder (type) {
	switch (type) {
		case 'tip':
			return '2px solid tip'
		case 'reminder':
			return '2px solid reminder'
		case 'key':
			return '2px solid key'
		default:
			return '0px solid transparent'
	}
}

function render ({props, children}) {
	const {type, title} = props
  return (
    <Block class='note' w='33%' ml='30px' pl='10px' borderLeft={getBorder(type)} {...props}>
    	{type && <IconP ml='0' type={type}><h6>{title ? title : type}</h6></IconP>}
    	<Marked>{children}</Marked>
    </Block>
  )
}

export default {
  render,
  type: 'note'
}
