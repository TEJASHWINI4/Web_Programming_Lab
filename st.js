concat = () => {
    let res = document.getElementById('string_name');
    let val = res.value;
    alert(val.slice(2, 5));

}



arr = () => {
    let val = [
        "html", "css", "js", "react"
    ];
    let res = document.getElementById('num_length');
    let r = parseInt(res);
    alert(val[res]);
}