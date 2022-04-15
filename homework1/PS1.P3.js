const execute=(str,decor) => decor(str)
const split=execute('supercalifragilisticexpialidocious',
    str => str.replaceAll('c','1c').split('1'))
const replace=execute('supercalifragilisticexpialidocious',
    str => {
        return {
            originalString: str,
            modifiedString: str.replaceAll('a','A'),
            numberReplaced: str.match(/a/g).length,
            length:         str.length
        };
    })
console.log(split)
console.log(replace)