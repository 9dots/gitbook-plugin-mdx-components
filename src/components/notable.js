import element from 'vdux/element'
import {Block, Box} from 'vdux-ui'
import {Marked} from 'markedx'
import Switch from '@f/switch'

var re = /(^\#\s)|(^\#\#\s)|(^\#\#\#\s)/gmi

function render ({props, children}) {
  const modChildren = children.reduce((arr, child, i) => {
    let idx = arr.length - 1
    return Switch({
      '#text': addText,
      'default': () => addElement(arr, child, idx)
    })(child.type, arr, child, idx)
  }, [])

  return (
    <Block margin='0 auto' maxWidth='75%' p='20px 15px 40px 15px' {...props}>
      {modChildren.map(({header, main, right}) => (
        <Block>
          <Block align='center start'>
            <Box flex><Marked>{main}</Marked></Box>
            <Block align='center center' w='33%'>{right}</Block>
          </Block>
        </Block>
      ))}
    </Block>
  )
}

function isNewSection (value) {
  return value.search(re) >= 0
}

function addText (arr, child, idx) {
  if (isNewSection(child.props.nodeValue)) {
    return [
      ...arr,
      {main: [child], right: []}
    ]
  } else {
    arr[idx].main.push(child)
    return arr
  }
}

function addElement (arr, child, idx) {
  if (child.type.type && child.type.type === 'note') {
    arr[idx].right.push(child)
    return arr
  }
  arr[idx].main.push(child)
  return arr
}


export default {
  render
}
