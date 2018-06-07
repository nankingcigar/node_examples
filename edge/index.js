var edge = require('edge-js');
 
var helloWorld = edge.func(function () {/*
    async (input) => { 
        return ".NET Welcomes " + input.ToString(); 
    }
*/});
 
helloWorld('JavaScript', function (error, result) {
    if (error) throw error;
    console.log(result);
});

var getTop10Users = edge.func('ms-sql', {
    source: 'select top 10 * from [User]',
    connectionString: 'SERVER=.;DATABASE=ExtracurricularCreditSystem;uid=sa;pwd=Cortland1;'
});

getTop10Users(null, function (error, result) {
    if (error) throw error;
    console.log(JSON.stringify(result));
});