let btnElm = document.getElementById('btnClick'),
    btnClear = document.getElementById('btnClear'),
    pElm = document.getElementById('contarClick')
sect = document.getElementById('sect'),
    contar = 0;

const sbg = function () {
    const randColor = Math.floor(Math.random() * 16777215).toString(16);
    sect.style.backgroundColor = "#" + randColor;
}

pElm.textContent = 0;

btnElm.onclick = function () {
    contar++;
    pElm.textContent = contar;
    sbg();
}

btnClear.onclick = function () {
    pElm.textContent = 0;
    contar = 0;
    sect.style.backgroundColor = "white";
}