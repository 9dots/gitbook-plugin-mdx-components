var test = require('tape')
var markedx = require('markedx')
var components = require('..').default

test('it should convert and save components', (t) => {
  console.log(markedx('<header title="header" subtitle="subtitle"/>'))
  t.end()
})

test('it should work for codeblock', (t) => {
  console.log(markedx('<codebox>{`function render () {return 5}`}</codebox>'))
  t.end()
})

test('it should work for notable', (t) => {
  console.log(markedx('<notable>### header\ntext under header\n<note>more text</note>\n### new section\n writing stuff</notable>'))
  t.end()
})

test('it should work for iconp', (t) => {
  console.log(markedx('<iconp icon="star">### header</iconp>'))
  t.end()
})

test.only('it should work for indented checkboxes', (t) => {
  console.log(markedx(`
1. **Do Now (10 min)**
1. **Small Group Lesson (17 min)**
  1. **Engage:** Sequence Through a Maze (5 min) 
  2. **Explore & Explain:** Introducing Loops (7 min) 
  3. **Elaborate:** Examples in the Real World (5 min) 
  4. **Extension:** Coding the Enemy (10 min)
2. **Independent Coding Practice:**
  1. **https://studio.code.org/s/course2/stage/3/puzzle/1 **`))
  t.end()
})

var testPage = `- [ ] one
  - [ ] two`
