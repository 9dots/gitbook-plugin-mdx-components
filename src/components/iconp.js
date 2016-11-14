import element from 'vdux/element'
import {Avatar, Icon, Block, Box, Text} from 'vdux-ui'
import {Marked} from 'markedx'

const types = {
	question: {
		icon: 'help',
		color: '#757575',
	},
	answer: {
		icon: 'check_circle',
		color: 'answer'
	},
	star: {
		icon: 'star',
		color: 'inherit'
	},
	tip: {
		icon: 'lightbulb_outline',
		color: '#757575'
	},
	key: {
		icon: 'vpn_key',
		color: '#757575'
	},
	reminder: {
		icon: 'history',
		color: '#757575'
	}
}

function render ({props, children}) {
  const {icon, src, iconSize, type} = props
  return (
    <Block
    	ml={(icon || type) && '3.5em'}
    	color={type ? types[type].color : 'inherit'}
    	align={src ? 'start center' : 'start start'}
    	{...props}
    	mt={src && '1em'}>
      {(icon || type) && <Icon mr='5px' lineHeight='1.1' name={type ? types[type].icon : icon}/>}
      {src && <Avatar mr='10px' mt='10px' size='50' src={src}/>}
      <Box align='start start' flex><Marked style={{display: 'flex'}}>{children}</Marked></Box>
    </Block>
  )
}

export default {
  render
}
