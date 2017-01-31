var sampleArray = [0,'Dog','one'];
for (var i in sampleArray ) 
{
    console.log (i);
}
var sampleObject = { 0 : 0 , 1: '"Dog"' , 2: '"One"' };
for (var i in sampleObject )
{
    var string = "The Index " +i+ " : " + sampleObject[i];
    console.log (string);
}