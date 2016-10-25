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
  console.log(testPage === '- [ ] one\n\t- [ ] two')
  console.log(markedx('- [ ] one\n\t- [ ] two'), markedx(testPage))
  t.end()
})

var testPage = `- [ ] one
  - [ ] two`
