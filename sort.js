//随机生成一个数组
function randomArray(min, max , length){
	const set = new Set();
	while(set.size  < length){
		set.add(randomFn(min,max));
	}
	return [...set]
}

function randomFn(min , max){
	return  Math.floor(Math.random() * (max - min) + min)	
}

//对数组进行冒泡排序
let array = randomArray(10, 30 , 10)
console.log(array)
function sort(array){
	for(let i = 0; i < array.length - 1; i++){
		for (var j = 0; j < array.length - i -1; j++) {
			if (array[j] > array[j+1]){
				var swap = array[j]
				array[j] = array[j + 1]
				array[j + 1] = swap
			}
		}
	}
	return array
}
console.log(sort(array))


