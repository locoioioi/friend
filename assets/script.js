var pic1 = document.querySelector('.pic1js');
var pic2 = document.querySelector('.pic2js');

pic1.onclick = function() { 
    pic1.classList.add('display');
    pic2.classList.remove('display');
};
pic2.onclick = function() { 
    pic2.classList.add('display');
    pic1.classList.remove('display');
};