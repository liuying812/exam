function unique(array){
	let temp = {}
	let result = []
	for(let i in array){
		let val = array[i]
		if(temp[val] !== 1){
			temp[val] = 1
			result.push(val)
		}
	}
	return result
}

function unique2(array){
	const  s = new Set();
	array.forEach(x => s.add(x));
	return [...s]
}

function unique3(array){
	return Array.from(new Set(array));
}

function unique4(array){
	return  [...new Set(array)]
}

function count(array){
	let result = {}
	for(let i in array){
		let val = array[i]  
		if(result[val] === undefined){
			result[val] = 1
		}else{
			result[val] += 1
		}
		
	}
	return result
}

let  array = [1,5,2,3,4,2,3,1,3,4]
//console.log(unique(array))
//console.log(count(array))
//console.log(unique2(array))
//console.log(unique3(array))
console.log(unique4(array))