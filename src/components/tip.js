import element from 'vdux/element'
import IconP from './iconp'
import {Block} from 'vdux-ui'

function render ({props, children}) {
	const {type} = props
	return (
		<Block>
			<IconP type={type} ml='0'><h6>Tips</h6></IconP>
			{children}
		</Block>
	)
}

export default {
	render
}