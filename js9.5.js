var puppyURLs = [
	"http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_18/cw_606/ch_404/APL/uploads/2014/06/lab-too-cute-puppies-01-625x450-1.jpg",
	"http://r.ddmcdn.com/w_603/s_f/o_1/cx_0/cy_15/cw_603/ch_402/APL/uploads/2014/06/lab-too-cute-puppies-02-625x450-1.jpg",
	"http://r.ddmcdn.com/w_609/s_f/o_1/cx_0/cy_17/cw_609/ch_406/APL/uploads/2014/06/labs-too-cute-puppies-03-625x450-1.jpg",
	"http://r.ddmcdn.com/w_609/s_f/o_1/cx_0/cy_15/cw_609/ch_406/APL/uploads/2014/06/lab-too-cute-puppies-04-625x450-1.jpg",
	"http://r.ddmcdn.com/w_612/s_f/o_1/cx_0/cy_15/cw_612/ch_408/APL/uploads/2014/06/lab-too-cute-puppies-05-625x450-1.jpg",
	"http://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/06/ep221-01-625x450.jpg",
	"http://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/06/ep221-02-625x450.jpg",
	"http://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/06/ep221-03-625x450.jpg",
	"http://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/06/ep221-08-625x450.jpg", 
	"http://r.ddmcdn.com/w_624/s_f/o_1/cx_0/cy_17/cw_624/ch_416/APL/uploads/2014/06/ep221-10-625x450.jpg"
];

var llamaURLs = [
	"http://www.photographyblogger.net/wp-content/uploads/2012/10/16.jpg",
	"http://www.photographyblogger.net/wp-content/uploads/2012/10/21.jpg",
	"http://www.photographyblogger.net/wp-content/uploads/2012/10/31.jpg",
	"http://www.photographyblogger.net/wp-content/uploads/2012/10/41.jpg",
	"http://www.photographyblogger.net/wp-content/uploads/2012/10/52.jpg",
	"http://www.photographyblogger.net/wp-content/uploads/2012/10/61.jpg",
	"http://www.photographyblogger.net/wp-content/uploads/2012/10/81.jpg"
];

var imgField = document.getElementsByTagName("img")[0];
var currentArray = puppyURLs;

function setImage(images, index) {
	imgField.setAttribute("src", images[index]);
}

var index = 0;
setImage(puppyURLs, index);


document.getElementById("puppies").addEventListener("click", function() {
	currentArray = puppyURLs;
	setImage(currentArray, index)
});


document.getElementById("llamas").addEventListener("click", function() {
	currentArray = llamaURLs;
	setImage(currentArray, index)
});


window.setInterval(function() {
	index++;
	index = (index) % currentArray.length;
	console.log(index);
	setImage(currentArray, index);
}, 5000);



