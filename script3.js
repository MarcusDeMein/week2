function adds(){
	var stds = document.getElementById('students').insertRow(3);
	var s1 = stds.insertCell(0);
	var s2 = stds.insertCell(1);
	var s3 = stds.insertCell(2);
	s1.innerHTML = document.getElementById('name').value;
	s2.innerHTML = document.getElementById('surname').value;
	s3.innerHTML = document.getElementById('faculty').value;

}
const button = document.querySelector('button');
button.addEventListener('click', adds);
