// domain/.netlify/functions/hello
const items = [
  { id: 1, name: 'name1' },
  { id: 2, name: 'name2' },
]
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'hello world',
  }
}
