import element from 'vdux/element'
import {Block, Box} from 'vdux-ui'
import {Marked} from 'markedx'
import Switch from '@f/switch'

var re = /(^\#\s)|(^\#\#\s)|(^\#\#\#\s)|(^-\s\[.\])/gmi

function render ({props, children}) {
  const modChildren = children.reduce((arr, child, i) => {
    let idx = arr.length - 1
    return Switch({
      '#text': addText,
      'default': () => addElement(arr, child, idx)
    })(child.type, arr, child, idx)
  }, [])

  return (
    <Block class='notable' margin='0 auto' p='20px 15px 40px 15px' {...props}>
      {modChildren.map(({header, main, right}) => (
        <Block>
          <Block align='center start'>
            <Box flex><Marked>{main}</Marked></Box>
            {(right && right.length > 0) || main[0].type === 'hr' ? right : <Block ml='40px' w='33%'/>}
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
    if (arr[idx]) {
      arr[idx].main.push(child)
    } else {
      return [
        ...arr,
        {main: [child], right: []}
      ]
    }
    return arr
  }
}

function addElement (arr, child, idx) {
  if (child.type.type && child.type.type === 'note') {
    arr[idx].right.push(child)
    return arr
  }
  if (!arr[idx] || (child.props && child.props.section)) {
    return [
      ...arr,
      {main: [child], right: []}
    ]
  } else {
    arr[idx].main.push(child)
    return arr
  }
}


export default {
  render
}