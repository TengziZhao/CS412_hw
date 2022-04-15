function reverse(str){
    const out=[]
    for(var i=0;i<str.length; i++){
        c=str.charAt(i)
        out.push(str.charAt(i))
    }
    out.sort()
    out.reverse()
    let output=""
    for(var i=0;i<str.length; i++){
        output=output+out[i]
    }
    return output

}

const example='supercalifragilisticexpialidocious'
console.log(reverse(example));