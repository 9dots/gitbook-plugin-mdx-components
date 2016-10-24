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

test.only('it should work with markdown inside', (t) => {
  console.log(markedx('<page>### stuff\n1. one\n2. two\n<header title="test" subtitle="subtest"/></page>'))
  t.end()
})
