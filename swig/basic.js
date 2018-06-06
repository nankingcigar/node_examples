var  swig = require('swig')
var template = swig.compile('{% if value > 10 %}<span>bigger than 10</span>{% else %}<span>less than or equal 10</span>{% endif %}')
var output = template({
    value: 9
})
console.log(output)
template = swig.compile('{{ a + b }}')
output = template({
    a: 10,
    b: 11
})
console.log(output)