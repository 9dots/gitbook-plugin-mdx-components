import element from 'vdux/element'
import {Block} from 'vdux-ui'
import marked from 'marked'

function render ({props, children}) {
  const codeblock = `\`\`\`js\n${children[0].props.nodeValue}\n\`\`\``
  return (
    <Block lineHeight='1' innerHTML={marked(codeblock)} {...props}/>
  )
}

export default {
  render
}
