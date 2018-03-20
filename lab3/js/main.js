let workerObj = new Worker("js/worker.js")
let countWork = document.getElementById("countWork")
let updateTime = document.getElementById("updateTime")
let start, end, lastValue, time = 15000

workerObj.start = function() {
	start = new Date()
	end = localStorage.getItem('end')
	workerObj.postMessage(end)
	countWork.value =  localStorage.getItem('lastValue')
	setInterval(
		function(){
			updateTime.value = `${Math.round((end - (new Date() - start))/1000)}`
			localStorage.setItem('end',end - (new Date() - start))
			localStorage.setItem('lastValue', countWork.value)
		},200)
}()

workerObj.onmessage = function(e){
	end = time
	countWork.value = e.data
	start = new Date()
	worker.postMessage(end)
}

function goWithTime(url){
	end -= (new Date() - start)
	localStorage.setItem('end',end)
	localStorage.setItem('lastValue', countWork.value)
	window.location = url
}