function addMore() {
    var name = document.getElementById('name').value;
    document.getElementById('name').value = ""
    if (name == '') {
        document.getElementById('error').innerHTML = "Enter Value!!!"
    }
    else {
        var box = document.getElementById('box')
        var li = document.createElement('li')
        li.textContent = name
        var a = document.createElement('a')
        a.textContent = "          x"
        a.href = "javascript:void(0)"
        a.className="remove"
        li.appendChild(a)
        var position = box.firstElementChild;
        if (position == null) {
            box.appendChild(li)
        } else {
            box.insertBefore(li, position)
        }
    }
}
var btn = document.querySelector('ul')
btn.addEventListener('click', function (e) {
    var box = document.getElementById('box')
    var li = e.target.parentNode
    box.removeChild(li)
})
function clearAll(){
        var ele =document.getElementById('box')
        ele.remove('box')
}