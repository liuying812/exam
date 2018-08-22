window.jQuery = function(nodeOrSelector){
	let nodes = {}
	nodes.addClass = function(){}
	nodes.text = function(){}
	return nodes
}

window.$ = window.jQuery

window.Promise = function(fn){
  // ...
  return {
    then: function(){}
  }
}

window.$.ajax = function({url,method,body}){

	return new Promise(function(success, fail){

	let request = new XMLHttpRequest()
	request.open(method, url)
	
	for(let key in headers){
		let value = headers[key]
		request.setRequestHeader(key, value)
	}

	request.onreadystatechange = () => {
		if(request.readyState === 4){
			if (request.status >= 200 && request.status < 300) {
				success.call(undefined, request.requestText)
			}else if(request.status >= 400){
				fail.call(undefined, request)
			}
		}
	}

	request.send(body)

	})
}


myButton.addEventListener('click', (e)=>{
  window.jQuery.ajax({
    url: '/abc',
    method: 'get',
    headers: {
      'content-type':'application/x-www-form-urlencoded',
      'myHeader': 'xyz'
    }  
  }).then(
	(text) => {console.log(text)},
	(request) => {console.log(request)}
  )
})