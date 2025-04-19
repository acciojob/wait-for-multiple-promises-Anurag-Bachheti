const start1 = Date.now();
const start2 = Date.now();
const start3 = Date.now();

const promise1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
			const end1 = Date.now();
			const seconds1 = ((end1 - start1)/1000).toFixed(3)
			resolve({text: "Promise 1", time: seconds1});
		}, 1000);
    });
};

const promise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
		const end2 = Date.now();
		const seconds2 = ((end2 - start2)/1000).toFixed(3)
		resolve({text: "Promise 2", time: seconds2})
		}, 1000);
    });
};

const promise3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
		const end3 = Date.now();
		const seconds3 = ((end3 - start3)/1000).toFixed(3)
			resolve({text: "Promise 3", time: seconds3})
		}, 1000);
    });
};

document.getElementById("loading").innerHTML = "Loading...";

Promise.all([promise1(), promise2(), promise3()]).then((data) => {
	document.getElementById("loading").style.display = "none"; 
	
	document.getElementById("first1").innerHTML = data[0].text;
    document.getElementById("first2").innerHTML = `${data[0].time}`;

	document.getElementById("second1").innerHTML = data[1].text;
	document.getElementById("second2").innerHTML = `${data[1].time}`;

	document.getElementById("third1").innerHTML = data[2].text;
	document.getElementById("third2").innerHTML = `${data[2].time}`;

	let totalTime = parseFloat(data[0].time)+
					parseFloat(data[1].time)+
					parseFloat(data[2].time);
	
	const totalRounded = totalTime.toFixed(3);
	
	document.getElementById("totalTime").innerHTML = `Total`;
	document.getElementById("forth2").innerHTML = `${totalRounded}`;
});
