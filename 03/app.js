import {files} from './data.js';

function convertToBytes(length, unit){
    const data = {
        'B' : 1,
        'KB' : 1024,
        'MB' : 1024 * 1024,
        'BG' : 1024 * 1024
    }

    if(typeof data[unit] === undefined){
        console.error('Nie mam takiej jednostki')
    }

    return data[unit] * length

   


    if(unit === "B"){
        console.log(length, '??')
        return length
    } else if (unit === "KB"){
        return length * 1024
    } else if (unit === "MB"){
        return length * 1024 *1024
    } else if(unit === "GB"){
        return length * 1024 * 1024
    }
}

const getTotalSize = () => {
    let size = 0;
// files.forEach(f => {
//     // size += convertToBytes(f.size.length, f.size.unit)
//     const { size: {length, unit}} = f
//     size += convertToBytes(length, unit)
// })
files.forEach(({ size: {length, unit = "B"}})=> {
   size += convertToBytes(length, unit)
})

return size
}



console.log(getTotalSize())