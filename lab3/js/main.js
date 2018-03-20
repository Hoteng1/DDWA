'use strict'

let worker = new Worker("js/workerObj.js")
let countPlant = document.getElementById("countPlant")
let updateTime = document.getElementById("updateTime")
let start, end, lastValue, time = 15000

worker.start = function() {
	start = new Date()
	end = localStorage.getItem('end')
	worker.postMessage(end)
	countPlant.value =  localStorage.getItem('lastValue')
	setInterval(
		function(){
			updateTime.value = `${Math.round((end - (new Date() - start))/1000)}`
			localStorage.setItem('end',end - (new Date() - start))
			localStorage.setItem('lastValue', countPlant.value)
		},200)
}()

worker.onmessage = function(e){
	end = time
	countPlant.value = e.data
	start = new Date()
	worker.postMessage(end)
}

function goWithTime(url){
	end -= (new Date() - start)
	localStorage.setItem('end',end)
	localStorage.setItem('lastValue', countPlant.value)
	window.location = url
}