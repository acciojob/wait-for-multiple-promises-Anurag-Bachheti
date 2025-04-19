let block2 = document.getElementById("first2");

const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
			resolve("Promise 1")
		}, 1000);
    });
}

const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
			resolve("Promise 2")
		}, 1000);
    });
};

const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
			{resolve("Promise 3")
		}, 1000);
    });
};

Promise.all([promise1(), promise2(), promise3()]).then((data) => {
	document.getElementById("first1").innerHTML = data[0];
	document.getElementById("first2").innerHTML = data[0].getMiliseconds;
});





