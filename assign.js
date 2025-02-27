const add = () => {
    const n1 = parseFloat(document.getElementById("first").value);
    const n2 = parseFloat(document.getElementById("second").value);
    document.getElementById("result").innerHTML = n1 + n2;
};
const sub = () => {
    const n1 = document.getElementById("first").value;
    const n2 = document.getElementById("second").value;
    document.getElementById("result").innerHTML = n1 - n2;
};
const mul = () => {
    const n1 = document.getElementById("first").value;
    const n2 = document.getElementById("second").value;
    document.getElementById("result").innerHTML = n1 * n2;
};
const div = () => { 
    const n1 = document.getElementById("first").value;
    const n2 = document.getElementById("second").value;
    document.getElementById("result").innerHTML = n1 / n2;
}; 

