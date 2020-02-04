const animals=['hen','elephant','llama']
function firstChar(animals)
{   
    return animals[0]
}

const sec=animals.map(firstChar)
console.log(sec.join(""))