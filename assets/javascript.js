
// fungsi untuk merubah display dari masing masing element di main

function tentangOn(){
    document.getElementById("tentang").style.display="block";
    document.getElementById("sejarah").style.display="none";
    document.getElementById("geografis").style.display="none";
    document.getElementById("wisata").style.display="none";
}

function sejarahOn(){
    document.getElementById("tentang").style.display="none";
    document.getElementById("sejarah").style.display="block";
    document.getElementById("geografis").style.display="none";
    document.getElementById("wisata").style.display="none";
}

function geografisOn(){
    document.getElementById("tentang").style.display="none";
    document.getElementById("sejarah").style.display="none";
    document.getElementById("geografis").style.display="block";
    document.getElementById("wisata").style.display="none";
}

function wisataOn(){
    document.getElementById("tentang").style.display="none";
    document.getElementById("sejarah").style.display="none";
    document.getElementById("geografis").style.display="none";
    document.getElementById("wisata").style.display="block";
}